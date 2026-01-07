'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

export default function SliderBlock() {
    const iconClasses:string = "text-[61px] text-[#95e1d3] float-left ml-[110px] mr-14 my-0 px-[35px] p-[42px] border-[3px] border-solid max-xl:ml-[68px] max-xl:mr-9 max-xl:my-0 max-lg:text-[35px] max-lg:ml-16 max-lg:mr-7 max-lg:my-0 max-lg:p-[30px] max-md:float-none max-md:text-5xl max-md:mt-0 max-md:mb-6 max-md:mx-0 max-md:p-8";
    const contentClasses:string = "italic text-2xl font-light text-[#656565] leading-[33px] inline-block pb-6 max-xl:text-lg max-xl:pb-4 max-lg:text-[13.5px] max-lg:leading-6 max-lg:pb-[9px] max-md:text-[21px] max-md:text-left max-md:pt-0 max-md:pb-6 max-md:px-6 max-md:leading-[33px]";
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
                <FontAwesomeIcon icon={faComments} className={iconClasses} />
                <p className={contentClasses}>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/> quis nostrud
                    exercitation.&quot;</p>
                <h3 className={titleClasses}>Jon Doe</h3>
            </SwiperSlide>
            <SwiperSlide>
                <FontAwesomeIcon icon={faComments} className={iconClasses} />
                <p className={contentClasses}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/> quis nostrud
                    exercitation.&quot;</p>
                <h3 className={titleClasses}>Jon Doe</h3>
            </SwiperSlide>
            <SwiperSlide>
                <FontAwesomeIcon icon={faComments} className={iconClasses} />
                <p className={contentClasses}>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/> tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/> quis nostrud
                    exercitation.&quot;</p>
                <h3 className={titleClasses}>Jon Doe</h3>
            </SwiperSlide>

            <button className={buttonClasses + ' swiper-prev left-6 max-md:-left-2.5 max-md:mt-6 max-xs:-left-1.5'}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button className={buttonClasses + ' swiper-next right-6 max-md:-right-2.5 max-md:mt-6 max-xs:-right-1.5'}>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </Swiper>
    )
}
