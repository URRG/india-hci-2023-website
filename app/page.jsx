'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Marquee from 'react-fast-marquee';

import swiggleYellow from '../public/images/swiggle-yellow.svg';
import humanIntelligence from '../public/images/human-intelligence.svg';

export default function Home() {
    return (
        <div className="flex flex-col">
            <main className="container mx-auto mt-14 flex flex-col px-5">
                <div className="mt-0 flex grow flex-row items-center justify-between">
                    <div className="flex flex-row gap-24">
                        <div className="flex flex-col gap-6 p-0">
                            <Icon
                                className="h-6 w-6 text-amber-500"
                                icon="solar:calendar-add-bold"
                            />
                            <div className="font-body text-lg font-light">
                                23-24 November 2023
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 p-0 font-body text-lg">
                            <Icon
                                className="h-6 w-6 text-amber-500"
                                icon="solar:map-point-favourite-bold"
                            />
                            <div className="font-body text-lg font-light">
                                School of Design, UPES, Dehradun
                            </div>
                        </div>
                    </div>
                    <Icon className="hidden md:block" icon="octicon:x-12" />
                    <div className="flex flex-col gap-6 p-0 font-body text-lg">
                        <Icon
                            className="h-6 w-6 text-amber-500"
                            icon="solar:letter-bold"
                        />
                        <div className="font-body text-lg font-light">
                            info@indiahci.org
                        </div>
                    </div>
                </div>
                <div className="mx-5 mt-28 flex flex-row gap-6">
                    <div className="relative -z-20 flex max-w-lg flex-col gap-10 rounded-lg rounded-bl-none rounded-br-none bg-zinc-50 bg-gradient-to-b px-8 pb-24 pt-10 outline outline-1 outline-zinc-100">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-4xl text-transparent">
                            Welcome to India HCI
                        </h1>
                        <div className="font-body text-[16] opacity-50">
                            India HCI is a premier international conference in
                            the field of Human-Computer Interaction (HCI) that
                            is held annually in India. It aims to positively
                            impact and shape humanity through high-quality
                            research in HCI and Design. The 14th international
                            India HCI 2023 conference is hosted by the School of
                            Design at UPES amongst Dehradun&apos;s beautifully
                            lush and verdant environs.
                        </div>
                    </div>
                    <div className="relative -z-20 flex max-w-lg flex-col gap-10 rounded-lg rounded-bl-none rounded-br-none bg-zinc-50 bg-gradient-to-b px-8 pb-24 pt-10 outline outline-2 outline-zinc-200">
                        <h1 className="relative bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-4xl text-transparent">
                            Enabling Creativity
                        </h1>
                        <div className="font-body text-[16] opacity-50">
                            The conference theme is “HCI for Enabling
                            Creativity” and aims to initiate dialogs, debates,
                            and discussions that enable synergies between
                            Creativity and HCI. We invite authors to present
                            bold ideas and research that further expand the
                            boundaries of HCI research.
                        </div>
                    </div>
                </div>
                <div className="relative bottom-16 -z-10 h-28 w-full self-center bg-gradient-to-r from-amber-500 via-orange-500 via-30% to-[#ff2d68] blur-[32px]" />
                <a
                    className="relative bottom-32 flex h-[4.5rem] flex-row items-center justify-start gap-8 rounded-2xl bg-zinc-800 px-8 text-sm font-semibold uppercase text-white shadow-xl"
                    href="https://account.indiahci.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Register
                    <div className="w-full overflow-hidden">
                        <Image
                            className="w-max"
                            src={swiggleYellow}
                            alt="swiggly-line"
                            width="1600"
                            height="400"
                        />
                    </div>
                </a>
                <Image
                    className="animate-[spin_30s_linear_infinite] self-center"
                    src={humanIntelligence}
                    alt="Human intelligence and some sparks of AGI only"
                    width={140}
                    height={140}
                />
                <div className="mt-36 flex w-full flex-row gap-6">
                    <div className="flex flex-col gap-10 rounded-lg bg-zinc-50 p-8 outline outline-1 outline-zinc-100">
                        <h1 className="relative bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-4xl text-transparent">
                            Call for Papers
                        </h1>
                        <div className="h-32 font-body text-[16] opacity-50">
                            India HCI 2023 is the 14th edition of the
                            international conference series on Human-Computer
                            Interaction (HCI). Papers are the main medium for
                            conveying new research results at India HCI. We seek
                            submissions that push the boundaries of human
                            knowledge and that describe original, unpublished
                            work in the field of HCI.
                        </div>
                        <Link
                            className="flex h-[4.5rem] w-min flex-row items-center justify-center whitespace-nowrap rounded-2xl px-8 text-sm font-semibold uppercase text-zinc-900 outline outline-2 -outline-offset-2 outline-zinc-900"
                            href="/"
                        >
                            Read More
                        </Link>
                    </div>
                    <div className="flex flex-col gap-10 rounded-lg bg-zinc-50 p-8 outline outline-1 outline-zinc-100">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-4xl text-transparent">
                            Call for Posters
                        </h1>
                        <div className="h-32 font-body text-[16] opacity-50">
                            Posters and Demonstrations at India HCI 2023 will
                            showcase your novel implementations, interaction
                            designs, concepts, techniques, devices or systems to
                            a wider audience at the conference and provide
                            opportunities to interact with each other. We
                            welcome posters, demonstrations & interactivity
                            prototypes from students and researchers in all
                            stages of their careers.
                        </div>
                        <Link
                            className="flex h-[4.5rem] w-min flex-row items-center justify-center whitespace-nowrap rounded-2xl px-8 text-sm font-semibold uppercase text-zinc-900 outline outline-2 -outline-offset-2 outline-zinc-900"
                            href="/"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </main>
            <div className="relative -bottom-16 -z-10 mt-48 h-60 w-[110%] self-center bg-gradient-to-r from-amber-500 via-orange-500 via-30% to-[#ff2d68] blur-[100px]" />
            <Marquee className="-mt-52 font-heading text-[100px] text-zinc-900/30 mix-blend-overlay">
                Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;
            </Marquee>
        </div>
    );
}
