'use client';

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
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
                <header className="container mx-auto mt-5 flex items-start justify-between px-5 md:mt-10">
                    <Image
                        src={indiaHciLogo}
                        alt="India HCI 2023 Logo"
                        width={140}
                        height={117}
                    />

                    <nav className="gap-14 md:hidden">
                        <Popover className="">
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
                                        <Icon
                                            className="h-8 w-8 text-zinc-900"
                                            icon="solar:hamburger-menu-outline"
                                        />
                                    </Popover.Button>
                                    <Popover.Overlay className="fixed inset-0 bg-black opacity-30" />
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute left-[20px] top-2 z-30 mt-3 flex h-[calc(100%-132px)] w-[calc(100%-40px)] flex-col overflow-scroll rounded-2xl bg-zinc-900 font-body text-sm font-normal text-white outline-none outline-1 outline-offset-0 outline-zinc-500">
                                            <Popover.Button className="absolute right-4 top-4">
                                                <Icon
                                                    className="h-8 w-8 text-white"
                                                    icon="solar:close-square-bold"
                                                />
                                            </Popover.Button>
                                            <div className="flex flex-col gap-4 border-b border-zinc-800 p-6">
                                                <p className="inline-flex items-center text-sm font-semibold uppercase text-amber-500">
                                                    Conference
                                                </p>
                                                <Link className="py-2" href="/">
                                                    Organizing Committee
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Student Volunteers
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Partners & Sponsors
                                                </Link>
                                            </div>
                                            <div className="flex flex-col gap-4 p-6">
                                                <p className="inline-flex items-center text-sm font-semibold uppercase text-amber-500">
                                                    Attendees
                                                </p>
                                                <Link className="py-2" href="/">
                                                    Conference Program
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Keynote Speakers
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Invited Speakers
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Accepted Presentations
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Featured Courses
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Featured Workshops
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Featured Courses
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Instructions To Attendees
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Registrations
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Session Recording Policy
                                                </Link>
                                            </div>
                                            <div className="flex flex-col gap-4 border-b border-zinc-800 p-6">
                                                <p className="inline-flex items-center text-sm font-semibold uppercase text-amber-500">
                                                    Authors
                                                </p>
                                                <Link className="py-2" href="/">
                                                    Full Paper
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Student Research Consortium
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Student Design Consortium
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Posters & Demos
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Industry & Startups
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Courses
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Workshops
                                                </Link>
                                                <Link className="py-2" href="/">
                                                    Out of India
                                                </Link>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </nav>
                    <nav className="hidden gap-14 md:flex ">
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
                                                Student Volunteers
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Partners & Sponsors
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
                                                Student Volunteers
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
                                                Student Volunteers
                                            </Link>
                                            <Link
                                                className="border-b border-zinc-800 p-4"
                                                href="/"
                                            >
                                                Student Volunteers
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
                    <footer className="container mx-auto flex flex-col items-center justify-between gap-40 p-12 px-5 sm:flex-row sm:gap-0">
                        <a
                            href="https://www.indiahci.org/2023/"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <Image
                                src={indiaHciLogoMonochrome}
                                alt="India HCI 2023 Logo"
                                width={120}
                            />
                        </a>
                        <div className="relative right-4 flex flex-col items-center gap-10 sm:flex-row sm:gap-20">
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
