import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLeetcode, SiLinkedin } from 'react-icons/si'

export default function Navbar() {

    const socials = [
        {
            link: "https://www.linkedin.com/in/pranave-hp-7b352a228/",
            label: "Linkedin",
            icon: SiLinkedin
        },
        {
            link: "https://github.com/PranavHp77",
            label: "Github",
            icon: SiGithub
        },
        {
            link: "https://github.com/PranavHp77",
            label: "Leetcode",
            icon: SiLeetcode
        }
    ]


    return (
        <nav className='py-10 flex justify-between items-center'>
            <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Pranave Hp 🎮</h1>
            <div className='flex items-center gap-5'>
                {socials.map((social, index) => {
                    const Icon = social.icon
                    return (
                        <Link
                            href={social.link}
                            key={index}
                            aria-label={social.label}
                        >
                            <Icon className='w-5 h-5 hover:scale-x-125 transition-all' />
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
