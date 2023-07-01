'use client';

import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { Icon } from '@iconify/react';
import { Disclosure, Transition } from '@headlessui/react';
import gradient from '../../public/videos/gradient.webm';
import Button from '../../components/Button/Button';

export default function Home() {
    return (
        <div className="flex flex-col overflow-clip rounded-bl-3xl rounded-br-3xl bg-white">
            <main className="flex flex-col items-center px-4">
                <div className="mt-10 grid grid-cols-8 gap-4">
                    <div className="col-span-full flex flex-col justify-between gap-6 rounded-3xl bg-zinc-100 p-6 lg:col-span-3">
                        <div className="flex flex-col gap-2">
                            <div className="font-body text-[0.65rem] font-medium uppercase text-zinc-400 sm:text-xs">
                                Call For Participation
                            </div>
                            <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                                Papers
                            </h1>
                        </div>
                        <div className="font-body text-[16] opacity-50">
                            India HCI 2023 is the 14th edition of the
                            international conference series on Human-Computer
                            Interaction (HCI) Design and Research. Sponsored by
                            the HCI Professionals Association of India and in
                            cooperation with ACM&apos;s special interest group
                            on computer-human interaction (SIGCHI).
                        </div>
                    </div>
                    <div className="align-center relative col-span-full flex overflow-hidden rounded-3xl bg-zinc-50 lg:col-span-5">
                        <video
                            className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
                            src={gradient}
                            playsInline
                            autoPlay
                            loop
                            muted
                            disablePictureInPicture
                            tabIndex={-1}
                        />
                        <Marquee className="pb-8 pt-6 font-heading text-6xl text-zinc-900/70 mix-blend-overlay">
                            Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;
                        </Marquee>
                    </div>
                </div>
                <Button
                    className="container mt-4 lg:static lg:bottom-auto"
                    widthMode="full"
                    label="Submit Work"
                    linkType="external"
                    linkHref="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FIndiaHCI2023%2FSubmission%2FIndex"
                />
                <div className="mt-4 grid grid-cols-8 gap-4">
                    <div className="col-span-full flex flex-col gap-8 rounded-3xl bg-zinc-900 p-5 sm:gap-10 sm:p-8 2xl:col-span-3">
                        <div className="flex flex-col gap-2">
                            <div className="font-body text-[0.65rem] font-medium uppercase text-zinc-400 sm:text-xs">
                                Status / Open
                            </div>
                            <h1 className="font-heading text-2xl text-white sm:text-4xl">
                                Important Dates
                            </h1>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 rounded-2xl bg-zinc-800 p-2 pr-4">
                                <Icon
                                    className="h-6 w-6 shrink-0 text-amber-500"
                                    icon="solar:clock-circle-bold"
                                />
                                <div className="flex grow flex-col justify-between gap-2 sm:flex-row">
                                    <span className="font-body text-base text-white">
                                        03 July
                                    </span>
                                    <span className="font-body text-base text-zinc-500">
                                        Papers due
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 rounded-2xl bg-zinc-800 p-2 pr-4">
                                <Icon
                                    className="h-6 w-6 shrink-0 text-amber-500"
                                    icon="solar:clock-circle-bold"
                                />
                                <div className="flex grow flex-col justify-between gap-2 sm:flex-row">
                                    <span className="font-body text-base text-white">
                                        03 August
                                    </span>
                                    <span className="font-body text-base text-zinc-500">
                                        Authors receive initial reviews
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 rounded-2xl bg-zinc-800 p-2 pr-4">
                                <Icon
                                    className="h-6 w-6 shrink-0 text-amber-500"
                                    icon="solar:clock-circle-bold"
                                />
                                <div className="flex grow flex-col justify-between gap-2 sm:flex-row">
                                    <span className="font-body text-base text-white">
                                        16 August
                                    </span>
                                    <span className="font-body text-base text-zinc-500">
                                        Rebuttals due
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 rounded-2xl bg-zinc-800 p-2 pr-4">
                                <Icon
                                    className="h-6 w-6 shrink-0 text-amber-500"
                                    icon="solar:clock-circle-bold"
                                />
                                <div className="flex grow flex-col justify-between gap-2 sm:flex-row">
                                    <span className="font-body text-base text-white">
                                        25 August
                                    </span>
                                    <span className="font-body text-base text-zinc-500">
                                        Reviews & notifications of approval
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 rounded-2xl bg-zinc-800 p-2 pr-4">
                                <Icon
                                    className="h-6 w-6 shrink-0 text-amber-500"
                                    icon="solar:clock-circle-bold"
                                />
                                <div className="flex grow flex-col justify-between gap-2 sm:flex-row">
                                    <span className="font-body text-base text-white">
                                        17 September
                                    </span>
                                    <span className="font-body text-base text-zinc-500">
                                        Shepherding decisions
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 rounded-2xl bg-zinc-800 p-2 pr-4">
                                <Icon
                                    className="h-6 w-6 shrink-0 text-amber-500"
                                    icon="solar:clock-circle-bold"
                                />
                                <div className="flex grow flex-col justify-between gap-2 sm:flex-row">
                                    <span className="font-body text-base text-white">
                                        30 September
                                    </span>
                                    <span className="font-body text-base text-zinc-500">
                                        Camera-ready submission due
                                    </span>
                                </div>
                            </div>
                        </div>
                        <p className="font-body text-base text-zinc-500">
                            We accept only electronic submissions through India
                            HCI&apos;s electronic submission system supported by
                            Microsoft CMT.
                        </p>
                    </div>
                    <div className="col-span-full flex flex-col gap-8 rounded-3xl bg-zinc-900 p-5 sm:gap-10 sm:p-8 2xl:col-span-5">
                        <div className="flex flex-col gap-2">
                            <div className="font-body text-[0.65rem] font-medium uppercase text-zinc-400 sm:text-xs">
                                From The Chairs
                            </div>
                            <h1 className="font-heading text-2xl text-white sm:text-4xl">
                                Important Notes
                            </h1>
                        </div>
                        <p className="font-body text-base text-zinc-500">
                            All acceptances will be conditional pending changes
                            that the committee may suggest or require for the
                            final camera-ready draft of the paper.
                        </p>
                        <p className="font-body text-base text-zinc-500">
                            The primary author of each accepted poster or demo
                            will receive detailed instructions on how to submit
                            a final publication-ready version of the paper and
                            the associated materials that are to be brought to
                            the conference venue. This means that the work will
                            not be formally accepted to India HCI until authors
                            submit a final draft for approval by the program
                            committee.
                        </p>
                        <p className="font-body text-base text-zinc-500">
                            We accept only electronic submissions through India
                            HCI electronic submission system supported by
                            Microsoft CMT. (All deadlines close at 23:59 IST).
                            At least one author must register for the
                            conference.
                        </p>
                    </div>
                    <div className="col-span-full flex flex-col gap-8 rounded-3xl bg-zinc-900 p-5 sm:gap-10 sm:p-8 2xl:col-span-5">
                        <h1 className="font-heading text-2xl text-white sm:text-4xl">
                            Track Chairs
                        </h1>
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-24 w-24 rounded-full bg-zinc-700" />
                                <span className="font-body text-base text-white">
                                    Anirudha Joshi
                                </span>
                                <span className="font-body text-base text-zinc-500">
                                    IIT Bombay
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-24 w-24 rounded-full bg-zinc-700" />
                                <span className="font-body text-base text-white">
                                    Gavin R. Sim
                                </span>
                                <span className="font-body text-base text-zinc-500">
                                    IIT Bombay
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="my-28 flex flex-col gap-6">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            Everything You Need To Know About India HCI 2023
                        </h1>
                        <div className="font-body text-base text-zinc-900">
                            <p className="">
                                India HCI brings together researchers and
                                practitioners from diverse areas that include
                                traditional graphical & web user interfaces,
                                tangible & ubiquitous computing, virtual &
                                augmented reality, multimedia, new input &
                                output devices, computer games, privacy,
                                security, visualization, health, accessibility
                                and ageing, design, user modelling, engineering
                                interactive systems, ICT for development, CSCW,
                                and more. India HCI provides a special spotlight
                                on papers that are relevant to South Asia,
                                including those related to culture, language,
                                socio-economic situations, and the industry from
                                the region. The intimate size, single track, and
                                comfortable surroundings make this conference an
                                ideal opportunity to exchange research results
                                and implementation experiences.
                            </p>
                        </div>
                    </div>
                    <div className="flex min-h-[4.5rem] items-start gap-3 rounded-3xl bg-gradient-to-r from-amber-500  to-[#FF0048] p-4 text-transparent lg:items-center">
                        <Icon
                            className="h-6 w-6 shrink-0 text-white"
                            icon="solar:verified-check-bold"
                        />
                        <p className="font-body text-base text-white">
                            Accepted papers will be published in the India HCI
                            2023 Conference Proceedings and will be included in
                            the ACM Digital Library
                        </p>
                    </div>
                    <div className="my-28 flex flex-col gap-6">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            Topics of Relevance
                        </h1>
                        <div className="font-body text-base text-zinc-900">
                            <p className="">
                                The organisinging committee invites submissions
                                of research papers in all areas of HCI design.
                                This includes all dimensions, e.g., people,
                                product, tools, processes, and industrial
                                applications, with research results contributing
                                to its understanding and support. Significantly
                                novel enabling technologies such as innovative
                                input devices, displays, new interaction
                                techniques, or new media that extend the
                                boundaries of traditional interaction, such as
                                natural user interfaces and interactions, mixed
                                reality, mobile interaction, computer games,
                                health, accessibility, ageing, user modelling.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Disclosure>
                                <Disclosure.Button className="flex h-[4.5rem] items-center justify-between gap-4 rounded-xl bg-zinc-50 p-4">
                                    <div className="flex gap-4">
                                        <Icon
                                            className="h-6 w-6 shrink-0 text-amber-500"
                                            icon="solar:notes-bold"
                                        />
                                        <span className="text-left font-body text-base text-zinc-900">
                                            Design for user experience and
                                            usability
                                        </span>
                                    </div>
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:block ui-not-open:hidden"
                                        icon="solar:round-alt-arrow-up-bold"
                                    />
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:hidden ui-not-open:block"
                                        icon="solar:round-alt-arrow-down-bold"
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel>
                                        <ul className="mb-8 flex flex-wrap gap-2 font-body text-base font-light text-amber-500">
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Design methods
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Evaluation methods
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                UX (User Experience) and UI
                                                Design
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                HCI in Industry and Business
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Design Thinking
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Human-Centered Design
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                User-Centered Design
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Heuristics for Design
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Guidelines for Design
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Ergonomics and Human Factors
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Service Design
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Psychology and Cognition
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Social Sciences
                                            </li>
                                        </ul>
                                    </Disclosure.Panel>
                                </Transition>
                            </Disclosure>
                            <Disclosure>
                                <Disclosure.Button className="flex h-[4.5rem] items-center justify-between gap-4 rounded-xl bg-zinc-50 p-4">
                                    <div className="flex gap-4">
                                        <Icon
                                            className="h-6 w-6 shrink-0 text-amber-500"
                                            icon="solar:notes-bold"
                                        />
                                        <span className="text-left font-body text-base text-zinc-900">
                                            Design for immersive environment and
                                            interactions
                                        </span>
                                    </div>
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:block ui-not-open:hidden"
                                        icon="solar:round-alt-arrow-up-bold"
                                    />
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:hidden ui-not-open:block"
                                        icon="solar:round-alt-arrow-down-bold"
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel>
                                        <ul className="mb-8 flex flex-wrap gap-2 font-body text-base font-light text-amber-500">
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Virtual reality
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Augmented reality
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Mixed reality
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Locomotion in immersive
                                                environment
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Orientation in immersive
                                                environment
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Navigation in immersive
                                                environment
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Challenges with immersive
                                                environment
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Human factors
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Multimodal interactions
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Human-robot interactions
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Collaboration
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Gesture-based interaction design
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Tangible interaction design
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Tactile interaction design
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Haptic interaction design
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                NUI (natural interaction design)
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Child-Computer interaction
                                            </li>
                                        </ul>
                                    </Disclosure.Panel>
                                </Transition>
                            </Disclosure>
                            <Disclosure>
                                <Disclosure.Button className="flex h-[4.5rem] items-center justify-between gap-4 rounded-xl bg-zinc-50 p-4">
                                    <div className="flex gap-4">
                                        <Icon
                                            className="h-6 w-6 shrink-0 text-amber-500"
                                            icon="solar:notes-bold"
                                        />
                                        <span className="text-left font-body text-base text-zinc-900">
                                            Design for art, culture and humanity
                                        </span>
                                    </div>
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:block ui-not-open:hidden"
                                        icon="solar:round-alt-arrow-up-bold"
                                    />
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:hidden ui-not-open:block"
                                        icon="solar:round-alt-arrow-down-bold"
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel>
                                        <ul className="mb-8 flex flex-wrap gap-2 font-body text-base font-light text-amber-500">
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Creative art preservation
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Traditional culture preservation
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Cultural differences and HCI
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Gender in HCI design
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Digital humanities
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Internationalisation and
                                                globalisation
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Localization
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Interface for disabled
                                                individuals
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Interface for senior people
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Interface for children
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Interface for infants
                                            </li>
                                        </ul>
                                    </Disclosure.Panel>
                                </Transition>
                            </Disclosure>
                            <Disclosure>
                                <Disclosure.Button className="flex h-[4.5rem] items-center justify-between gap-4 rounded-xl bg-zinc-50 p-4">
                                    <div className="flex gap-4">
                                        <Icon
                                            className="h-6 w-6 shrink-0 text-amber-500"
                                            icon="solar:notes-bold"
                                        />
                                        <span className="text-left font-body text-base text-zinc-900">
                                            HCI for games/entertainment
                                            computing/creative computation
                                        </span>
                                    </div>
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:block ui-not-open:hidden"
                                        icon="solar:round-alt-arrow-up-bold"
                                    />
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:hidden ui-not-open:block"
                                        icon="solar:round-alt-arrow-down-bold"
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel>
                                        <ul className="mb-8 flex flex-wrap gap-2 font-body text-base font-light text-amber-500">
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Edutainment /Education games
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Video games
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Mobile games
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Social network games
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Multiplayer games /MMORPGs
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                VR/ AR games
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Therapeutic games
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Digital games/Online games
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Game enjoyment/addiction
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Player personality,
                                                characteristics and demographics
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Gender and games
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Game and flow /Game immersion
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Creative Support Tools
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                HCI for Enabling Creativity
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Interactive Art Installations
                                            </li>
                                        </ul>
                                    </Disclosure.Panel>
                                </Transition>
                            </Disclosure>
                            <Disclosure>
                                <Disclosure.Button className="flex h-[4.5rem] items-center justify-between gap-4 rounded-xl bg-zinc-50 p-4">
                                    <div className="flex gap-4">
                                        <Icon
                                            className="h-6 w-6 shrink-0 text-amber-500"
                                            icon="solar:notes-bold"
                                        />
                                        <span className="text-left font-body text-base text-zinc-900">
                                            Design for Indian knowledge system
                                            and social organisation
                                        </span>
                                    </div>
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:block ui-not-open:hidden"
                                        icon="solar:round-alt-arrow-up-bold"
                                    />
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:hidden ui-not-open:block"
                                        icon="solar:round-alt-arrow-down-bold"
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel>
                                        <ul className="mb-8 flex flex-wrap gap-2 font-body text-base font-light text-amber-500">
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Design methods of knowledge
                                                systems
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Design models of knowledge
                                                systems
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Evaluation of knowledge systems
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Wellbeing, health, and education
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Digital inequality in HCI
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Information design for social
                                                cause
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Remote work and productivity
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Learning pedagogy and education
                                                system
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Social design
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Geopolitics and HCI
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                HCI in Society 5.0
                                            </li>
                                        </ul>
                                    </Disclosure.Panel>
                                </Transition>
                            </Disclosure>
                            <Disclosure>
                                <Disclosure.Button className="flex h-[4.5rem] items-center justify-between gap-4 rounded-xl bg-zinc-50 p-4">
                                    <div className="flex gap-4">
                                        <Icon
                                            className="h-6 w-6 shrink-0 text-amber-500"
                                            icon="solar:notes-bold"
                                        />
                                        <span className="text-left font-body text-base text-zinc-900">
                                            Design for digital learning and
                                            creativity
                                        </span>
                                    </div>
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:block ui-not-open:hidden"
                                        icon="solar:round-alt-arrow-up-bold"
                                    />
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:hidden ui-not-open:block"
                                        icon="solar:round-alt-arrow-down-bold"
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel>
                                        <ul className="mb-8 flex flex-wrap gap-2 font-body text-base font-light text-amber-500">
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Creativity and HCI
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                e-Learning and distant learning
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Gamification
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Collaborative and hybrid
                                                learning
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Cognitive and affective
                                                computing in design
                                            </li>
                                        </ul>
                                    </Disclosure.Panel>
                                </Transition>
                            </Disclosure>
                            <Disclosure>
                                <Disclosure.Button className="flex h-[4.5rem] items-center justify-between gap-4 rounded-xl bg-zinc-50 p-4">
                                    <div className="flex gap-4">
                                        <Icon
                                            className="h-6 w-6 shrink-0 text-amber-500"
                                            icon="solar:notes-bold"
                                        />
                                        <span className="text-left font-body text-base text-zinc-900">
                                            Design for HCI applications
                                        </span>
                                    </div>
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:block ui-not-open:hidden"
                                        icon="solar:round-alt-arrow-up-bold"
                                    />
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-zinc-900 ui-open:hidden ui-not-open:block"
                                        icon="solar:round-alt-arrow-down-bold"
                                    />
                                </Disclosure.Button>
                                <Transition
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel>
                                        <ul className="mb-8 flex flex-wrap gap-2 font-body text-base font-light text-amber-500">
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Smart factory
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Consumer products and experience
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Education
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Games and sports
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Entertainment and animation
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Healthcare and medical
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Automobile UI
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                HCI for Creativity
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Creativity in HCI
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Creativity and HCI
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Web 3.0
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Metaverse
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                AR/VR/MR
                                            </li>
                                            <li className="rounded-full bg-zinc-900 px-4 py-2">
                                                Avatar Psychology
                                            </li>
                                        </ul>
                                    </Disclosure.Panel>
                                </Transition>
                            </Disclosure>
                        </div>
                    </div>
                    <div className="flex min-h-[4.5rem] items-start gap-3 rounded-3xl bg-gradient-to-r from-amber-500  to-[#FF0048] p-4 text-transparent lg:items-center">
                        <Icon
                            className="h-6  w-6 shrink-0 text-white"
                            icon="solar:shield-warning-bold"
                        />
                        <p className="font-body text-base text-white">
                            All papers should be submitted electronically
                            through to India HCI through TBA.
                        </p>
                    </div>
                    <div className="mb-16 mt-28 flex flex-col gap-6">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            Everything you need to know about the paper
                        </h1>
                        <div className="columns-1 font-body text-base text-zinc-900 lg:columns-2">
                            <p className="mb-10">
                                To be considered Full Papers, contributions
                                should be more than six pages long (single
                                column template). There is no hard page limit,
                                but long papers without a proportional
                                contribution are more likely to be rejected.
                                Previous papers (if converted to the new ACM
                                single-column format) would have run 14-18 pages
                                in length.
                            </p>
                            <p className="mb-10">
                                Videos accompanying submissions can be submitted
                                through the India HCI Microsoft CMT Electronic
                                Submission Site as supplementary material (max
                                100 MB in size). Although papers must stand on
                                their own, submitted videos will be available to
                                reviewers as supporting material. Authors should
                                note that no specific guidelines are given for
                                developing a video. Videos are viewed only as
                                supporting material, and authors of accepted
                                papers will have the opportunity to prepare a
                                more polished final video presentation for
                                inclusion in the proceedings and as supplemental
                                material in the ACM Digital Library. Authors
                                should note that videos too need to maintain
                                anonymity for the review process. Authors are
                                free to update the video once their submission
                                is accepted, if they wish to disclose themselves
                                in the videos.
                            </p>
                            <p className="mt-10">
                                When submitting your video for review, please
                                encode your video in a format that works across
                                as many platforms as possible without the
                                installation of additional codecs. Please note
                                that the total aggregate size for a submission
                                must not exceed 100 MBs (including all documents
                                and additional material).
                            </p>
                        </div>
                    </div>
                    <div className="mb-6 flex min-h-[4.5rem] items-center gap-3 rounded-full bg-zinc-900 px-8 shadow-xl transition duration-300 hover:scale-[1.02] hover:bg-zinc-800">
                        <p className="font-body text-sm font-semibold uppercase text-amber-500">
                            Authors&apos;s Guide Coming Soon
                        </p>
                    </div>
                    <div className="mb-28 mt-8 flex flex-col gap-6">
                        <div className="columns-1 font-body text-base text-zinc-900 lg:columns-2">
                            <p className="mb-10">
                                To be considered Full Papers, contributions
                                should be more than six pages long (single
                                column template). There is no hard page limit,
                                but long papers without a proportional
                                contribution are more likely to be rejected.
                                Previous papers (if converted to the new ACM
                                single-column format) would have run 14-18 pages
                                in length.
                            </p>
                            <p className="mb-10">
                                Videos accompanying submissions can be submitted
                                through the India HCI Microsoft CMT Electronic
                                Submission Site as supplementary material (max
                                100 MB in size). Although papers must stand on
                                their own, submitted videos will be available to
                                reviewers as supporting material. Authors should
                                note that no specific guidelines are given for
                                developing a video. Videos are viewed only as
                                supporting material, and authors of accepted
                                papers will have the opportunity to prepare a
                                more polished final video presentation for
                                inclusion in the proceedings and as supplemental
                                material in the ACM Digital Library. Authors
                                should note that videos too need to maintain
                                anonymity for the review process. Authors are
                                free to update the video once their submission
                                is accepted, if they wish to disclose themselves
                                in the videos.
                            </p>
                            <p className="mt-10">
                                When submitting your video for review, please
                                encode your video in a format that works across
                                as many platforms as possible without the
                                installation of additional codecs. Please note
                                that the total aggregate size for a submission
                                must not exceed 100 MBs (including all documents
                                and additional material).
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
