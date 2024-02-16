'use client';

import React from 'react';
import { Helmet } from 'react-helmet';
import { Icon } from '@iconify/react';

import Button from '../../components/Button/Button';
import TrackChairsCard from '../../components/TrackChairsCard/TrackChairsCard';
import NotesCard from '../../components/NotesCard/NotesCard';
import ScheduleDatesCard from '../../components/ScheduleDatesCard/ScheduleDatesCard';

import chairNaveenKumar from '../../public/images/naveen-kumar.jpg';
import chairSachinPatil from '../../public/images/sachin-patil.jpg';

const trackChairs = [
    {
        name: 'Naveen Kumar',
        affiliation: 'UPES Dehradun',
        image: chairNaveenKumar,
    },
    {
        name: 'Sachin Patil',
        affiliation: 'Microsoft India',
        image: chairSachinPatil,
    },
];

const scheduleDates = [
    {
        date: new Date('June 20, 2023 23:59:59 GMT+0530'),
        event: 'Proposal submission deadline',
    },
    {
        date: new Date('July 20, 2023 23:59:59 GMT+0530'),
        event: 'Acceptance notification',
    },
    {
        date: new Date('August 10, 2023 23:59:59 GMT+0530'),
        event: 'Camera-ready deadline',
    },
];

export default function Home() {
    return (
        <div className="flex flex-col overflow-clip rounded-bl-3xl rounded-br-3xl bg-white">
            <Helmet>
                <title>India HCI 2023 - Workshops & Courses</title>
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
                                    Workshops
                                </h1>
                            </div>
                            <p className="font-body text-base text-zinc-500">
                                Workshops are intended for sharing skills and
                                knowledge with attendees to meet in the context
                                of a focused and interactive discussion.
                                Workshops are interactive sessions where
                                participants collaborate and work on a common
                                topic. Workshops enable both organizer(s) and
                                participants to contribute. Each workshop should
                                generate ideas that will give the HCI community
                                a new, organized way of thinking about the topic
                                or suggest promising directions for future work.
                            </p>
                        </div>
                        <div className="flex h-full flex-col gap-6 rounded-3xl bg-zinc-100 p-6 @container lg:hidden">
                            <div className="flex flex-col gap-2">
                                <span className="font-body text-[0.65rem] font-medium uppercase text-zinc-400 sm:text-xs">
                                    Call For Participation
                                </span>
                                <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                                    Courses
                                </h1>
                            </div>
                            <p className="font-body text-base text-zinc-500">
                                Courses are sessions, which provide opportunity
                                to extend your knowledge and experience in the
                                field of design. We welcome proposals on topic
                                fall under HCI and allied fields.
                            </p>
                        </div>
                        <TrackChairsCard trackChairs={trackChairs} />
                    </div>
                    <div className="col-span-4 flex flex-col gap-4">
                        <NotesCard
                            className="h-full"
                            notes={[
                                'All acceptances will be conditional pending changes that the committee may suggest or require for the final camera-ready draft of the proposal.',
                                'The primary author of each accepted workshop or course will receive detailed instructions on how to submit a final publication-ready version and the associated materials that are to be brought to the conference venue. This means that the work will not be formally accepted to India HCI until authors submit a final draft for approval by the program committee.',
                                'We accept only electronic submissions through India HCI electronic submission system supported by Microsoft CMT (Use the Submit Work button). All deadlines close at 23:59 IST. At least one author must register for the conference.',
                            ]}
                        />
                    </div>
                    <div className="col-span-4 flex flex-col gap-4">
                        <ScheduleDatesCard scheduleDates={scheduleDates} />
                        <div className="hidden h-full flex-col gap-6 rounded-3xl bg-zinc-100 p-6 @container lg:flex">
                            <div className="flex flex-col gap-2">
                                <span className="font-body text-[0.65rem] font-medium uppercase text-zinc-400 sm:text-xs">
                                    Call For Participation
                                </span>
                                <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                                    Courses
                                </h1>
                            </div>
                            <p className="font-body text-base text-zinc-500">
                                Courses are sessions, which provide opportunity
                                to extend your knowledge and experience in the
                                field of design. We welcome proposals on topic
                                fall under HCI and allied fields.
                            </p>
                        </div>
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
                    <h1>Everything about workshops</h1>
                    <p>
                        The proposal must be submitted as one PDF document named
                        &quot;Instructor name_Title_Workshop_IndiaHCI23&quot; on
                        the Microsoft CMT portal with the Submit Work button
                        above.
                    </p>
                    <p> The proposal must contain the following.</p>
                    <ol>
                        <li>
                            Workshop instructor(s): A short bio and title of the
                            workshop is required.
                        </li>
                        <li>
                            Workshop Abstract: This should be documented in two
                            pages in the{' '}
                            <a
                                href="https://www.overleaf.com/latex/templates/legacy-sigchi-extended-abstract-template/zzzfqvkmrfzn.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SIGCHI Extended Abstract Template
                            </a>
                            . This will be used for reviewing purpose. This
                            should cover the overall concept of the workshop
                            including key organizers, workshop title,
                            objectives, topic brief, target audience,
                            participant limit (if any), materials (mention the
                            materials required for attendee and instructors
                            separately) and expected outcomes.
                        </li>
                        <li>
                            Workshop Plan: The purpose of this document is to
                            understand how the organizers plan to conduct the
                            workshop. This will be used only for the reviewing
                            process. It should cover details on the workshop
                            structure, plan, and duration.
                        </li>
                    </ol>
                    <p>
                        All submissions will go through a review process. The
                        submissions will be judged on the clarity of the
                        proposal and relevance of the topic with the conference
                        theme. Workshop proposals will not be archived in
                        conference proceedings. The workshop chairs will retain
                        all rights to the workshop materials and proposal. India
                        HCI will reserve the right to use the proposal for
                        promotional and record keeping purposes.
                    </p>
                    <div className="not-prose mb-20 mt-4 flex min-h-[4.5rem] flex-col items-start gap-3 rounded-3xl bg-gradient-to-r from-amber-500 to-[#FF0048] p-4 text-transparent sm:mb-28 sm:flex-row sm:items-center">
                        <Icon
                            className="h-6 w-6 shrink-0 text-white"
                            icon="solar:hourglass-line-bold"
                        />
                        <p className="font-body text-base text-white">
                            Instructor can take either a half day or a full day
                            workshop
                        </p>
                    </div>
                    <h1>Everything about courses</h1>
                    <p>
                        The proposal must be submitted as one PDF document named
                        &quot;Instructor name_Title_Workshop_IndiaHCI23&quot; on
                        the Microsoft CMT portal with the Submit Work button
                        above.
                    </p>
                    <ol>
                        <li>
                            Course Abstract: It should be documented in 3 pages
                            in the{' '}
                            <a
                                href="https://www.overleaf.com/latex/templates/legacy-sigchi-extended-abstract-template/zzzfqvkmrfzn.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                SIGCHI Extended Abstract Template
                            </a>
                            . This will be used for reviewing purpose only. It
                            must include title of the course, course abstract,
                            learning objectives of the course, content of the
                            course,
                        </li>
                        <li>
                            Course Plan: Two page document providing additional
                            information including justification for the course,
                            expected background of the attendees, content and
                            schedule, expected audience size.
                        </li>
                    </ol>
                    <p>The review process for courses is not anonymous.</p>
                    <div className="not-prose mb-20 mt-4 flex min-h-[4.5rem] flex-col items-start gap-3 rounded-3xl bg-gradient-to-r from-amber-500 to-[#FF0048] p-4 text-transparent sm:mb-28 sm:flex-row sm:items-center">
                        <Icon
                            className="h-6 w-6 shrink-0 text-white"
                            icon="solar:hourglass-line-bold"
                        />
                        <p className="font-body text-base text-white">
                            Instructor can take courses from 1 hours to 3 hours
                            depending on the course content
                        </p>
                    </div>
                    <h1>
                        What is the difference between a workshop and a course?
                    </h1>
                    <p>
                        If you are looking forward to conduct a session, where
                        you expect participants to collaborate and work on a
                        common topic, and then please propose it as a workshop.
                        On the other hand, if it is going to be like a class
                        where the participants will focus on learning than
                        contributing back, then please propose it as a course.
                    </p>
                </div>
            </main>
        </div>
    );
}
