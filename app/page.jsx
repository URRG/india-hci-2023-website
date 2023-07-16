'use client';

import React, { Fragment, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { twJoin } from 'tailwind-merge';
import Marquee from 'react-fast-marquee';
import { Icon } from '@iconify/react';
import { Switch } from '@headlessui/react';
import Typewriter from 'typewriter-effect';

import Button from '../components/Button/Button';
import ImageCursor from '../components/ImageCursor/ImageCursor';
import Video from '../components/Video/Video';

import humanIntelligence from '../public/images/human-intelligence.svg';
import upes from '../public/images/upes.jpg';
import brain from '../public/images/brain.svg';
import gradient from '../public/videos/gradient.webm';

const tracks = [
    {
        name: 'Papers',
        description: [
            'India HCI 2023 is the 14th edition of the international conference series on Human-Computer Interaction. India HCI brings together researchers and practitioners from diverse areas that include traditional graphical & web user interfaces, tangible & ubiquitous computing, virtual & augmented reality, multimedia, new input & output devices, computer games, privacy, security, visualisation, health, accessibility and ageing, design, user modelling, engineering interactive systems, ICT for development, CSCW, and more.',
            'Papers are the main medium for conveying new research results at India HCI.',
        ],
        linkHref: '/papers',
    },
    {
        name: 'Poster & Demos',
        description: [
            'Posters and Demonstrations at India HCI 2023 will showcase your novel implementations, interaction designs, concepts, techniques, devices, or systems to a wider audience at the conference and provide opportunities to interact with each other. We welcome posters, demonstrations & interactivity prototypes from students and researchers in all stages of their careers.',
        ],
        linkHref: '/posters-and-demos',
    },
    {
        name: 'Workshops & Courses',
        description: [
            'Workshops are intended for sharing skills and knowledge with attendees to meet in the context of a focused and interactive discussion. Workshops are interactive sessions where participants collaborate and work on a common topic.',
            'Courses are sessions, which provide opportunity to extend your knowledge and experience in the field of design. We welcome proposals on topic fall under HCI and allied fields.',
        ],
        linkHref: '/workshops-and-courses',
    },
    {
        name: 'Student Research Consortium',
        description: [
            'The Student Research Consortium is a venue for undergraduate, postgraduate, and doctoral students (early stage) to showcase their research project work in research, engineering, design, psychology, sociology, anthropology, and the digital arts.',
            'This may include classroom projects, semester-long projects, year-long graduation projects, and other research projects.',
        ],
        linkHref: '/',
    },
    {
        name: 'Student Design Consortium',
        description: [
            'The Student Design Consortium is a venue for undergraduate, postgraduate, and doctoral students (early stage) to showcase their design project work in research, engineering, design, psychology, sociology, anthropology, and the digital arts.',
            'This may include classroom projects, semester-long projects, year-long graduation projects, and other design projects.',
        ],
        linkHref: '/',
    },
    {
        name: 'India HCI Mixer 2023',
        description: [
            'We are back with our Industry Presentation Track “India HCI Mixer 2023”.',
            'We have conceptualised the Mixer 2023 to be a high visibility & high-impact forum for Design Thinkers, Customer Experience (CX) / User Experience (UX) practitioners, strategists, product owners, product developers to share, learn and grow through collaboration.',
            'Please note, this is not an archival oriented paper submission or case study track.',
        ],
        linkHref: '/',
    },
    {
        name: 'Art',
        description: [
            'We are thrilled to announce the introduction of the Art Track in this year\'s India HCI Conference, aligned with our theme - "HCI for Enabling Creativity". This innovative and expressive component of our conference encourages the exploration of the intersection between creativity, human-computer interaction (HCI), art, technology, and design.',
            'As we continuously strive to push the boundaries of knowledge and practice, we see immense potential in harnessing the power of art to present complex HCI ideas in a more engaging and thought-provoking manner.',
        ],
        linkHref: '/',
    },
    {
        name: 'Women in HCI',
        description: [
            'Women have made significant contributions to the field of Human-Computer Interaction, shaping and advancing the discipline in numerous ways. From the early pioneers to the current generation of researchers, designers, and practitioners, women have played a crucial role in understanding and improving the interaction between humans and technology.',
        ],
        linkHref: '/',
    },
];

const scheduleDates = [
    {
        date: new Date('November 23, 2023 10:00:00 GMT+0530'),
        event: 'India HCI 2023 Starts',
    },
    {
        date: new Date('November 25, 2023 17:30:00 GMT+0530'),
        event: 'India HCI 2023 Ends',
    },
];

export default function Home() {
    const [imFeelingCreativeSent, setImFeelingCreativeSent] = useState(false);

    const [creativityEnabled, setCreativityEnabled] = useState(false);

    const parentRef = useRef(null);
    const [isBrainImageCursorVisible, setIsBrainImageCursorVisible] =
        useState(true);

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setCurrentDate(new Date()), 1000);

        return () => clearInterval(interval);
    });

    const [timeToEvent, setTimeToEvent] = useState({
        days: { value: '00', label: 'days' },
        hours: { value: '00', label: 'hours' },
        minutes: { value: '00', label: 'minutes' },
        seconds: { value: '00', label: 'seconds' },
    });

    useEffect(() => {
        const startDate = scheduleDates[0].date;
        const endDate = scheduleDates[1].date;

        let timeDifference = 0;
        let type = '';

        if (currentDate < startDate) {
            timeDifference = startDate.getTime() - currentDate.getTime();
            type = 'future';
        } else if (currentDate > startDate && currentDate < endDate) {
            timeDifference = currentDate.getTime() - startDate.getTime();
            type = 'present';
        } else if (currentDate > endDate) {
            timeDifference = currentDate.getTime() - endDate.getTime();
            type = 'past';
        }

        const totalSeconds = Math.floor(timeDifference / 1000);
        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        setTimeToEvent({
            type,
            days: {
                value: days.toString().padStart(2, '0'),
                label: days === 1 ? 'day' : 'days',
            },
            hours: {
                value: hours.toString().padStart(2, '0'),
                label: hours === 1 ? 'hour' : 'hours',
            },
            minutes: {
                value: minutes.toString().padStart(2, '0'),
                label: minutes === 1 ? 'minute' : 'minutes',
            },
            seconds: {
                value: seconds.toString().padStart(2, '0'),
                label: seconds === 1 ? 'second' : 'seconds',
            },
        });
    }, [currentDate]);

    const [activeTrackCarouselItem, setActiveTrackCarouselItem] = useState(0);

    const handleImFeelingCreativeClick = () => {
        if (!imFeelingCreativeSent) {
            setImFeelingCreativeSent(true);
        } else {
            window.open(
                'https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FIndiaHCI2023%2FSubmission%2FIndex',
                '_blank'
            );
        }
    };

    return (
        <div className="flex flex-col overflow-clip rounded-bl-3xl rounded-br-3xl bg-white">
            <main className="flex flex-col items-center px-4">
                <div className="mt-10 flex min-h-[580px] w-full flex-col gap-4 lg:grid lg:grid-cols-12 lg:grid-rows-4">
                    <div className="flex flex-col justify-between gap-24 rounded-3xl bg-zinc-900 p-6 pb-0 @container md:gap-8 lg:col-span-4 lg:col-start-1 lg:row-span-full">
                        <div className="flex flex-col gap-6">
                            <h1 className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl">
                                India HCI 2023
                            </h1>
                            <p className="font-body text-base font-normal text-zinc-300">
                                India HCI is a premier international conference
                                in the field of Human-Computer Interaction (HCI)
                                that is held annually in India. It aims to
                                positively impact and shape humanity through
                                high-quality research in HCI and Design.
                            </p>
                        </div>
                        <div className="flex h-[60cqh] flex-col gap-2 rounded-tl-3xl rounded-tr-3xl border-2 border-b-0 border-zinc-700 lg:h-72">
                            <div className="flex flex-row justify-center gap-2 p-4">
                                <div className="h-4 w-12 rounded-full bg-zinc-700" />
                                <div className="h-4 w-4 rounded-full bg-zinc-700" />
                            </div>
                            <div className="flex h-full flex-col justify-between p-2 pt-0 sm:p-6 sm:pt-0">
                                <div className="flex flex-col gap-2">
                                    <p className="flex w-max rounded-3xl rounded-tl-md bg-blue-500 p-4 font-body text-base text-white">
                                        Want to show your work?
                                    </p>
                                    <p
                                        className={`${
                                            imFeelingCreativeSent
                                                ? 'opacity-100'
                                                : 'translate-y-4 opacity-0'
                                        } flex w-max self-end rounded-3xl rounded-tr-md bg-zinc-700 p-4 font-body text-base text-white transition duration-300`}
                                    >
                                        Yes! I&apos;m feeling creative!
                                    </p>
                                </div>
                                <div
                                    className={`${
                                        imFeelingCreativeSent
                                            ? 'h-14 justify-end bg-none p-0 pl-0'
                                            : 'h-16 justify-between bg-white p-2 pl-4'
                                    } flex flex-row items-center rounded-full`}
                                >
                                    {!imFeelingCreativeSent && (
                                        <span className="font-body text-sm text-zinc-500 sm:text-base">
                                            <Typewriter
                                                onInit={(typewriter) => {
                                                    typewriter
                                                        .typeString(
                                                            "Yes! I'm feeling creative!"
                                                        )
                                                        .start();
                                                }}
                                            />
                                        </span>
                                    )}
                                    <button
                                        className={`${
                                            imFeelingCreativeSent
                                                ? 'h-full w-full hover:scale-[1.03]'
                                                : 'h-12 w-12 hover:scale-[1.1]'
                                        }
                                        flex items-center justify-center rounded-full bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] shadow-2xl transition-all duration-300`}
                                        type="button"
                                        onClick={handleImFeelingCreativeClick}
                                    >
                                        {!imFeelingCreativeSent && (
                                            <Icon
                                                className="h-6 w-6 text-white"
                                                icon="solar:plain-2-bold"
                                            />
                                        )}
                                        <span
                                            className={`${
                                                imFeelingCreativeSent
                                                    ? 'opacity-100'
                                                    : 'absolute -left-full -top-full opacity-0'
                                            } font-body text-base text-white transition-all delay-150 duration-300`}
                                        >
                                            Submit your work
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-between gap-6 overflow-clip rounded-3xl bg-zinc-100 p-6 lg:col-span-4 lg:col-start-5 lg:row-span-2 lg:row-start-1">
                        <p
                            className={`${
                                creativityEnabled
                                    ? 'text-white'
                                    : 'text-zinc-300'
                            } relative z-10 font-body text-base`}
                        >
                            The theme of the the conference is HCI for Enabling
                            Creativity. Immerse yourself in a world of boundless
                            possibilities as we explore the intersection of
                            human-computer interaction and unleashing
                            creativity. We invite authors to present bold ideas
                            and research that further expand the boundaries of
                            HCI research.
                        </p>
                        <Switch
                            checked={creativityEnabled}
                            onChange={setCreativityEnabled}
                            as={Fragment}
                        >
                            {({ checked }) => (
                                <button
                                    className="relative z-10 flex h-16 w-full items-center rounded-full bg-zinc-900 p-2 shadow-2xl transition duration-300 @container hover:scale-[1.02] hover:bg-zinc-800"
                                    type="button"
                                >
                                    <span
                                        className={`${
                                            creativityEnabled
                                                ? 'left-6 text-zinc-600'
                                                : 'right-6 text-white'
                                        } absolute font-body text-sm font-medium uppercase`}
                                    >
                                        {creativityEnabled
                                            ? 'Creativity Enabled'
                                            : 'Enable Creativity'}
                                    </span>
                                    <div
                                        className={`${
                                            checked
                                                ? 'translate-x-[calc(100cqw-100%)] bg-white'
                                                : 'translate-x-0 bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048]'
                                        } flex h-full w-24 transform items-center justify-center rounded-full transition duration-200 ease-in-out`}
                                    >
                                        <Icon
                                            className={`${
                                                checked
                                                    ? 'text-[#FF0048]'
                                                    : 'text-white'
                                            } h-4 w-4`}
                                            icon="heroicons:sparkles-20-solid"
                                        />
                                    </div>
                                </button>
                            )}
                        </Switch>
                        <Video
                            className={twJoin(
                                'pointer-events-none absolute left-0 top-0 h-full w-full object-cover transition duration-300',
                                creativityEnabled ? 'opacity-100' : 'opacity-0'
                            )}
                            src={gradient}
                            autoPlay
                        />
                    </div>
                    <a
                        className="group relative col-span-2 col-start-5 row-span-2 row-start-3 flex flex-col justify-between gap-6 overflow-clip rounded-3xl bg-cover bg-top bg-no-repeat p-6 transition duration-300 hover:scale-[1.02]"
                        style={{ backgroundImage: `url(${upes.src})` }}
                        href="https://goo.gl/maps/2PSCKqNF95YrLyaeA"
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex="0"
                    >
                        <div className="absolute inset-0 bg-black opacity-50 transition duration-300 group-hover:opacity-0" />
                        <Icon
                            className="z-10 h-6 w-6 text-white"
                            icon="solar:map-point-favourite-bold"
                        />
                        <span className="z-10 font-body text-base font-light text-white group-hover:invisible lg:text-2xl">
                            School of Design, UPES, Dehradun
                        </span>
                    </a>
                    <div className="align-center relative flex overflow-clip rounded-3xl bg-zinc-50 lg:col-span-2 lg:col-start-7 lg:row-span-2 lg:row-start-3">
                        <Video
                            className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
                            src={gradient}
                            autoPlay
                        />
                        <Marquee className="pb-8 pt-6 font-heading text-6xl text-zinc-900/70 mix-blend-overlay">
                            Enabling Creativity&nbsp;Enabling
                            Creativity&nbsp;Enabling Creativity&nbsp;
                        </Marquee>
                    </div>
                    <div className="flex flex-col justify-between gap-20 rounded-3xl bg-zinc-900 p-6 lg:col-span-2 lg:col-start-9 lg:row-span-3 lg:row-start-1">
                        <div className="flex flex-col gap-2 ">
                            <div
                                className={`${
                                    timeToEvent.days.value === '00'
                                        ? 'hidden'
                                        : ''
                                } flex flex-col gap-0`}
                            >
                                <p className="font-heading text-3xl font-semibold text-white">
                                    {timeToEvent.days.value}
                                </p>
                                <p className="text-md font-heading uppercase text-white">
                                    {timeToEvent.days.label}
                                </p>
                            </div>
                            <div
                                className={`${
                                    timeToEvent.days.value === '00' &&
                                    timeToEvent.hours.value === '00'
                                        ? 'hidden'
                                        : timeToEvent.days.value === '00'
                                        ? 'text-white'
                                        : 'text-zinc-500'
                                } flex flex-col gap-0`}
                            >
                                <p className="font-heading text-3xl font-semibold uppercase">
                                    {timeToEvent.hours.value}
                                </p>
                                <p className="text-md font-heading uppercase">
                                    {timeToEvent.hours.label}
                                </p>
                            </div>
                            <div
                                className={`${
                                    timeToEvent.days.value === '00' &&
                                    timeToEvent.hours.value === '00' &&
                                    timeToEvent.minutes.value === '00'
                                        ? 'hidden'
                                        : timeToEvent.days.value === '00' &&
                                          timeToEvent.hours.value === '00'
                                        ? 'text-white'
                                        : 'text-zinc-500'
                                } flex flex-col gap-0`}
                            >
                                <p className="font-heading text-3xl font-semibold uppercase">
                                    {timeToEvent.minutes.value}
                                </p>
                                <p className="text-md font-heading uppercase">
                                    {timeToEvent.minutes.label}
                                </p>
                            </div>
                            <div
                                className={`${
                                    timeToEvent.days.value === '00' &&
                                    timeToEvent.hours.value === '00' &&
                                    timeToEvent.minutes.value === '00'
                                        ? 'text-white'
                                        : 'text-zinc-500'
                                } flex flex-col gap-0`}
                            >
                                <p className="font-heading text-3xl font-semibold uppercase">
                                    {timeToEvent.seconds.value}
                                </p>
                                <p className="text-md font-heading uppercase">
                                    {timeToEvent.seconds.label}
                                </p>
                            </div>
                        </div>

                        <p className="bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-body text-sm uppercase text-transparent">
                            {timeToEvent.type === 'future'
                                ? 'To India HCI 2023'
                                : timeToEvent.type === 'present'
                                ? 'Into India HCI 2023'
                                : timeToEvent.type === 'past'
                                ? 'Since India HCI 2023'
                                : 'Time is a construct'}
                        </p>
                    </div>
                    <div className="flex flex-col justify-between gap-6 rounded-3xl bg-zinc-900 p-6 lg:col-span-2 lg:col-start-9 lg:row-span-1 lg:row-start-4">
                        <Icon
                            className="h-6 w-6 text-amber-500"
                            icon="solar:calendar-add-bold"
                        />
                        <span className="font-body text-base font-light text-white lg:text-base">
                            23-24 November 2023
                        </span>
                    </div>
                    <div
                        className="relative flex min-h-[32rem] flex-col justify-end gap-7 overflow-hidden rounded-3xl bg-zinc-100 p-6 lg:col-span-2 lg:col-start-11 lg:row-span-full"
                        ref={parentRef}
                    >
                        {isBrainImageCursorVisible && (
                            <ImageCursor
                                parentRef={parentRef}
                                imageSrc={brain.src}
                                imageSize={140}
                                imagePosition={{ top: '4rem', left: '-2rem' }}
                                shouldSnapBack
                            />
                        )}
                        <Icon
                            className="h-6 w-6 text-amber-500"
                            icon="solar:letter-bold"
                        />
                        <p className="font-body text-2xl text-zinc-900">
                            For questions & inquiries, write to us
                        </p>
                        <a
                            className="z-10 flex justify-center rounded-full bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] p-4 font-body text-base text-white shadow-2xl transition duration-300 hover:scale-[1.03]"
                            href="mailto:info@indiahci.org"
                            onMouseEnter={() => {
                                setIsBrainImageCursorVisible(false);
                            }}
                            onMouseLeave={() => {
                                setIsBrainImageCursorVisible(true);
                            }}
                            tabIndex="0"
                        >
                            info@indiahci.org
                        </a>
                    </div>
                </div>
                <Button
                    className="container sticky bottom-4 mt-4"
                    label="Register"
                    widthMode="full"
                    linkType="external"
                    linkHref="https://account.indiahci.org"
                />
                <div className="container">
                    <Image
                        className="mx-auto mb-40 mt-40 animate-[spin_30s_linear_infinite]"
                        src={humanIntelligence}
                        alt="Human intelligence and some sparks of AGI only"
                        width={140}
                        height={140}
                    />
                    <div className="flex flex-col gap-4 2xl:h-[33rem] 2xl:flex-row">
                        {tracks.map((track, index) => (
                            <div
                                className={twJoin(
                                    'relative flex flex-col justify-between gap-6 rounded-3xl bg-zinc-100 transition-all duration-300 2xl:w-min',
                                    activeTrackCarouselItem === index
                                        ? 'cursor-default bg-zinc-900 p-6 2xl:grow'
                                        : 'p-6 2xl:pl-12 2xl:pr-14'
                                )}
                                onMouseEnter={() =>
                                    setActiveTrackCarouselItem(index)
                                }
                                onClick={(event) => {
                                    if (event.type === 'touchend') {
                                        setActiveTrackCarouselItem(index);
                                    }
                                }}
                                onFocus={() =>
                                    setActiveTrackCarouselItem(index)
                                }
                                onKeyDown={() =>
                                    setActiveTrackCarouselItem(index)
                                }
                                tabIndex="0"
                                role="button"
                            >
                                <div
                                    className={twJoin(
                                        'flex flex-col',
                                        activeTrackCarouselItem === index
                                            ? 'gap-6'
                                            : 'overflow-clip 2xl:items-center'
                                    )}
                                >
                                    <h1
                                        className={twJoin(
                                            'whitespace-nowrap bg-gradient-to-br from-amber-500 via-orange-500 via-30% to-[#FF0048] bg-clip-text font-heading text-2xl text-transparent sm:text-4xl',
                                            activeTrackCarouselItem === index
                                                ? 'rotate-0'
                                                : '2xl:absolute 2xl:bottom-8 2xl:rotate-180 2xl:vertical-writing-lr'
                                        )}
                                    >
                                        {track.name}
                                    </h1>
                                    {track.description.map((paragraph) => (
                                        <p
                                            className={twJoin(
                                                'font-body text-base font-normal text-zinc-300 transition-all duration-0',
                                                activeTrackCarouselItem ===
                                                    index
                                                    ? 'opacity-100 2xl:delay-300'
                                                    : 'h-0 w-0 opacity-0'
                                            )}
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                                <Button
                                    className={twJoin(
                                        '2xl:absolute 2xl:bottom-6',
                                        activeTrackCarouselItem === index
                                            ? track.linkHref !== '/'
                                                ? 'flex'
                                                : 'pointer-events-none flex'
                                            : 'hidden'
                                    )}
                                    label={
                                        track.linkHref !== '/'
                                            ? 'Read More'
                                            : 'Coming Soon'
                                    }
                                    widthMode="auto"
                                    action="link"
                                    linkType="internal"
                                    linkHref={track.linkHref}
                                />
                            </div>
                        ))}
                    </div>
                    <Link
                        className="relative mt-48 flex h-40 items-center overflow-clip whitespace-nowrap rounded-3xl bg-zinc-900 p-6 font-heading text-2xl text-white shadow-xl transition duration-300 hover:scale-[1.01] hover:bg-zinc-800 sm:p-8 sm:text-4xl"
                        href="/organising-committee"
                    >
                        Meet the Organising Committee
                        <Image
                            className="absolute -right-20 -top-20 sm:-bottom-4 sm:-right-4 sm:top-auto"
                            src={brain}
                            alt="Brain"
                            width="140"
                            height="140"
                        />
                    </Link>
                </div>
            </main>
            <div className="-ml-[10%] mt-60 h-80 w-[120%] self-center bg-gradient-to-r from-amber-500 via-orange-500 via-30% to-[#ff2d68] blur-[100px] 2xl:mt-80" />
            <Marquee className="pointer-events-none -mt-72 mb-12 h-16 overflow-clip font-heading text-6xl text-zinc-900/30 mix-blend-overlay lg:h-28 lg:text-[100px]">
                Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;Enabling&nbsp;Creativity&nbsp;
            </Marquee>
        </div>
    );
}
