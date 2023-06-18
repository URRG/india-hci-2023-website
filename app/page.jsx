'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Marquee from 'react-fast-marquee';

import swiggleYellow from '../public/images/swiggle-yellow.svg';
import gradient1 from '../public/gradients/gradient-1.svg';
import gradient2 from '../public/gradients/gradient-2.svg';

export default function Home() {
    return (
        <div className="flex flex-col">
            <main className="container mx-auto flex flex-col px-4">
                <div className="mt-8 flex w-full flex-row items-center justify-between">
                    <div className="flex flex-row gap-24">
                        <div className="flex flex-col gap-6 p-0 font-body text-lg">
                            <Icon
                                className="h-6 w-6 text-amber-500"
                                icon="solar:calendar-add-bold"
                            />
                            <div>23-24 November 2023</div>
                        </div>
                        <div className="flex flex-col gap-6 p-0 font-body text-lg">
                            <Icon
                                className="h-6 w-6 text-amber-500"
                                icon="solar:map-point-favourite-bold"
                            />
                            <div>School of Design, UPES, Dehradun </div>
                        </div>
                    </div>
                    <Icon icon="octicon:x-12" />
                    <div className="flex flex-col gap-6 p-0 font-body text-lg">
                        <Icon
                            className="h-6 w-6 text-amber-500"
                            icon="solar:letter-bold"
                        />
                        <div>info@indiahci.com</div>
                    </div>
                </div>
                <div className="mx-5 mt-24 flex flex-row gap-6">
                    <div className="flex max-w-lg flex-col gap-6 rounded-lg rounded-bl-none rounded-br-none bg-gradient-to-b from-white/60 to-transparent px-8 py-12 outline outline-1 outline-white/40">
                        <h1 className="font-heading text-4xl">
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
                    <div className="flex max-w-lg flex-col gap-6 rounded-lg rounded-bl-none rounded-br-none bg-gradient-to-b from-white/60 to-transparent px-8 py-12 outline outline-1 outline-white/40">
                        <h1 className="font-heading text-4xl">
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
                <a
                    className="flex min-h-[72px] flex-row items-center justify-start gap-8 rounded-2xl bg-zinc-800 px-8 text-sm font-semibold uppercase text-white shadow-xl"
                    href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FIndiaHCI2023%2FSubmission%2FIndex"
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
                    className="absolute -z-10 self-center opacity-90"
                    src={gradient1}
                    alt="Gradient"
                    width={2600}
                    height={1048}
                />
                <div className="mt-80 flex w-full flex-row gap-6">
                    <div className="flex grow flex-col gap-6 rounded-lg bg-white/20 px-8 py-12 outline outline-1 outline-white/50">
                        <h1 className="font-heading text-4xl">
                            Call for Papers
                        </h1>
                        <div className="font-body text-[16] opacity-50">
                            India HCI 2023 is the 14th edition of the
                            international conference series on Human-Computer
                            Interaction (HCI). Papers are the main medium for
                            conveying new research results at India HCI. We seek
                            submissions that push the boundaries of human
                            knowledge and that describe original, unpublished
                            work in the field of HCI.
                        </div>
                        <Link
                            className="mt-8 flex min-h-[72px] w-min flex-row items-center justify-center whitespace-nowrap rounded-2xl px-8 text-sm font-semibold uppercase text-zinc-900 outline outline-2 -outline-offset-2 outline-zinc-900"
                            href="/"
                        >
                            Read More
                        </Link>
                    </div>
                    <div className="flex grow flex-col gap-6 rounded-lg bg-white/20 px-8 py-12 outline outline-1 outline-white/50">
                        <h1 className="font-heading text-4xl">
                            Call for Posters
                        </h1>
                        <div className="font-body text-[16] opacity-50">
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
                            className="flex min-h-[72px] w-min flex-row items-center justify-center whitespace-nowrap rounded-2xl px-8 text-sm font-semibold uppercase text-zinc-900 outline outline-2 -outline-offset-2 outline-zinc-900"
                            href="/"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            </main>
            <Image
                className="-z-10 -mb-48 self-center"
                src={gradient2}
                alt="Gradient"
                width={2718}
                height={800}
            />
            <Marquee className="-mt-52 font-heading text-[100px] text-zinc-900/30 mix-blend-overlay">
                Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;
            </Marquee>
        </div>
    );
}
