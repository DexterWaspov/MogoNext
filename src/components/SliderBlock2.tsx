'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function SliderBlock() {
    const imageClasses:string = "inline-block w-auto float-left transition-transform duration-500 ease-[ease] ml-[78px] mr-7 my-0 cursor-pointer hover:scale-95 max-lg:w-[123px] max-lg:ml-[52px] max-lg:mr-3 max-lg:my-0 max-md:float-none max-md:w-[150px] max-md:mt-0 max-md:mb-6 max-md:mx-0";
    const contentClasses:string = "italic text-2xl text-[#656565] leading-[33px] inline-block pb-6 font-light pt-8 max-xl:text-lg max-xl:pb-4 max-lg:text-[13.5px] max-lg:leading-6 max-lg:pb-[9px] max-lg:pt-3 max-md:text-[21px] max-md:text-left max-md:pt-0 max-md:pb-6 max-md:px-6 max-md:leading-[33px]";
    const titleClasses:string = "font-kaushanscript text-2xl relative inline-block text-[#333] pl-[70px] pr-6 py-0 before:content-[''] before:absolute before:w-[60px] before:border-b-[3px] before:border-b-[#f38181] before:border-[none] before:border-solid before:left-0 before:top-2/4";
    const buttonClasses:string = "absolute mt-[-19px] top-2/4 z-[999] text-[27px] text-[#cfcfcf] cursor-pointer";

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation={{
                prevEl: ".swiper-prev",
                nextEl: ".swiper-next",
            }}
            loop
        >
            <SwiperSlide>
                <Image
                    src="/images/slider_block_3_img_1.png"
                    alt=""
                    width={215}
                    height={217}
                    className={imageClasses}
                />
                <p className={contentClasses}>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/> quis nostrud
                    exercitation.&quot;</p>
                <h3 className={titleClasses}>Joshua Earle</h3>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/images/slider_block_3_img_1.png"
                    alt=""
                    width={215}
                    height={217}
                    className={imageClasses}
                />
                <p className={contentClasses}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/> quis nostrud
                    exercitation.&quot;</p>
                <h3 className={titleClasses}>Joshua Earle</h3>
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/images/slider_block_3_img_1.png"
                    alt=""
                    width={215}
                    height={217}
                    className={imageClasses}
                />
                <p className={contentClasses}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/> quis nostrud
                    exercitation.&quot;</p>
                <h3 className={titleClasses}>Joshua Earle</h3>
            </SwiperSlide>

            <button className={buttonClasses + ' swiper-prev left-6 max-lg:left-2.5 max-md:-left-2.5 max-xs:-left-1.5'}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button className={buttonClasses + ' swiper-next right-6 max-lg:right-2.5 max-md:-right-2.5 max-xs:-right-1.5'}>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </Swiper>
    )
}
