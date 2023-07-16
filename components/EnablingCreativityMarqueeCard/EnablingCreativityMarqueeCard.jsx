'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import Marquee from 'react-fast-marquee';

import Video from '../Video/Video';

import gradient from '../../public/videos/gradient.webm';

export default function EnablingCreativityMarqueeCard({ className = '' }) {
    return (
        <div
            className={twMerge(
                'align-center relative flex h-max overflow-clip rounded-3xl bg-zinc-50',
                className
            )}
        >
            <Video
                className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
                src={gradient}
                autoPlay
            />
            <Marquee className="pointer-events-none pb-8 pt-6 font-heading text-6xl text-zinc-900/70 mix-blend-overlay">
                Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;
            </Marquee>
        </div>
    );
}

EnablingCreativityMarqueeCard.propTypes = {
    className: PropTypes.string,
};
