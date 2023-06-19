'use client';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';

// import { Root } from 'postcss';
import { degularDisplay, ttHoves } from '../styles/fonts';

import indiaHciLogo from '../public/logos/india-hci-2023-logo.svg';
import indiaHciLogoMonochrome from '../public/logos/india-hci-2023-monochrome-logo.svg';
import hcipaiLogo from '../public/logos/hcipai-logo.svg';
import flychiLogo from '../public/logos/flychi-logo.svg';

import './globals.css';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${degularDisplay.variable} ${ttHoves.variable} bg-white`}
            >
                <header className="container mx-auto mt-10 flex items-start justify-between px-5">
                    <Image
                        src={indiaHciLogo}
                        alt="India HCI 2023 Logo"
                        width={140}
                        height={117}
                    />
                    <nav className="flex gap-14 ">
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={`${
                                            open
                                                ? 'text-amber-500'
                                                : 'text-zinc-900'
                                        }
                                        inline-flex items-center text-sm font-semibold uppercase outline-none`}
                                    >
                                        <span>Conference</span>
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 flex w-max -translate-x-1/2 transform flex-col overflow-hidden rounded-lg bg-zinc-900 font-body text-sm font-normal text-white">
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Organizing Committee
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Student Volunteers
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Partners & Sponsors
                                            </Link>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={`${
                                            open
                                                ? 'text-amber-500'
                                                : 'text-zinc-900'
                                        }
                                        inline-flex items-center text-sm font-semibold uppercase outline-none`}
                                    >
                                        <span>Attendees</span>
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 flex w-max -translate-x-1/2 transform flex-col overflow-hidden rounded-lg bg-zinc-900 font-body text-sm font-normal text-white">
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Conference Program
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Keynote Speakers
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Invited Speakers
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Accepted Presentations
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Featured Courses
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Featured Workshops
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Featured Courses
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Instructions To Attendees
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Registrations
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Session Recording Policy
                                            </Link>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button
                                        className={`${
                                            open
                                                ? 'text-amber-500'
                                                : 'text-zinc-900'
                                        }
                                        inline-flex items-center text-sm font-semibold uppercase outline-none`}
                                    >
                                        <span>Authors</span>
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute left-1/2 z-10 mt-3 flex w-max -translate-x-1/2 transform flex-col overflow-hidden rounded-lg bg-zinc-900 font-body text-sm font-normal text-white">
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Full Paper
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Student Research Consortium
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Student Design Consortium
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Poster & Demos
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Industry & Startups
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Courses
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Workshops
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Out Of India
                                            </Link>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </nav>
                </header>
                {children}
                <div className="bg-zinc-900">
                    <footer className="container mx-auto mt-10 flex items-start justify-between p-20 px-5">
                        <a
                            href="https://www.indiahci.org/2023/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Image
                                src={indiaHciLogoMonochrome}
                                alt="India HCI 2023 Logo"
                                width={80}
                                height={48}
                            />
                        </a>
                        <div className="flex flex-row items-center gap-20">
                            <a
                                href="https://www.indiahci.org/"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Image
                                    className="-mt-4"
                                    src={hcipaiLogo}
                                    alt="HCIPAI Logo"
                                    width={128}
                                    height={40}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/flychi"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <Image
                                    src={flychiLogo}
                                    alt="FlyCHI (UPES ACM SIGCHI Student Chapter) Logo"
                                    width={140}
                                    height={40}
                                />
                            </a>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}

RootLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
