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
                <div className="mt-10 grid grid-cols-12 gap-4">
                    <div className="col-span-full flex flex-col gap-6 self-start rounded-3xl bg-zinc-100 p-6 md:col-span-4">
                        <div className="flex flex-col gap-2">
                            <div className="font-body text-[0.65rem] font-medium uppercase text-zinc-400 sm:text-xs">
                                Call For Participation
                            </div>
                            <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                                Workshops
                            </h1>
                        </div>
                        <div className="font-body text-[16] opacity-50">
                            Workshops are intended for sharing skills and
                            knowledge with attendees to meet in the context of a
                            focused and interactive discussion. Workshops are
                            interactive sessions where participants collaborate
                            and work on a common topic. Workshops enable both
                            organizer(s) and participants to contribute. Each
                            workshop should generate ideas that will give the
                            HCI community a new, organized way of thinking about
                            the topic or suggest promising directions for future
                            work.
                        </div>
                    </div>
                    <div className="col-span-full flex h-full flex-col gap-6 self-start rounded-3xl bg-zinc-100 p-6 md:col-span-4">
                        <div className="flex flex-col gap-2">
                            <div className="font-body text-[0.65rem] font-medium uppercase text-zinc-400 sm:text-xs">
                                Call For Participation
                            </div>
                            <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                                Courses
                            </h1>
                        </div>
                        <div className="font-body text-[16] opacity-50">
                            Courses are sessions, which provide opportunity to
                            extend your knowledge and experience in the field of
                            design. We welcome proposals on topic fall under HCI
                            and allied fields.
                        </div>
                    </div>
                    <div className="align-center relative col-span-full flex overflow-hidden rounded-3xl bg-zinc-50 lg:col-span-4">
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
                                        20 June
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
                                        20 July
                                    </span>
                                    <span className="font-body text-base text-zinc-500">
                                        Proposal submission deadline
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
                                        10 August
                                    </span>
                                    <span className="font-body text-base text-zinc-500">
                                        Proposal submission deadline
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
                                    Naveen Kumar
                                </span>
                                <span className="font-body text-base text-zinc-500">
                                    UPES Dehradun
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-2">
                                <div className="h-24 w-24 rounded-full bg-zinc-700" />
                                <span className="font-body text-base text-white">
                                    Sachin Patil
                                </span>
                                <span className="font-body text-base text-zinc-500">
                                    Microsoft India
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="my-28 flex flex-col gap-6">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            Everything You Need To Know About Workshops
                        </h1>
                        <div className="font-body text-base text-zinc-900">
                            <p className="mb-10">
                                The proposal must be submitted as one PDF
                                document (file name: Instructor
                                name_Title_Workshop_IndiaHCI23) to Microsoft CMT
                                portal. The proposal must contain:
                            </p>
                            <ol className="mb-10 list-inside list-decimal md:list-outside">
                                <li>
                                    Workshop instructor(s): A short bio is
                                    needed and title of the workshop.
                                </li>
                                <li>
                                    Workshop Abstract: This should be documented
                                    in two pages in the SIGCHI Extended Abstract
                                    Template. This will be used for reviewing
                                    purpose. This should cover the overall
                                    concept of the workshop including key
                                    organizers, workshop title, objectives,
                                    topic brief, target audience, participant
                                    limit (if any), materials (mention the
                                    materials required for attendee and
                                    instructors separately) and expected
                                    outcomes.
                                </li>
                                <li>
                                    Workshop Plan: The purpose of this document
                                    is to understand how the organizers plan to
                                    conduct the workshop. This will be used only
                                    for the reviewing process. It should cover
                                    details on the workshop structure, plan, and
                                    duration.
                                </li>
                            </ol>
                            <p className="">
                                All submissions will go through a review
                                process. The submissions will be judged on the
                                clarity of the proposal and relevance of the
                                topic with the conference theme. Workshop
                                proposals will not be archived in conference
                                proceedings. The workshop chairs will retain all
                                rights to the workshop materials and proposal.
                                India HCI will reserve the right to use the
                                proposal for promotional and record keeping
                                purposes.
                            </p>
                        </div>
                    </div>
                    <div className="my-28 flex flex-col gap-6">
                        <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                            Everything You Need To Know About Courses
                        </h1>
                        <div className="font-body text-base text-zinc-900">
                            <p className="mb-10">
                                The proposal must be submitted as one PDF
                                document (file name: Instructor
                                name_Title_Course_IndiaHCI23) to the Microsoft
                                CMT portals.
                            </p>
                            <ol className="mb-10 list-inside list-decimal md:list-outside">
                                <li>
                                    Course Abstract: It should be documented in
                                    3 pages in the SIGCHI Extended Abstract
                                    Template. This will be used for reviewing
                                    purpose only. It must include title of the
                                    course, course abstract, learning objectives
                                    of the course, content of the course,
                                </li>
                                <li>
                                    Course Plan: Two page document providing
                                    additional information including
                                    justification for the course, expected
                                    background of the attendees, content and
                                    schedule, expected audience size.
                                </li>
                            </ol>
                            <p className="mb-10">
                                The review process for courses is not anonymous.
                            </p>
                            <p className="">
                                If you are looking forward to conduct a session,
                                where you expect participants to collaborate and
                                work on a common topic, and then please propose
                                it as a workshop. On the other hand, if it is
                                going to be like a class where the participants
                                will focus on learning than contributing back,
                                then please propose it as a course.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
