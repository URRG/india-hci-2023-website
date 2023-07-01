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
                                Posters and Demonstrations
                            </h1>
                        </div>
                        <div className="font-body text-[16] opacity-50">
                            Posters and Demonstrations at India HCI 2023 will
                            showcase your novel implementations, interaction
                            designs, concepts, techniques, devices, or systems
                            to a wider audience at the conference and provide
                            opportunities to interact with each other. We
                            welcome posters, demonstrations & interactivity
                            prototypes from students and researchers in all
                            stages of their careers.
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
                                        20 August
                                    </span>
                                    <span className="font-body text-base text-zinc-500">
                                        Submission deadline
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
                                        24 September
                                    </span>
                                    <span className="font-body text-base text-zinc-500">
                                        Acceptance Notification
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
                                        01 October
                                    </span>
                                    <span className="font-body text-base text-zinc-500">
                                        Camera-ready versions due
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
                            We accept only electronic submissions through
                            IndiaHCI electronic submission system supported by
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
                                    Nilakshi Yein
                                </span>
                                <span className="font-body text-base text-zinc-500">
                                    UPES Dehradun
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-24 w-24 rounded-full bg-zinc-700" />
                                <span className="font-body text-base text-white">
                                    Seema Krishnakumar
                                </span>
                                <span className="font-body text-base text-zinc-500">
                                    IIT Hyderabad
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="my-28 flex flex-col gap-6">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            Everything You Need To Know
                        </h1>
                        <div className="font-body text-base text-zinc-900">
                            <p className="mb-10">
                                Posters and Demonstrations at India HCI 2023
                                will showcase your novel implementations,
                                interaction designs, concepts, techniques,
                                devices, or systems to a wider audience at the
                                conference and provide opportunities to interact
                                with each other. We welcome posters,
                                demonstrations & interactivity prototypes from
                                students and researchers in all stages of their
                                careers.
                            </p>
                            <p className="">
                                Poster submissions are encouraged that explore
                                recent research works, strongly relevant results
                                of work in progress, or successful systems and
                                applications, in all areas related to HCI.
                                Researchers must clearly describe the relevance
                                of the research work to the HCI community, its
                                rationale, and its potential in the submission.
                                Demos are expected to be brief and robust enough
                                to be shown repeatedly for effective
                                interaction.
                            </p>
                        </div>
                    </div>
                    <div className="flex min-h-[4.5rem] items-start gap-3 rounded-3xl bg-gradient-to-r from-amber-500  to-[#FF0048] p-4 text-transparent lg:items-center">
                        <Icon
                            className="h-6 w-6 shrink-0 text-white"
                            icon="solar:chat-round-check-bold"
                        />
                        <p className="font-body text-base text-white">
                            Plagiarism must naturally be avoided. For questions,
                            please email the poster and demo chairs at
                            posterdemo.indiahci2023@gmail.com
                        </p>
                    </div>
                    <div className="mb-16 mt-28 flex flex-col gap-6">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            Submission Format
                        </h1>
                        <div className="font-body text-base text-zinc-900">
                            <p className="">
                                We will adopt the templates from ACM Microsoft
                                Word Template, LaTeX Template, or Overleaf. We
                                recommend a 1-3 page single column without
                                references.
                            </p>
                            {/* <ul className="flex flex-wrap gap-2 font-body text-base font-light text-amber-500">
                                <li className="rounded-full bg-zinc-900 px-4 py-2">
                                    Overleaf Template
                                </li>
                                <li className="rounded-full bg-zinc-900 px-4 py-2">
                                    Guide to accessible submissions
                                </li>
                                <li className="rounded-full bg-zinc-900 px-4 py-2">
                                    Accessible PDF Author Guide
                                </li>
                                <li className="rounded-full bg-zinc-900 px-4 py-2">
                                    Accessible Presentation Guide
                                </li>
                                <li className="rounded-full bg-zinc-900 px-4 py-2">
                                    Accessible Presentation Guide
                                </li>
                                <li className="rounded-full bg-zinc-900 px-4 py-2">
                                    Adding Document Tags
                                </li>
                                <li className="rounded-full bg-zinc-900 px-4 py-2">
                                    PDF Accessibility Checker
                                </li>
                            </ul> */}
                        </div>
                    </div>
                    <div className="mb-16 mt-28 flex flex-col gap-6">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            For Posters
                        </h1>
                        <div className="font-body text-base text-zinc-900">
                            <ol className="list-inside list-decimal md:list-outside">
                                <li>
                                    The poster submission should include a
                                    PDF/PNG document.
                                </li>
                                <li>
                                    Full-size poster design in PDF to be
                                    displayed on the web.
                                </li>
                                <li>
                                    Recommended physical size is less than 30 X
                                    40 inches (76 X 101 cm)
                                </li>
                                <li>Either portrait or landscape</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mb-16 mt-28 flex flex-col gap-6">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            For Demos
                        </h1>
                        <div className="font-body text-base text-zinc-900">
                            <ol className="list-inside list-decimal md:list-outside">
                                <li>
                                    The demo submission should include a PDF
                                    document describing the envisioned setup and
                                    interaction (demo hardware components,
                                    tables, chairs, lights, and other equipment)
                                    so that organizers get a good understanding
                                    of your setup. This will also allow the
                                    organizers to better consider your
                                    requirements when organizing the
                                    demonstration space at the venue.
                                </li>
                                <li>
                                    A (unlisted option) link of YouTube video
                                    less than 5 minutes ( should be submitted,
                                    which will show the working demo in
                                    appropriate detail). It will be published on
                                    the conference website.
                                </li>
                                <li>
                                    We recommend a resolution of 1080p (1920 x
                                    1080) or 4k (3840 x 2160 px), encoded as MP4
                                    using the H.264 codec.
                                </li>
                                <li>Either portrait or landscape</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mb-16 mt-28 flex flex-col gap-6">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            Submission for Authors of Accepted Papers
                        </h1>
                        <div className="font-body text-base text-zinc-900">
                            <p className="">
                                Accepted papers that include interactive
                                experiences are granted a place in the demo
                                session by default. We highly encourage all
                                authors of demo-able papers to make use of this
                                opportunity to showcase their work and connect
                                with the attendees. For full paper authors, we
                                provide a more light-weight demo submission
                                process: to indicate that the accepted paper
                                will be accompanied by a demo, authors will
                                submit the presentation plan(s), demo video, and
                                the submission number of the paper.
                            </p>
                        </div>
                    </div>
                    <div className="mb-16 mt-28 flex flex-col gap-6">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            Selection Process
                        </h1>
                        <div className="font-body text-base text-zinc-900">
                            <p className="mb-10">
                                Poster /Demo submissions are not anonymous.
                                Author names and institutions will be visible to
                                the reviewing committee throughout the
                                submission process.
                            </p>
                            <ol className="list-inside list-decimal md:list-outside">
                                <li>
                                    Posters/Demos are juried by the India HCI
                                    demo chairs, and there is no rebuttal phase.
                                </li>
                                <li>
                                    In case the extended abstract is accepted
                                    for publication, authors will be
                                    communicated through email.
                                </li>
                                <li>
                                    Due to the nature of the juried process,
                                    authors will not receive review feedback and
                                    will only be informed about the decision.
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="mb-16 mt-28 flex flex-col gap-6">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            Publication & Presentation Format
                        </h1>
                        <div className="font-body text-base text-zinc-900">
                            <p className="mb-10">
                                Non-archival, ideas presented as an India HCI
                                2023 demo/ poster can be resubmitted as an
                                extended full paper in subsequent years.
                            </p>
                            <ol className="list-inside list-decimal md:list-outside">
                                <li>
                                    At least one author is requested to present
                                    their demo/ poster during the sessions and
                                    to speak with conference attendees.
                                </li>
                                <li>
                                    Accepted demos must additionally submit a
                                    30-second teaser video, which will be
                                    incorporated into a demo reel available to
                                    conference attendees.
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
