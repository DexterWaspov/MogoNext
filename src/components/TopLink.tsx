import Link from "next/link";
import {usePathname} from "next/navigation";
export default function TopLink({elem, isWhite}: {
        elem: {title: string; href: string },
        isWhite: boolean
    }) {
    const pathName: string = usePathname();

    let activeColor: string = (isWhite ? 'text-white ' : 'text-[#333333] ') + 'border-b-transparent';
    if (pathName == elem.href) {
        activeColor = isWhite ? 'text-[#fce38a] border-b-[#fce38a]' : 'text-[#333333] border-b-[#333333]';
    }

    const hoverColors: string = isWhite ? 'hover:text-[#fce38a] hover:border-b-[#fce38a]' : 'hover:text-[#333333] hover:border-b-[#333333]';

    return (
        <li className="list-none block float-left pl-0 pr-[54px] pt-[18px] pb-0 max-md:pr-[30px]">
            <Link href={elem.href} className={`font-montserrat ${activeColor} block no-underline uppercase leading-[14px] [transition:color_500ms_ease,border_500ms_ease] font-semibold text-sm pb-3 border-b-[3px] border-[none] border-solid ${hoverColors}`}>
                {elem.title}
            </Link>
        </li>
    )
}