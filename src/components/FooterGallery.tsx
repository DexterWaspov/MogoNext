import Image from "next/image";
import Link from "next/link";
import Fancybox from "@/components/Fancybox";

export default function FooterBlogs() {
    const gallery: { image: string; thumb: string; href: string }[] = [
        {
            image: '/images/footer_gallery_block_img_1.jpg',
            thumb: '/images/footer_gallery_block_img_1_thumb.jpg',
            href: '#'
        },
        {
            image: '/images/footer_gallery_block_img_2.jpg',
            thumb: '/images/footer_gallery_block_img_2_thumb.jpg',
            href: '#'
        },
        {
            image: '/images/footer_gallery_block_img_3.jpg',
            thumb: '/images/footer_gallery_block_img_3_thumb.jpg',
            href: '#'
        },
        {
            image: '/images/footer_gallery_block_img_4.jpg',
            thumb: '/images/footer_gallery_block_img_4_thumb.jpg',
            href: '#'
        },
        {
            image: '/images/footer_gallery_block_img_5.jpg',
            thumb: '/images/footer_gallery_block_img_5_thumb.jpg',
            href: '#'
        },
        {
            image: '/images/footer_gallery_block_img_6.jpg',
            thumb: '/images/footer_gallery_block_img_6_thumb.jpg',
            href: '#'
        },
        {
            image: '/images/footer_gallery_block_img_7.jpg',
            thumb: '/images/footer_gallery_block_img_7_thumb.jpg',
            href: '#'
        },
        {
            image: '/images/footer_gallery_block_img_8.jpg',
            thumb: '/images/footer_gallery_block_img_8_thumb.jpg',
            href: '#'
        },
        {
            image: '/images/footer_gallery_block_img_9.jpg',
            thumb: '/images/footer_gallery_block_img_9_thumb.jpg',
            href: '#'
        }
    ];

    return (
        <>
            <Fancybox>
                <ul className="footer-gallery block pb-[18px] w-full overflow-hidden">
                    {gallery.map((item: { image: string; thumb: string; href: string }, index: number) => (
                        <li key={index} className="float-left block p-px">
                            <Link href={item.image} data-fancybox="footer-gallery" className="block relative transition-transform duration-500 ease-[ease] text-[#333] italic text-[13px] no-underline font-thin overflow-hidden before:opacity-0 before:content-[''] before:absolute before:w-full before:h-full before:z-[22] before:transition-opacity before:duration-500 before:ease-[ease] before:[background:linear-gradient(to_top,#fce38a,#f38181)] before:left-0 before:top-0 hover:before:opacity-80 hover:[&>img]:scale-105">
                                <Image
                                    src={item.thumb}
                                    alt="Gallery image"
                                    width={88}
                                    height={88}
                                    className="transition-transform duration-500 ease-[ease]"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </Fancybox>
            <Link href="#" className="text-[#333] italic text-[13px] no-underline font-thin transition-[color] duration-500 ease-[ease] overflow-hidden hover:text-[#f38181]">View more photos</Link>
        </>
    )
}