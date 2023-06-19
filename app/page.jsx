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
                <div className="flex grow flex-col items-start justify-between gap-10 lg:flex-row lg:items-center lg:gap-0">
                    <div className="flex flex-col gap-10 lg:flex-row lg:gap-24">
                        <div className="flex flex-col gap-6 p-0">
                            <Icon
                                className="h-6 w-6 text-amber-500"
                                icon="solar:calendar-add-bold"
                            />
                            <div className="font-body text-base font-light lg:text-lg">
                                23-24 November 2023
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 p-0 font-body text-lg">
                            <Icon
                                className="h-6 w-6 text-amber-500"
                                icon="solar:map-point-favourite-bold"
                            />
                            <div className="font-body text-base font-light lg:text-lg">
                                School of Design, UPES, Dehradun
                            </div>
                        </div>
                    </div>
                    <Icon className="hidden lg:block" icon="octicon:x-12" />
                    <div className="flex flex-col gap-6 p-0 font-body text-lg">
                        <Icon
                            className="h-6 w-6 text-amber-500"
                            icon="solar:letter-bold"
                        />
                        <div className="font-body text-base font-light lg:text-lg">
                            info@indiahci.org
                        </div>
                    </div>
                </div>
                <div className="mt-14 flex flex-col gap-6 lg:mx-5 lg:mt-28 lg:flex-row">
                    <div className="relative -z-20 flex w-full flex-col gap-8 rounded-lg bg-zinc-50 bg-gradient-to-b p-5 outline outline-1 outline-zinc-100 sm:gap-10 sm:px-8 sm:pb-8 sm:pt-10 lg:max-w-lg lg:pb-24">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
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
                    <div className="relative -z-20 flex w-full flex-col gap-8 rounded-lg bg-zinc-50 bg-gradient-to-b p-5 outline outline-1 outline-zinc-100 sm:gap-10 sm:px-8 sm:pb-8 sm:pt-10 lg:max-w-lg lg:pb-24">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
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
                <Image
                    className="my-36 animate-[spin_30s_linear_infinite] self-center"
                    src={humanIntelligence}
                    alt="Human intelligence and some sparks of AGI only"
                    width={140}
                    height={140}
                />
                <div className="flex w-full flex-col gap-6 lg:flex-row">
                    <div className="flex flex-col gap-8 rounded-lg bg-zinc-50 p-5 outline outline-1 outline-zinc-100 sm:gap-10 sm:p-8">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            Call for Papers
                        </h1>
                        <div className="font-body text-base opacity-50 lg:h-32">
                            India HCI 2023 is the 14th edition of the
                            international conference series on Human-Computer
                            Interaction (HCI). Papers are the main medium for
                            conveying new research results at India HCI. We seek
                            submissions that push the boundaries of human
                            knowledge and that describe original, unpublished
                            work in the field of HCI.
                        </div>
                        <Link
                            className="flex h-16 w-min flex-row items-center justify-center whitespace-nowrap rounded-2xl px-8 text-sm font-semibold uppercase text-zinc-900 outline outline-2 -outline-offset-2 outline-zinc-900 sm:h-[4.5rem]"
                            href="/"
                        >
                            Read More
                        </Link>
                    </div>
                    <div className="flex flex-col gap-8 rounded-lg bg-zinc-50 p-5 outline outline-1 outline-zinc-100 sm:gap-10 sm:p-8">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            Call for Posters
                        </h1>
                        <div className="font-body text-base opacity-50 lg:h-32">
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
                            className="flex h-16 w-min flex-row items-center justify-center whitespace-nowrap rounded-2xl px-8 text-sm font-semibold uppercase text-zinc-900 outline outline-2 -outline-offset-2 outline-zinc-900 sm:h-[4.5rem]"
                            href="/"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </main>
            <div className="w-screen overflow-x-clip">
                <div className="relative -z-10 -ml-12 mt-48 h-60 w-[110%] self-center bg-gradient-to-r from-amber-500 via-orange-500 via-30% to-[#ff2d68] blur-[100px] lg:h-80" />
                <Marquee className="relative z-20 -mt-80 h-16 overflow-hidden font-heading text-6xl text-zinc-900/30 mix-blend-overlay lg:-mt-40 lg:h-28 lg:text-[100px]">
                    Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;
                </Marquee>
            </div>
            <div className="sticky bottom-4 z-10 h-28 w-full self-center bg-gradient-to-r from-amber-500 via-orange-500 via-30% to-[#ff2d68] blur-[32px] lg:container lg:absolute lg:top-[700px]" />
            <div className="container sticky bottom-0 z-20 self-center p-5 lg:absolute lg:top-[720px]">
                <a
                    className="flex h-[4.5rem] flex-row items-center justify-start gap-8 rounded-2xl bg-zinc-800 px-8 text-sm font-semibold uppercase text-white shadow-xl"
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
            </div>
        </div>
    );
}
