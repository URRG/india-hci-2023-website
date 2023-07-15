'use client';

import React from 'react';
import { Helmet } from 'react-helmet';
import { Icon } from '@iconify/react';
import { Disclosure, Transition } from '@headlessui/react';

import Button from '../../components/Button/Button';
import TrackChairsCard from '../../components/TrackChairsCard/TrackChairsCard';
import NotesCard from '../../components/NotesCard/NotesCard';
import ScheduleDatesCard from '../../components/ScheduleDatesCard/ScheduleDatesCard';
import EnablingCreativityMarqueeCard from '../../components/EnablingCreativityMarqueeCard/EnablingCreativityMarqueeCard';

import chairAnirudhaJoshi from '../../public/images/anirudha-joshi.jpg';
import chairGavinSim from '../../public/images/gavin-sim.jpg';

const trackChairs = [
    {
        name: 'Anirudha Joshi',
        affiliation: 'IIT Bombay',
        image: chairAnirudhaJoshi,
    },
    {
        name: 'Gavin R. Sim',
        affiliation: 'IIT Bombay',
        image: chairGavinSim,
    },
];

const scheduleDates = [
    {
        date: new Date('July 03, 2023 23:59:59 GMT+0530'),
        event: 'Papers due',
    },
    {
        date: new Date('August 03, 2023 23:59:59 GMT+0530'),
        event: 'Authors receive initial reviews',
    },
    {
        date: new Date('August 16, 2023 23:59:59 GMT+0530'),
        event: 'Rebuttals due',
    },
    {
        date: new Date('August 25, 2023 23:59:59 GMT+0530'),
        event: 'Reviews & notifications of approval',
    },
    {
        date: new Date('September 17, 2023 23:59:59 GMT+0530'),
        event: 'Shepherding decisions',
    },
    {
        date: new Date('September 30, 2023 23:59:59 GMT+0530'),
        event: 'Camera-ready submission due',
    },
];

export default function Papers() {
    return (
        <div className="flex flex-col overflow-clip rounded-bl-3xl rounded-br-3xl bg-white">
            <Helmet>
                <title>India HCI 2023 - Papers</title>
            </Helmet>
            <main className="flex flex-col items-center px-4">
                <div className="mt-10 flex min-h-[580px] w-full flex-col gap-4 lg:grid lg:grid-cols-12">
                    <div className="col-span-4 flex flex-col gap-4">
                        <div className="flex h-full flex-col gap-6 rounded-3xl bg-zinc-100 p-6 @container">
                            <div className="flex flex-col gap-2">
                                <span className="font-body text-[0.65rem] font-medium uppercase text-zinc-400 sm:text-xs">
                                    Call For Participation
                                </span>
                                <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                                    Papers
                                </h1>
                            </div>
                            <p className="font-body text-base text-zinc-500">
                                Papers are the main medium for conveying new
                                research results at India HCI. India HCI brings
                                together researchers and practitioners from
                                diverse areas that include traditional graphical
                                & web user interfaces, tangible & ubiquitous
                                computing, virtual & augmented reality,
                                multimedia, new input & output devices, computer
                                games, privacy, security, visualisation, health,
                                accessibility and ageing, design, user
                                modelling, engineering interactive systems, ICT
                                for development, CSCW, and more.
                            </p>
                        </div>
                        <TrackChairsCard trackChairs={trackChairs} />
                    </div>
                    <div className="col-span-4 flex flex-col gap-4">
                        <NotesCard
                            className="h-full"
                            notes={[
                                'All acceptances will be conditional pending changes that the committee may suggest or require for the final camera-ready draft of the paper.',
                                'The primary author of each accepted poster or demo will receive detailed instructions on how to submit a final publication-ready version of the paper and the associated materials that are to be brought to the conference venue. This means that the work will not be formally accepted to India HCI until authors submit a final draft for approval by the program committee.',
                                'We accept only electronic submissions through India HCI electronic submission system supported by Microsoft CMT. (All deadlines close at 23:59 IST). At least one author must register for the conference.',
                            ]}
                        />
                    </div>
                    <div className="col-span-4 flex flex-col gap-4">
                        <ScheduleDatesCard scheduleDates={scheduleDates} />
                        <EnablingCreativityMarqueeCard className="h-full" />
                    </div>
                </div>
                <Button
                    className="container sticky bottom-4 mt-4"
                    label="Submit Work"
                    widthMode="full"
                    linkType="external"
                    linkHref="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FIndiaHCI2023%2FSubmission%2FIndex"
                />
                <div className="prose-md prose prose-zinc mb-12 max-w-7xl prose-headings:mt-20 prose-headings:bg-gradient-to-br prose-headings:from-amber-500 prose-headings:via-orange-500 prose-headings:via-30% prose-headings:to-[#FF0048] prose-headings:bg-clip-text prose-headings:font-heading prose-headings:text-2xl prose-headings:font-normal prose-headings:text-transparent prose-p:font-body prose-li:font-body sm:my-20 sm:prose-headings:text-4xl">
                    <h1>Everything about India HCI 2023</h1>
                    <p>
                        India HCI brings together researchers and practitioners
                        from diverse areas that include traditional graphical &
                        web user interfaces, tangible & ubiquitous computing,
                        virtual & augmented reality, multimedia, new input &
                        output devices, computer games, privacy, security,
                        visualization, health, accessibility and ageing, design,
                        user modelling, engineering interactive systems, ICT for
                        development, CSCW, and more. India HCI provides a
                        special spotlight on papers that are relevant to South
                        Asia, including those related to culture, language,
                        socio-economic situations, and the industry from the
                        region. The intimate size, single track, and comfortable
                        surroundings make this conference an ideal opportunity
                        to exchange research results and implementation
                        experiences.
                    </p>
                    <h1> Topics of Relevance </h1>
                    <p>
                        The organisinging committee invites submissions of
                        research papers in all areas of HCI design. This
                        includes all dimensions, e.g., people, product, tools,
                        processes, and industrial applications, with research
                        results contributing to its understanding and support.
                        Significantly novel enabling technologies such as
                        innovative input devices, displays, new interaction
                        techniques, or new media that extend the boundaries of
                        traditional interaction, such as natural user interfaces
                        and interactions, mixed reality, mobile interaction,
                        computer games, health, accessibility, ageing, user
                        modelling.
                    </p>
                    <div className="not-prose flex flex-col gap-1">
                        <Disclosure>
                            <Disclosure.Button className="flex h-[4.5rem] items-center justify-between gap-4 rounded-xl bg-zinc-50 p-4">
                                <div className="flex gap-4">
                                    <Icon
                                        className="h-6 w-6 shrink-0 text-amber-500"
                                        icon="solar:notes-bold"
                                    />
                                    <span className="text-left font-body text-base text-zinc-900">
                                        Design for user experience and usability
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
                                            UX (User Experience) and UI Design
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
                                            Locomotion in immersive environment
                                        </li>
                                        <li className="rounded-full bg-zinc-900 px-4 py-2">
                                            Orientation in immersive environment
                                        </li>
                                        <li className="rounded-full bg-zinc-900 px-4 py-2">
                                            Navigation in immersive environment
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
                                            Interface for disabled individuals
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
                                            Player personality, characteristics
                                            and demographics
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
                                        Design for Indian knowledge system and
                                        social organisation
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
                                            Design methods of knowledge systems
                                        </li>
                                        <li className="rounded-full bg-zinc-900 px-4 py-2">
                                            Design models of knowledge systems
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
                                            Information design for social cause
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
                                            Collaborative and hybrid learning
                                        </li>
                                        <li className="rounded-full bg-zinc-900 px-4 py-2">
                                            Cognitive and affective computing in
                                            design
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
                    <h1>Everything about the paper</h1>
                    <p>
                        To be considered Full Papers, contributions should be
                        more than six pages long (single column template). There
                        is no hard page limit, but long papers without a
                        proportional contribution are more likely to be
                        rejected. Previous papers (if converted to the new ACM
                        single-column format) would have run 14-18 pages in
                        length.
                    </p>
                    <p>
                        Videos accompanying submissions can be submitted through
                        the India HCI Microsoft CMT Electronic Submission Site
                        as supplementary material (max 100 MB in size). Although
                        papers must stand on their own, submitted videos will be
                        available to reviewers as supporting material. Authors
                        should note that no specific guidelines are given for
                        developing a video. Videos are viewed only as supporting
                        material, and authors of accepted papers will have the
                        opportunity to prepare a more polished final video
                        presentation for inclusion in the proceedings and as
                        supplemental material in the ACM Digital Library.
                        Authors should note that videos too need to maintain
                        anonymity for the review process. Authors are free to
                        update the video once their submission is accepted, if
                        they wish to disclose themselves in the videos.
                    </p>
                    <p>
                        When submitting your video for review, please encode
                        your video in a format that works across as many
                        platforms as possible without the installation of
                        additional codecs. Please note that the total aggregate
                        size for a submission must not exceed 100 MBs (including
                        all documents and additional material).
                    </p>
                    <Button
                        className="my-20 no-underline"
                        widthMode="full"
                        showSwiggle={false}
                        label="Read The Author's Guide"
                        linkType="external"
                        linkHref="https://docs.google.com/document/d/1Dst50_Q1Pqi-6nO_b1FOoyFO5xpnkI-738eYYIfo0js/edit"
                    />
                    <p>
                        To be considered Full Papers, contributions should be
                        more than six pages long (single column template). There
                        is no hard page limit, but long papers without a
                        proportional contribution are more likely to be
                        rejected. Previous papers (if converted to the new ACM
                        single-column format) would have run 14-18 pages in
                        length.
                    </p>
                    <p>
                        Videos accompanying submissions can be submitted through
                        the India HCI Microsoft CMT Electronic Submission Site
                        as supplementary material (max 100 MB in size). Although
                        papers must stand on their own, submitted videos will be
                        available to reviewers as supporting material. Authors
                        should note that no specific guidelines are given for
                        developing a video. Videos are viewed only as supporting
                        material, and authors of accepted papers will have the
                        opportunity to prepare a more polished final video
                        presentation for inclusion in the proceedings and as
                        supplemental material in the ACM Digital Library.
                        Authors should note that videos too need to maintain
                        anonymity for the review process. Authors are free to
                        update the video once their submission is accepted, if
                        they wish to disclose themselves in the videos.
                    </p>
                    <div className="not-prose my-20 flex min-h-[4.5rem] flex-col items-start gap-3 rounded-3xl bg-gradient-to-r from-amber-500 to-[#FF0048] p-4 text-transparent sm:flex-row sm:items-center">
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
                    <p className="mt-10">
                        When submitting your video for review, please encode
                        your video in a format that works across as many
                        platforms as possible without the installation of
                        additional codecs. Please note that the total aggregate
                        size for a submission must not exceed 100 MBs (including
                        all documents and additional material).
                    </p>
                </div>
            </main>
        </div>
    );
}
