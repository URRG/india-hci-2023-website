'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

export default function EnablingCreativityMarqueeCard({
    className = '',
    trackChairs,
}) {
    return (
        <div
            className={twMerge(
                'flex h-max flex-col gap-6 rounded-3xl bg-zinc-900 p-6 sm:gap-10',
                className
            )}
        >
            <h1 className="font-heading text-2xl text-white sm:text-4xl">
                Track Chairs
            </h1>
            <div className="flex flex-wrap gap-8">
                {trackChairs.map((trackChair) => (
                    <div className="flex items-center gap-3">
                        <Image
                            className="rounded-full bg-zinc-700"
                            src={trackChair.image}
                            alt="Anirudha Joshi"
                            width={80}
                            height={80}
                        />
                        <div className="flex flex-col gap-1">
                            <span className="whitespace-nowrap font-body text-base text-white">
                                {trackChair.name}
                            </span>
                            <span className="whitespace-nowrap font-body text-base text-zinc-500">
                                {trackChair.affiliation}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

EnablingCreativityMarqueeCard.propTypes = {
    className: PropTypes.string,
    trackChairs: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            affiliation: PropTypes.string,
            image: PropTypes.object,
        })
    ).isRequired,
};
