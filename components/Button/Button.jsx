'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Marquee from 'react-fast-marquee';

import swiggleYellow from '../../public/images/swiggle-yellow.svg';

export default function Button({
    className,
    label,
    widthMode,
    linkType,
    linkHref,
    ...props
}) {
    const LinkTag = linkType === 'internal' ? Link : 'a';
    return (
        <LinkTag
            className={`${className} ${
                widthMode === 'full' ? 'gap-6' : 'w-min gap-0'
            } z-20 flex h-[4.5rem] items-center justify-center whitespace-nowrap rounded-full border-2 border-amber-500 bg-zinc-900 px-8 text-sm font-semibold uppercase text-white shadow-xl transition duration-300 hover:scale-[1.01] hover:bg-zinc-800`}
            href={linkHref}
            {...(linkType === 'external' && {
                target: '_blank',
                rel: 'noopener noreferrer',
            })}
        >
            {label}
            <div
                className="w-full overflow-hidden"
                style={{
                    maskImage: 'linear-gradient(90deg,#0000,#000 3% 97%,#0000)',
                }}
            >
                {widthMode === 'full' && (
                    <Marquee speed="10" direction="right">
                        <Image
                            className="min-w-max"
                            src={swiggleYellow}
                            alt="swiggly-line"
                            width="1600"
                            height="400"
                        />
                    </Marquee>
                )}
            </div>
        </LinkTag>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    widthMode: PropTypes.oneOf(['full', 'auto']).isRequired,
    linkType: PropTypes.oneOf(['internal', 'external']),
    linkHref: PropTypes.string,
};

Button.defaultProps = {
    className: '',
    linkType: 'internal',
    linkHref: '/',
};
