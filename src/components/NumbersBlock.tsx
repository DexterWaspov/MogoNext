import CountOnScroll from "@/components/CountOnScroll";

export default function NumbersBlock() {
    const sections: { title: string; value: number }[] = [
        {
            title: "Web Design Projects",
            value: 42,
        },
        {
            title: "Happy client",
            value: 123,
        },
        {
            title: "Award winner",
            value: 15,
        },
        {
            title: "Cup of coffee",
            value: 99,
        },
        {
            title: "Members",
            value: 24,
        },
    ];

    return (
        <div className="numbers-block [background:#95e1d3]">
            <div className="w-[1200px] mx-auto my-0 p-0 max-xl:w-[970px] max-lg:w-[700px] max-md:w-[450px] max-xs:w-[275px]">
                <ul className="w-full flex overflow-hidden [&_>li:nth-of-type(5n+1)]:border-l-[#b5eae0] [&_>li:nth-of-type(5n+1)]:border-l [&_>li:nth-of-type(5n+1)]:border-solid max-md:block max-md:[&_li:nth-of-type(5n+1)]:border-l-0"> 
                    {sections.map((item: { title: string; value: number }, index: number) => (
                        <li key={index} className="font-montserrat text-center list-none float-left w-1/5 text-white px-0 py-[88px] border-r-[#b5eae0] border-r border-solid max-lg:px-0 max-lg:py-[54px] max-md:w-full max-md:px-0 max-md:py-[68px] max-md:border-r-0 max-md:border-b-[#b5eae0] max-md:border-b max-md:border-solid">
                          <span className="number font-semibold text-7xl leading-[51px] block pt-0 pb-7 px-[18px] max-lg:text-[55px] max-lg:pb-[18px]">
                              <CountOnScroll targetValue={item.value} />
                          </span>
                            <p className="uppercase font-semibold text-sm px-[18px] py-0 max-xl:text-xs">{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}