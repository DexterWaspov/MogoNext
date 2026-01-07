'use client';

import { usePathname } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import TopNavigation from "@/components/TopNavigation";
import TopSearch from "@/components/TopSearch";

export default function Header() {
    const pages: string[] = [ // You can add pages where the Header will have a special appearance.
        '/'
    ];

    const pathName: string = usePathname();
    let isWhite: boolean = false;

    let headerClasses: string = 'pt-[22px] pb-[15px]';
    if (pages.includes(pathName)) {
        /* floating header */
        headerClasses = 'absolute z-[25] w-full top-[22px]';

        /* white header */
        isWhite = true;
    }

    return (
        <header id="header" className={headerClasses}>
            <div className={'w-[1200px] mx-auto my-0 p-0 after:block after:clear-both max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-[calc(100%_-_15px)]'}>
                <Link href="/" className="float-left pl-0 pr-3.5 pt-[3px] pb-0">
                    <Image
                        src={'/images/header_logo.png'}
                        alt="logo"
                        width={92}
                        height={43}
                        priority
                        className={isWhite ? '' : 'brightness-[30%]'}
                    />
                </Link>
                <div className="float-right relative w-[22px] h-[44px]">
                    <TopSearch isWhite={isWhite} />
                </div>
                <nav className="float-right pl-[18px] max-md:pl-0 max-md:mx-[15px] max-md:my-0">
                    <TopNavigation isWhite={isWhite} />
                </nav>
            </div>
        </header>
    )
}