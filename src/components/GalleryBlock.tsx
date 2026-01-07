import React from "react";
import Fancybox from "@/components/Fancybox";
import Link from "next/link";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faImage} from "@fortawesome/free-regular-svg-icons";


type ItemProps = {
    imgUrl: string,
    imgWidth: number,
    imgHeight: number,
    imgAlt: string,
    fancyGroup: string,
    title: string,
    text: string
}
export function GalleryBlock({blockClasses, children}: {blockClasses: string, children: React.ReactNode}) {
    return (
        <Fancybox>
            <ul className={blockClasses + " "}>
                {children}
            </ul>
        </Fancybox>
    )
}

export function GalleryItem({
   imgUrl,
   imgWidth,
   imgHeight,
   imgAlt,
   fancyGroup,
   title,
   text
}: ItemProps) {
    return (
        <li className="w-[33.3%] float-left max-md:w-6/12 max-xs:w-full max-xs:float-none">
            <Link href={imgUrl} data-fancybox={fancyGroup} className="w-full block relative before:opacity-0 before:content-[''] before:absolute before:w-full before:h-full before:z-[22] before:transition-opacity before:duration-500 before:ease-[ease] before:[background:linear-gradient(to_top,#fce38a,#f38181)] before:left-0 before:top-0 hover:before:opacity-90 hover:[&>.hover]:opacity-100">
                <Image
                    src={imgUrl}
                    alt={imgAlt}
                    width={imgWidth}
                    height={imgHeight}
                    className="w-full block"
                />
                <div className="hover opacity-0 absolute mt-[-43px] ml-[-84px] transition-opacity duration-500 ease-[ease] z-[23] left-2/4 top-2/4">
                    <FontAwesomeIcon icon={faImage} className="text-[32px] text-white pb-[18px]" />
                    <h2 className="font-montserrat uppercase text-sm text-white font-medium pb-3.5">{title}</h2>
                    <p className="text-white italic leading-[10px]">{text}</p>
                </div>
            </Link>
        </li>
    )
}