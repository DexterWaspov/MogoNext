import Image from "next/image";
import Link from "next/link";

export default function FooterBlogs() {
    const blogPosts: { image: string; text: string; date: string; href: string }[] = [
        {
            image: '/images/footer_blog_img_1.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
            date: 'Jan 9, 2025',
            href: '#'
        },
        {
            image: '/images/footer_blog_img_2.jpg',
            text: 'Consectetur adipiscing elit, sed do eiusmod tempor',
            date: 'Feb 5, 2024',
            href: '#'
        },
        {
            image: '/images/footer_blog_img_3.jpg',
            text: 'sed do eiusmod tempor incididunt ut labore',
            date: 'Aug 12, 2023',
            href: '#'
        }
    ];


    return (
        <ul className="blogs">
            {blogPosts.map((item: { image: string; text: string; date: string; href: string }, index: number) => (
                <li key={index} className="transition-opacity duration-500 ease-[ease] mb-[34px]">
                    <Link href={item.href} className="block no-underline">
                        <Image
                            src={item.image}
                            alt="blog image"
                            width={120}
                            height={80}
                            className="float-left transition-transform duration-500 ease-[ease] pr-[22px] hover:scale-105 box-content"
                        />
                        <h2 className="font-montserrat text-[#5c5c5c] text-xs font-medium leading-[19px] uppercase pt-3 pb-[3px] px-0 max-xl:text-[11px] max-xl:pt-0 max-xl:pb-[3px] max-xl:px-0">{item.text}</h2>
                        <p className="text-[13px] font-thin italic text-[#6e6e6e] pl-0 pr-[18px] pt-0 pb-1">{item.date}</p>
                    </Link>
                </li>
            ))}
        </ul>
    )
}