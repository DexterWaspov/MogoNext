import Image from "next/image";
import Link from "next/link";
import Followers from "@/components/Followers";
import FooterBlogs from "@/components/FooterBlogs";
import FooterGallery from "@/components/FooterGallery";

export default function Foote() {
    return (
        <footer id="footer" className="pt-[78px] pb-[22px] px-0">
            <div className="footer-top-block text-left border-b-neutral-200 pb-[68px] border-[none] border-b border-solid">
                <div className="w-[1200px] mx-auto my-0 p-0 after:content-[''] after:block after:clear-both max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-[calc(100%_-_15px)]">
                    <div className="left-block w-2/5 float-left max-xl:w-[35%] max-lg:w-full">
                        <Link href="/" className="pb-8 inline-block">
                            <Image
                                src={'/images/footer_logo.png'}
                                alt="footer logo"
                                width={146}
                                height={47}
                            />
                        </Link>
                        <p className="text-[15px] leading-[23px] mb-[42px] pr-3.5 max-xl:pr-0 max-xl:mb-[28px] max-md:text-xs max-md:leading-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <Followers />
                    </div>
                    <div className="blog-block w-[33%] float-left pl-7 pr-6 py-0 max-xl:pr-0 max-lg:w-3/5 max-lg:pr-[24px] max-md:w-full max-md:p-0 max-md:pb-11">
                        <h2 className="font-montserrat text-sm text-[#333] uppercase font-medium leading-[14px] pl-0 pr-[18px] pt-0 pb-10">Blogs</h2>
                        <FooterBlogs />
                    </div>
                    <div className="gallery-block w-[27%] float-left pl-[54px] pr-0 pt-0 pb-[34px] max-xl:w-[31%] max-xl:pl-6 max-lg:w-2/5 max-lg:pt-0 max-lg:pb-[34px] max-lg:px-0 max-md:w-full max-md:pt-0 max-md:pb-[34px] max-md:px-0 max-xs:pb-0">
                        <h2 className="font-montserrat text-sm text-[#333] uppercase font-medium leading-[14px] pl-0 pr-[18px] pt-0 pb-10">Instagram</h2>
                        <FooterGallery />
                    </div>
                </div>
            </div>
            <div className="footer-botttom-block pt-6">
                <div className="w-[1200px] mx-auto my-0 p-0 max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-[calc(100%_-_15px)]">
                    <div
                        className="copyright-text font-montserrat leading-[13px] text-sm text-[#333] font-medium text-center">
                        MoGo free template on <span className="text-[#f38181]">Next.js</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}