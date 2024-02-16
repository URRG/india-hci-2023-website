'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

import { Icon } from '@iconify/react';

export default function ScheduleDatesCard({ scheduleDates, className = '' }) {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setCurrentDate(new Date()), 1000);

        return () => clearInterval(interval);
    });

    const [nextUpcomingScheduleDateIndex, setNextUpcomingScheduleDateIndex] =
        useState(-1);
    const [hasDeadlinePassed, setHasDeadlinePassed] = useState(false);

    useEffect(() => {
        setHasDeadlinePassed(currentDate > scheduleDates[0].date);

        let index = 0;
        scheduleDates.forEach((date, i) => {
            if (currentDate > scheduleDates[i].date) {
                index = i + 1;
            }
        });
        setNextUpcomingScheduleDateIndex(index);
    }, [currentDate, scheduleDates]);

    return (
        <div
            className={twMerge(
                'flex h-max flex-col gap-6 rounded-3xl bg-zinc-900 p-6',
                className
            )}
        >
            <div className="flex flex-col gap-2">
                <div className="font-body text-[0.65rem] font-medium uppercase text-zinc-400 sm:text-xs">
                    Status {hasDeadlinePassed ? 'Closed' : 'Open'}
                </div>
                <h1 className="font-heading text-2xl text-white sm:text-4xl">
                    Dates
                </h1>
            </div>
            <div className="flex flex-col gap-2">
                {scheduleDates.map((date, index) => (
                    <div
                        className={`${
                            index < nextUpcomingScheduleDateIndex
                                ? 'rounded-xl border-2 border-green-500 bg-zinc-800 sm:rounded-full'
                                : index === nextUpcomingScheduleDateIndex
                                ? 'rounded-xl bg-amber-500 sm:rounded-full'
                                : 'rounded-lg bg-zinc-800'
                        } flex gap-2 p-2 pr-4`}
                    >
                        <Icon
                            className={`${
                                index < nextUpcomingScheduleDateIndex
                                    ? 'text-green-500'
                                    : index === nextUpcomingScheduleDateIndex
                                    ? 'text-zinc-900'
                                    : 'text-amber-500'
                            } h-6 w-6 shrink-0`}
                            icon={`${
                                index < nextUpcomingScheduleDateIndex
                                    ? 'solar:check-circle-bold'
                                    : 'solar:clock-circle-bold'
                            }`}
                        />
                        <div className="flex grow flex-col justify-between gap-2 sm:flex-row">
                            <span
                                className={`${
                                    index === nextUpcomingScheduleDateIndex
                                        ? 'font-medium text-zinc-900'
                                        : 'font-normal text-white'
                                } font-body text-base`}
                            >
                                {date.date.toLocaleDateString('en-IN', {
                                    day: '2-digit',
                                    month: 'long',
                                })}
                            </span>
                            <span
                                className={`${
                                    index === nextUpcomingScheduleDateIndex
                                        ? 'font-medium text-zinc-900'
                                        : 'font-normal text-zinc-500'
                                } font-body text-base capitalize text-zinc-500`}
                            >
                                {date.event}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

ScheduleDatesCard.propTypes = {
    className: PropTypes.string,
    scheduleDates: PropTypes.arrayOf(
        PropTypes.shape({ date: PropTypes.object, event: PropTypes.string })
    ).isRequired,
};
