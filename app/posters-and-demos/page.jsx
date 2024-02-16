'use client';

import React from 'react';
import { Helmet } from 'react-helmet';
import { Icon } from '@iconify/react';

import Button from '../../components/Button/Button';
import TrackChairsCard from '../../components/TrackChairsCard/TrackChairsCard';
import NotesCard from '../../components/NotesCard/NotesCard';
import ScheduleDatesCard from '../../components/ScheduleDatesCard/ScheduleDatesCard';
import EnablingCreativityMarqueeCard from '../../components/EnablingCreativityMarqueeCard/EnablingCreativityMarqueeCard';

import chairNilakshiYein from '../../public/images/nilakshi-yein.jpg';
import chairSeemaKrishnakumar from '../../public/images/seema-krishnakumar.jpg';

const trackChairs = [
    {
        name: 'Nilakshi Yein',
        affiliation: 'UPES Dehradun',
        image: chairNilakshiYein,
    },
    {
        name: 'Seema Krishnakumar',
        affiliation: 'IIT Hyderabad',
        image: chairSeemaKrishnakumar,
    },
];

const scheduleDates = [
    {
        date: new Date('August 20, 2023 23:59:59 GMT+0530'),
        title: 'Submission deadline',
    },
    {
        date: new Date('September 24, 2023 23:59:59 GMT+0530'),
        title: 'Acceptance Notification',
    },
    {
        date: new Date('October 01, 2023 23:59:59 GMT+0530'),
        title: 'Camera-ready versions due',
    },
];

export default function Home() {
    return (
        <div className="flex flex-col overflow-clip rounded-bl-3xl rounded-br-3xl bg-white">
            <Helmet>
                <title>India HCI 2023 - Posters & Demos</title>
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
                                    Posters & Demos
                                </h1>
                            </div>
                            <p className="font-body text-base text-zinc-500">
                                Posters and Demos at India HCI 2023 will
                                showcase your novel implementations, interaction
                                designs, concepts, techniques, devices, or
                                systems to a wider audience at the conference
                                and provide opportunities to interact with each
                                other. We welcome posters, demonstrations &
                                interactivity prototypes from students and
                                researchers in all stages of their careers.
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
                    <h1>Everything You Need To Know</h1>
                    <p>
                        Posters and Demonstrations at India HCI 2023 will
                        showcase your novel implementations, interaction
                        designs, concepts, techniques, devices, or systems to a
                        wider audience at the conference and provide
                        opportunities to interact with each other. We welcome
                        posters, demonstrations & interactivity prototypes from
                        students and researchers in all stages of their careers.
                    </p>
                    <p>
                        Poster submissions are encouraged that explore recent
                        research works, strongly relevant results of work in
                        progress, or successful systems and applications, in all
                        areas related to HCI. Researchers must clearly describe
                        the relevance of the research work to the HCI community,
                        its rationale, and its potential in the submission.
                        Demos are expected to be brief and robust enough to be
                        shown repeatedly for effective interaction.
                    </p>
                    <div className="not-prose mb-20 mt-4 flex min-h-[4.5rem] flex-col items-start gap-3 rounded-3xl bg-gradient-to-r from-amber-500 to-[#FF0048] p-4 text-transparent sm:mb-28 sm:flex-row sm:items-center">
                        <Icon
                            className="h-6 w-6 shrink-0 text-white"
                            icon="solar:chat-round-check-bold"
                        />
                        <p className="font-body text-base text-white">
                            Plagiarism must naturally be avoided.
                        </p>
                    </div>
                    <div>
                        <h1>Submission Format</h1>
                        <p>
                            We will adopt the templates from ACM Microsoft Word
                            Template, LaTeX Template, or Overleaf. We recommend
                            a 1-3 page single column without references.
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
                    <h1>For Posters</h1>
                    <ol>
                        <li>
                            The poster submission should include a PDF/PNG
                            document.
                        </li>
                        <li>
                            Full-size poster design in PDF to be displayed on
                            the web.
                        </li>
                        <li>
                            Recommended physical size is less than 30 X 40
                            inches (76 X 101 cm)
                        </li>
                        <li>Either portrait or landscape</li>
                    </ol>
                    <div>
                        <h1>For Demos</h1>
                        <ol>
                            <li>
                                The demo submission should include a PDF
                                document describing the envisioned setup and
                                interaction (demo hardware components, tables,
                                chairs, lights, and other equipment) so that
                                organizers get a good understanding of your
                                setup. This will also allow the organizers to
                                better consider your requirements when
                                organizing the demonstration space at the venue.
                            </li>
                            <li>
                                A (unlisted option) link of YouTube video less
                                than 5 minutes ( should be submitted, which will
                                show the working demo in appropriate detail). It
                                will be published on the conference website.
                            </li>
                            <li>
                                We recommend a resolution of 1080p (1920 x 1080)
                                or 4k (3840 x 2160 px), encoded as MP4 using the
                                H.264 codec.
                            </li>
                            <li>Either portrait or landscape</li>
                        </ol>
                    </div>
                    <h1>Submission for Authors of Accepted Papers</h1>
                    <p>
                        Accepted papers that include interactive experiences are
                        granted a place in the demo session by default. We
                        highly encourage all authors of demo-able papers to make
                        use of this opportunity to showcase their work and
                        connect with the attendees. For full paper authors, we
                        provide a more light-weight demo submission process: to
                        indicate that the accepted paper will be accompanied by
                        a demo, authors will submit the presentation plan(s),
                        demo video, and the submission number of the paper.
                    </p>
                    <h1>Selection Process</h1>
                    <p>
                        Poster/Demo submissions are not anonymous. Author names
                        and institutions will be visible to the reviewing
                        committee throughout the submission process.
                    </p>
                    <ol>
                        <li>
                            Posters/Demos are juried by the India HCI demo
                            chairs, and there is no rebuttal phase.
                        </li>
                        <li>
                            In case the extended abstract is accepted for
                            publication, authors will be communicated through
                            email.
                        </li>
                        <li>
                            Due to the nature of the juried process, authors
                            will not receive review feedback and will only be
                            informed about the decision.
                        </li>
                    </ol>
                    <h1>Publication & Presentation Format</h1>
                    <p>
                        Non-archival, ideas presented as an India HCI 2023 demo/
                        poster can be resubmitted as an extended full paper in
                        subsequent years.
                    </p>
                    <ol>
                        <li>
                            At least one author is requested to present their
                            demo/poster during the sessions and to speak with
                            conference attendees.
                        </li>
                        <li>
                            Accepted demos must additionally submit a 30-second
                            teaser video, which will be incorporated into a demo
                            reel available to conference attendees.
                        </li>
                    </ol>
                </div>
            </main>
        </div>
    );
}
