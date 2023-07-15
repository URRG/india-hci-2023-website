'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function ScheduleDatesCard({ notes, className = '' }) {
    const [highlightedNoteIndex, setHighlightedNoteIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setHighlightedNoteIndex((prevIndex) => {
                let newIndex = prevIndex + 1;

                if (newIndex >= notes.length) newIndex = 0;

                return newIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    });

    return (
        <div
            className={`${className} flex flex-col gap-6 rounded-3xl bg-zinc-900 p-6`}
        >
            <div className="flex flex-col gap-2">
                <div className="font-body text-[0.65rem] font-medium uppercase text-zinc-400 sm:text-xs">
                    From the chairs
                </div>
                <h1 className="font-heading text-2xl text-white sm:text-4xl">
                    Notes
                </h1>
            </div>
            <div className="flex flex-col gap-2">
                {notes.map((note, index) => (
                    <p
                        className={`${
                            index === highlightedNoteIndex
                                ? 'border-b-2 border-amber-500 pb-6 text-zinc-300'
                                : 'border-zinc-900 text-zinc-500'
                        } my-2 font-body text-base transition-all duration-200 ease-out`}
                    >
                        {note}
                    </p>
                ))}
            </div>
        </div>
    );
}

ScheduleDatesCard.propTypes = {
    className: PropTypes.string,
    notes: PropTypes.arrayOf(PropTypes.string).isRequired,
};
