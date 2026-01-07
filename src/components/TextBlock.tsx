import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faImage} from "@fortawesome/free-regular-svg-icons";
import {faBook, faChartLine, faDesktop, faHome} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export default function TextBlock() {
    const blocks: { icon: IconDefinition; title: string, description: string }[] = [
        {
            icon: faClock,
            title: 'Photography',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        },
        {
            'icon': faChartLine,
            'title': 'Web Design',
            'description': 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            'icon': faDesktop,
            'title': 'Creativity',
            'description': 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        },
        {
            'icon': faBook,
            'title': 'Seo',
            'description': 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
        },
        {
            'icon': faHome,
            'title': 'Css/Html',
            'description': 'Lorem dolor sit amet, consectetur adipiscing elit, sed do tempor.'
        },
        {
            'icon': faImage,
            'title': 'Digital',
            'description': 'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        },
    ];

    return (
        <ul className="mr-[-15px] ml-[-15px] after:content-[''] after:block after:clear-both max-md:[&>li:nth-of-type(6n+4)]:border-b-neutral-200 max-md:[&>li:nth-of-type(6n+4)]:border-b max-md:[&>li:nth-of-type(6n+4)]:border-solid max-md:[&>li:nth-of-type(6n+5)]:border-b-neutral-200 max-md:[&>li:nth-of-type(6n+5)]:border-solid max-md:[&>li:nth-of-type(6n+5)]:border-b-0 max-xs:[&>li:nth-of-type(6n+4)]:border-b-neutral-200 max-xs:[&>li:nth-of-type(6n+4)]:border-b max-xs:[&>li:nth-of-type(6n+4)]:border-solid max-xs:[&>li:nth-of-type(6n+5)]:border-b-neutral-200 max-xs:[&>li:nth-of-type(6n+5)]:border-b max-xs:[&>li:nth-of-type(6n+5)]:border-solid max-md:mx-0 max-md:[&>li:nth-of-type(2n+1)]:clear-both max-md:flex max-md:flex-wrap">
            {blocks.map((item: { icon: IconDefinition; title: string; description: string }, index: number) => (
                <li key={index} className="w-[33.3%] pt-[42px] pb-[42px] float-left border-b-neutral-200 border-b border-solid [&:nth-of-type(6n+4)]:border-b-0 [&:nth-of-type(6n+5)]:border-b-0 [&:nth-of-type(6n+6)]:border-b-0 max-md:w-6/12 max-xs:w-full max-xs:float-none">
                    <FontAwesomeIcon icon={item.icon} className="text-[29px] text-[#95e1d3] float-left pl-[18px]" />
                    <div className="pl-20 pr-[18px] pt-[3px] pb-0 text-left max-md:pr-[29px]">
                        <h2 className="font-montserrat uppercase text-[#333] text-sm leading-[10px] font-medium pb-3">{item.title}</h2>
                        <p className="text-[#999] text-[15px] leading-[23px] max-lg:text-[13px] max-lg:leading-[18px]">{item.description}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}