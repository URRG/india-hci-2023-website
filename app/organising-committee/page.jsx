'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Helmet } from 'react-helmet';
import { twJoin } from 'tailwind-merge';
import { Icon } from '@iconify/react';

import EnablingCreativityMarqueeCard from '../../components/EnablingCreativityMarqueeCard/EnablingCreativityMarqueeCard';

import organisingCommitteeData from '../../data/organisingCommitteeData';

export default function OrganisingCommittee() {
    const [highlightedTrack, setHighlightedTrack] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomIndex = Math.floor(
                Math.random() * organisingCommitteeData.length
            );
            setHighlightedTrack(randomIndex);
        }, 3000);

        return () => clearInterval(interval);
    }, [organisingCommitteeData]);

    return (
        <div className="flex flex-col overflow-clip rounded-bl-3xl rounded-br-3xl bg-white">
            <Helmet>
                <title>India HCI 2023 - Organising Committee</title>
            </Helmet>
            <main className="flex flex-col px-4">
                <div className="mt-10 rounded-[2rem] bg-transparent lg:bg-black lg:p-4">
                    <div className="flex w-full flex-col gap-1 lg:grid lg:grid-cols-6 lg:grid-rows-3 lg:gap-4">
                        {organisingCommitteeData.map((track, index) => (
                            <a
                                className={twJoin(
                                    'group col-span-1 row-span-1 flex h-16 items-center justify-center gap-4 overflow-clip rounded-3xl p-6 transition-all duration-500 hover:scale-[1.03] lg:h-48 lg:flex-col',
                                    index === highlightedTrack
                                        ? 'bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048]'
                                        : 'justify-center bg-zinc-900'
                                )}
                                href={`#${track.track
                                    .toLowerCase()
                                    .replace(/\s+/g, '-')}-chairs`}
                            >
                                {track.iconifyIcon && (
                                    <Icon
                                        className={twJoin(
                                            index === highlightedTrack
                                                ? 'hidden'
                                                : 'hidden h-6 w-6 text-zinc-700 lg:block'
                                        )}
                                        icon={track.iconifyIcon}
                                    />
                                )}
                                <span
                                    className={twJoin(
                                        'transition-all duration-300',
                                        index === highlightedTrack
                                            ? 'h-9 font-heading text-2xl text-zinc-900 xl:h-auto xl:text-4xl'
                                            : 'text-center font-body text-base text-zinc-300 group-hover:bg-gradient-to-br group-hover:from-amber-500 group-hover:via-orange-500 group-hover:via-30% group-hover:to-[#FF0048] group-hover:bg-clip-text group-hover:text-transparent xl:text-xl'
                                    )}
                                >
                                    {track.track} Chairs
                                </span>
                            </a>
                        ))}
                    </div>
                    <EnablingCreativityMarqueeCard className="mt-4" />
                </div>
                <div className="container mx-auto">
                    {organisingCommitteeData.map((track) => (
                        <div
                            id={`${track.track
                                .toLowerCase()
                                .replace(/\s+/g, '-')}-chairs`}
                            className="my-28 flex flex-col gap-6"
                        >
                            <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                                {track.track} Chairs
                            </h1>
                            {track.chairs.map((chair) => (
                                <div className="flex flex-col gap-4 max-xl:mb-12 xl:h-[24rem] xl:flex-row">
                                    {chair.name && (
                                        <div
                                            className={twJoin(
                                                'flex w-full min-w-[20rem] flex-col justify-center gap-2 rounded-3xl bg-zinc-900 p-6 xl:w-40',
                                                chair.bio[0] ? 'w-40' : 'grow',
                                                chair.displayOrder.findIndex(
                                                    (element) =>
                                                        element === 'name'
                                                ) === 0 && 'xl:order-1',
                                                chair.displayOrder.findIndex(
                                                    (element) =>
                                                        element === 'name'
                                                ) === 1 && 'xl:order-2',
                                                chair.displayOrder.findIndex(
                                                    (element) =>
                                                        element === 'name'
                                                ) === 2 && 'xl:order-3'
                                            )}
                                        >
                                            <span className="font-heading text-3xl text-zinc-300">
                                                {chair.name}
                                            </span>
                                            <span className="font-body text-base text-zinc-500">
                                                {chair.affiliation}
                                            </span>
                                        </div>
                                    )}
                                    {chair.photo && (
                                        <Image
                                            className={twJoin(
                                                'min-h-[20rem] w-full min-w-[20rem] rounded-3xl bg-zinc-900 object-cover xl:w-40',
                                                chair.displayOrder.findIndex(
                                                    (element) =>
                                                        element === 'photo'
                                                ) === 0 && 'xl:order-1',
                                                chair.displayOrder.findIndex(
                                                    (element) =>
                                                        element === 'photo'
                                                ) === 1 && 'xl:order-2',
                                                chair.displayOrder.findIndex(
                                                    (element) =>
                                                        element === 'photo'
                                                ) === 2 && 'xl:order-3'
                                            )}
                                            src={chair.photo}
                                        />
                                    )}
                                    {chair.bio[0] && (
                                        <div
                                            className={twJoin(
                                                'flex flex-col gap-2 rounded-3xl bg-zinc-100 p-6',
                                                chair.displayOrder.findIndex(
                                                    (element) =>
                                                        element === 'bio'
                                                ) === 0 && 'xl:order-1',
                                                chair.displayOrder.findIndex(
                                                    (element) =>
                                                        element === 'bio'
                                                ) === 1 && 'xl:order-2',
                                                chair.displayOrder.findIndex(
                                                    (element) =>
                                                        element === 'bio'
                                                ) === 2 && 'xl:order-3'
                                            )}
                                        >
                                            {chair.bio.map((paragraph) => (
                                                <p className="font-body text-base text-zinc-500">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
