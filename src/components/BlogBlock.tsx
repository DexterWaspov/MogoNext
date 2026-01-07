import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faInstagram, faPinterestP, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEye} from "@fortawesome/free-regular-svg-icons";
import {faCommentDots} from "@fortawesome/free-solid-svg-icons";

export default function BlogBlock() {
    type blogType = {
        img: string;
        url: string,
        title: string,
        views: number;
        comments: number;
        description: string;
        day: number;
        month: string;
        facebook: string,
        twitter: string,
        pinterest: string,
        instagram: string
    }

    const images: blogType[] = [
        {
            img: '/images/text_block_img_1.jpg',
            url: '#',
            title: "Lorem ipsum dolor sit amet",
            views: 542,
            comments: 17,
            description: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            day: 15,
            month: 'Jan',
            facebook: '#',
            twitter: '#',
            pinterest: '#',
            instagram: '#'
        },
        {
            img: '/images/text_block_img_2.jpg',
            url: '#',
            title: "sed do eiusmod tempor",
            views: 992,
            comments: 42,
            description: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            day: 14,
            month: 'Jan',
            facebook: '#',
            twitter: '#',
            pinterest: '#',
            instagram: '#'
        },
        {
            img: '/images/text_block_img_3.jpg',
            url: '#',
            title: "incididunt ut labore et dolore",
            views: 1560,
            comments: 98,
            description: "Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            day: 12,
            month: 'Jan',
            facebook: '#',
            twitter: '#',
            pinterest: '#',
            instagram: '#'
        }
    ];

    const iconClasses:string = "text-[#f38181] text-[25px] [background:#fce38a] [transition:opacity_500ms_ease,color_500ms_ease,background-color_500ms_ease] px-[10px] py-3.5 hover:text-white hover:[background:#f38181] md:max-lg:px-2.5 md:max-lg:py-3 md:max-lg:text-[15px]";

    return (
        <div className="blog-block text-center pt-24 pb-[52px] px-0">
            <div className="w-[1200px] mx-auto my-0 p-0 max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-[275px]">
                <h3 className="font-kaushanscript text-2xl leading-4 block font-medium text-[#333333] pt-0 pb-6 px-6">Our stories</h3>
                <h2 className="font-montserrat text-[#333333] font-semibold inline-block uppercase relative text-3xl leading-6 pt-0 pb-8 px-[18px] mb-[42px] after:content-[''] after:absolute after:w-[60px] after:ml-[-30px] after:border-b-[3px] after:border-b-[#f38181] after:border-[none] after:border-solid after:left-2/4 after:bottom-0 max-md:text-[28px] max-md:px-0">Latest blog</h2>
                <ul className="mr-[-15px] ml-[-15px] after:block after:content-[''] after:clear-both max-md:mx-0">
                    {images.map((item: blogType, index: number) => (
                        <li key={index} className="w-[33.3%] relative float-left pb-8 px-[15px] max-md:w-full">
                            <div className="block relative transition-transform duration-500 ease-[ease] z-[21] before:opacity-0 before:content-[''] before:absolute before:w-full before:h-full before:z-[22] before:transition-opacity before:duration-500 before:ease-[ease] before:[background:linear-gradient(to_top,#fce38a,#f38181)] before:left-0 before:top-0 after:opacity-0 after:content-[''] after:absolute after:w-full after:h-full after:z-20 after:transition-opacity after:duration-500 after:ease-[ease] after:[background:#95e1d3] after:-mr-2.5 after:mt-2.5 after:right-0 after:top-0 hover:-translate-x-2.5 hover:-translate-y-2.5 hover:before:opacity-90 hover:after:opacity-100 hover:[&_.under-layer]:opacity-0 hover:[&_.hover]:opacity-100">
                                <Image
                                    src={item.img}
                                    alt=""
                                    width={380}
                                    height={250}
                                    className="w-full block z-[21] relative"
                                />
                                <div
                                    className="under-layer absolute [background:#95e1d3] text-center transition-opacity duration-500 ease-[ease] z-[25] p-3.5 -left-2.5 bottom-2.5 max-lg:p-3">
                                    <h2 className="text-3xl font-montserrat text-white leading-[21px] font-semibold pb-[9px] max-lg:text-[26px]">{item.day}</h2>
                                    <p className="italic font-thin text-white leading-[10px] max-lg:text-[13px]">{item.month}</p>
                                </div>
                                <ul className="hover social opacity-0 absolute top-[121px] ml-[-107px] transition-opacity duration-500 ease-[ease] z-[23] -mt-7 left-2/4 cursor-pointer [&>li]:float-left [&>li]:transition-opacity [&>li]:duration-500 [&>li]:ease-[ease] [&>li]:border-r-[#f9bd87] [&>li]:border-r border-solid [&>li]:leading-4 [&>li_a]:block max-xl:top-[105px] max-lg:top-[85px] max-lg:ml-[-79px] max-md:ml-[-107px] max-md:top-2/4">
                                    <li>
                                        <Link href={item.facebook}>
                                            <FontAwesomeIcon icon={faFacebookF} className={iconClasses}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={item.twitter}>
                                            <FontAwesomeIcon icon={faTwitter} className={iconClasses}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={item.pinterest}>
                                            <FontAwesomeIcon icon={faPinterestP} className={iconClasses}/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={item.instagram}>
                                            <FontAwesomeIcon icon={faInstagram} className={iconClasses}/>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-left border-b-neutral-200 mb-[18px] pl-0 pr-3.5 pt-[18px] pb-3.5 border-[none] border-b border-solid">
                                <Link href={item.url}>
                                    <h2 className="font-montserrat font-medium text-[#333] text-sm uppercase pl-0 pr-[18px] pt-0 pb-3.5">{item.title}</h2>
                                </Link>
                                <p className="text-[15px] leading-[23px] max-lg:text-[13px] max-lg:leading-[18px]">{item.description}</p>
                            </div>
                            <div className="block leading-[10px] text-left text-[15px]">
                                <span className="italic font-thin transition-opacity duration-500 ease-[ease] leading-[10px] inline-block pr-[9px]">
                                    <FontAwesomeIcon icon={faEye} className="text-[13px] text-[#95e1d3] transition-[color] duration-500 ease-[ease] pr-[3px]" />
                                    {item.views}
                                </span>
                                <span className="italic font-thin transition-opacity duration-500 ease-[ease] leading-[10px] inline-block pr-[9px]">
                                    <FontAwesomeIcon icon={faCommentDots} className="text-[13px] text-[#95e1d3] transition-[color] duration-500 ease-[ease] pr-[3px]" />
                                    {item.comments}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}