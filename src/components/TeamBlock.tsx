import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faPinterestP, faInstagram } from "@fortawesome/free-brands-svg-icons";

type MemberProps = {
    imgUrl: string,
    imgWidth: number,
    imgHeight: number,
    imgAlt:string,
    name: string,
    prof: string,
    facebook: string,
    twitter: string,
    pinterest: string,
    instagram: string
}

const iconClasses:string = "text-[#f38181] text-[25px] [background:#fce38a] [transition:opacity_500ms_ease,color_500ms_ease,background-color_500ms_ease] px-[10px] py-3.5 hover:text-white hover:[background:#f38181] md:max-lg:text-xl md:max-lg:px-[7px]";

export function TeamBlock({blockClasses, children}: {blockClasses: string, children: React.ReactNode}) {
    return (
        <ul className={blockClasses + " after:block after:content-[''] after:clear-both max-md:mx-0"}>
            {children}
        </ul>
    )
}
export function Member({
   imgUrl,
   imgWidth,
   imgHeight,
   imgAlt,
   name,
   prof,
   facebook,
   twitter,
   pinterest,
                           instagram
}: MemberProps) {
    return (
        <li className="w-[33.3%] relative float-left px-[15px] max-md:w-full">
            <div
                className="block relative transition-transform duration-500 ease-[ease] z-[21] before:opacity-0 before:content-[''] before:absolute before:w-full before:h-full before:z-[22] before:transition-opacity before:duration-500 before:ease-[ease] before:[background:linear-gradient(to_top,#fce38a,#f38181)] before:left-0 before:top-0 after:opacity-0 after:content-[''] after:absolute after:w-full after:h-full after:z-20 after:transition-opacity after:duration-500 after:ease-[ease] after:[background:#95e1d3] after:-mr-2.5 after:mt-2.5 after:right-0 after:top-0 hover:-translate-x-2.5 hover:-translate-y-2.5 hover:[&_>.hover]:opacity-100 hover:before:opacity-90 hover:after:opacity-100 hover:[&_.social]:opacity-100">
                <Image
                    src={imgUrl}
                    alt={imgAlt}
                    width={imgWidth}
                    height={imgHeight}
                    className="w-full block z-[21] relative"
                />
                <ul className="social opacity-0 absolute ml-[-107px] transition-opacity duration-500 ease-[ease] z-[23] -mt-7 left-2/4 top-2/4 cursor-pointer [&>li]:float-left [&>li]:transition-opacity [&>li]:duration-500 [&>li]:ease-[ease] [&>li]:border-r-[#f9bd87] [&>li]:border-r border-solid md:max-lg:ml-[-81px] md:max-lg:-mt-4">
                    <li>
                        <Link href={facebook}>
                            <FontAwesomeIcon icon={faFacebookF} className={iconClasses} />
                        </Link>
                    </li>
                    <li>
                        <Link href={twitter}>
                            <FontAwesomeIcon icon={faTwitter} className={iconClasses} />
                        </Link>
                    </li>
                    <li>
                        <Link href={pinterest}>
                            <FontAwesomeIcon icon={faPinterestP} className={iconClasses} />
                        </Link>
                    </li>
                    <li>
                        <Link href={instagram}>
                            <FontAwesomeIcon icon={faInstagram} className={iconClasses} />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="pt-7 pb-[52px] px-7 max-lg:px-0 max-lg:py-7 max-md:pb-[52px]">
                <h2 className="font-montserrat font-medium uppercase text-sm leading-[10px] text-[#333333] pt-0 pb-3 px-3">{name}</h2>
                <p className="font-thin text-[15px] leading-[10px] px-3.5 py-0 max-lg:text-[13px]">{prof}</p>
            </div>
        </li>
    )
}