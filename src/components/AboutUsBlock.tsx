import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

export default function AboutUsBlock() {
    type imageType = {
        img: string;
        url: string
    }
    const images: imageType[] = [
        {
            img: '/images/text_block_img_1.jpg',
            url: '#'
        },
        {
            img: '/images/text_block_img_2.jpg',
            url: '#'
        },
        {
            img: '/images/text_block_img_3.jpg',
            url: '#'
        }
    ];

    return (
        <div className="text-block text-center pt-24 pb-[52px] px-0">
            <div className="w-[1200px] mx-auto my-0 p-0 max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-[275px]">
                <h3 className="font-kaushanscript text-2xl leading-4 font-medium text-[#333333] block pt-0 pb-6 px-6">What we do</h3>
                <h2 className="font-montserrat text-[#333333] font-semibold inline-block uppercase relative text-3xl leading-6 pt-0 pb-8 px-[18px] mb-[42px] after:content-[''] after:absolute after:w-[60px] after:ml-[-30px] after:border-b-[3px] after:border-b-[#f38181] after:border-[none] after:border-solid after:left-2/4 after:bottom-0 max-md:px-0 max-md:text-[28px]">Story about us</h2>

                <p className="text-[15px] px-[110px] py-0 mb-[100px] max-xl:px-3 max-xl:py-0 max-lg:text-[13px] max-lg:leading-[18px] max-lg:px-7 max-lg:py-0 max-md:px-0 max-md:mb-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

                <ul className="mr-[-15px] ml-[-15px] after:block after:content-[''] after:clear-both max-md:mx-0">
                    {images.map((item: imageType, index: number) => (
                        <li key={index} className="w-[33.3%] relative float-left pb-8 px-[15px] max-md:float-none max-md:w-full">
                            <Link href={item.url} className="block relative transition-transform duration-500 ease-[ease] z-[21] before:opacity-0 before:content-[''] before:absolute before:w-full before:h-full before:z-[22] before:transition-opacity before:duration-500 before:ease-[ease] before:[background:linear-gradient(to_top,#fce38a,#f38181)] before:left-0 before:top-0 after:opacity-0 after:content-[''] after:absolute after:w-full after:h-full after:z-20 after:transition-opacity after:duration-500 after:ease-[ease] after:[background:#95e1d3] after:-mr-2.5 after:mt-2.5 after:right-0 after:top-0 hover:-translate-x-2.5 hover:-translate-y-2.5 hover:[&_>.hover]:opacity-100 hover:before:opacity-90 hover:after:opacity-100">
                                <Image
                                    src={item.img}
                                    alt=""
                                    width={380}
                                    height={250}
                                    className="w-full block z-[21] relative"
                                />
                                <div className="hover opacity-0 absolute mt-[-25px] ml-[-60px] transition-opacity duration-500 ease-[ease] z-[23] left-2/4 top-2/4 md:max-lg:ml-[-52px]">
                                    <FontAwesomeIcon icon={faUsers} className="text-white text-[23px] pb-3 md:max-lg:text-lg md:max-lg:pb-2" />
                                    <h2 className="font-montserrat text-lg leading-[14px] font-semibold text-white uppercase md:max-lg:text-[15px]">super team</h2>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}