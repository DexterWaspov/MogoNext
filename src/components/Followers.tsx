'use client'

import Link from "next/link";
import Form from 'next/form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faPinterestP,
    faGooglePlusG,
    faYoutube,
    faDribbble,
    faTumblr
} from '@fortawesome/free-brands-svg-icons';
import {useState} from "react";


export default function Followers() {
    const socialIcons: { icon: IconDefinition; href: string }[] = [
        {
            'icon': faFacebookF,
            'href': '#'
        },
        {
            'icon': faTwitter,
            'href': '#'
        },
        {
            'icon': faInstagram,
            'href': '#'
        },
        {
            'icon': faPinterestP,
            'href': '#'
        },
        {
            'icon': faGooglePlusG,
            'href': '#'
        },
        {
            'icon': faYoutube,
            'href': '#'
        },
        {
            'icon': faDribbble,
            'href': '#'
        },
        {
            'icon': faTumblr,
            'href': '#'
        }
    ];

    const [email, setEmail] = useState<string>('Your Email...');
    const [firstClick, setFirstClick] = useState<boolean>(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);
    }

    function handleClick() {
        if (!firstClick) {
            setEmail('');
            setFirstClick(true);
        }
    }

    return (
        <>
            <h2 className="font-montserrat text-[#333] text-lg leading-4 font-semibold border-b-neutral-200 pl-0 pr-[18px] pt-0 pb-[18px] border-[none] border-b border-solid mb-[18px]">15k <span
                className="text-sm font-medium">followers</span></h2>
            <h3 className="text-[15px] italic font-thin inline-block leading-3 pr-3.5 mb-9 max-xs:mb-[15px] max-xs:pl-3">Follow Us:</h3>
            <ul className="footer-social-links inline-block mb-9">
                {socialIcons.map((item: { icon: IconDefinition; href: string }, index: number) => (
                    <li key={index}
                        className="inline-block px-[7px] py-0 text-base transition-[color] duration-500 ease-[ease] text-[#95e1d3] hover:text-[#f38181] max-xl:px-[6px]">
                        <Link href={item.href}>
                            <FontAwesomeIcon icon={item.icon}/>
                        </Link>
                    </li>
                ))}
            </ul>
            <Form action="#" className="pb-[34px] max-md:pb-[50px]">
                <input
                    name="email"
                    className="w-[240px] border h-10 [outline:none] [background:#fff] text-[#ccc] italic px-3.5 py-0 border-solid border-[#e7e7e7] max-xl:w-[190px] max-lg:w-[calc(100%_-_142px)] max-md:text-xs max-md:w-[calc(100%_-_96px)] max-md:top-0"
                    type="text"
                    value={email}
                    onChange={handleChange}
                    onClick={handleClick}
                    autoComplete="off"
                />
                <button type="submit" className="relative -top-px [background:#95e1d3] transition-[background] duration-500 ease-[ease] border-[none] hover:[background:#f38181]">
                    <span className="font-montserrat px-7 py-3.5 uppercase block cursor-pointer leading-3 text-sm font-semibold text-white max-md:text-[11px] max-md:p-3.5">Subscribe</span>
                </button>
            </Form>
        </>
    )
}