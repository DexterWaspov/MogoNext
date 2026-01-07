'use client';

import React, {Children, cloneElement, useState, createContext, useContext} from "react";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp} from "@fortawesome/free-solid-svg-icons";


type AccordionItemPublicProps = {
    title: string,
    icon: IconDefinition,
    children?: React.ReactNode
};
type AccordionItemInternalProps = {
    index: number
};
type AccordionItemProps = AccordionItemPublicProps | (AccordionItemPublicProps & AccordionItemInternalProps);

type ProviderType = {
    openId: number | null,
    toggle: (index: null | number) => void
}
const AccordionProvider: React.Context<ProviderType | null> = createContext<ProviderType | null>(null);


export function Accordion({children}: {children: React.ReactNode}) {
    const [openId, setOpenId] = useState<number | null>(0); // set to "0" for a first section to be active

    const toggle = (index: null | number) => {
        /* all sections can be closed at the same time: */
        //setOpenId((prev) => (prev === index ? null : index));

        /* at least one section should be active: */
        if (index !== null) {
            setOpenId(index);
        }
    };

    return (
        <div className="accordion text-left">
            <AccordionProvider value={{ openId, toggle }}>
                {Children.map(children, (child, index: number) => {
                    if (!React.isValidElement<AccordionItemProps>(child)) return child;

                    return cloneElement(child, {index: index});
                })}
            </AccordionProvider>
        </div>
    )
}

export function AccordionItem(props: AccordionItemProps) {
    const { title, icon, children } = props;
    const index = "index" in props ? props.index : -1;

    const { openId, toggle } = useAccordionContext();
    const isOpen: boolean = openId === index;

    return (
        <div className="accordion-item mb-2.5 w-full">
            <h2
                className="flex flex-row flex-nowrap items-center uppercase text-[#333] text-sm leading-[10px] font-medium [background:#fff] border border-neutral-200 border-solid pt-[11px] pb-2.5 px-3.5 cursor-pointer lg:max-xl:py-[7px]"
                onClick={() =>
                    toggle(isOpen ? null : index)
                }
            >
                <FontAwesomeIcon icon={icon} className="text-[#95e1d3] pr-[7px] text-[35px] max-xl:text-3xl" />
                <span className="font-montserrat pt-[3px]">{title}</span>
                <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} className="ml-auto text-[#ccc] pr-0.5 text-[28px] pt-1" />
            </h2>

            <div className={(isOpen ? 'max-h-[187px] pt-1 pb-[22px] max-xl:max-h-[141px] max-lg:max-h-[189px] ' : 'max-h-0 py-0 ') + 'overflow-hidden [transition:max-height_600ms_ease,padding_170ms_ease] pr-4 border border-t-0 -mt-px border-neutral-200 border-solid'}>
                <div className={(isOpen ? 'max-h-[155px] max-xl:max-h-[109px] max-lg:max-h-[157px] max-md:max-h-[145px] max-xs:max-h-[140px] ' : 'max-h-0 ') + 'overflow-auto transition-[max-height] duration-[600ms] pl-[18px] pr-6 mt-3.5 leading-[23px] text-sm italic font-light [&_>p]:pl-[3px] [&_>p]:pr-0 [&_>p]:pt-0 [&_>p]:pb-3 [&::-webkit-scrollbar]:w-[5px] [&::-webkit-scrollbar-thumb]:[-webkit-box-shadow:inset_20px_24px_18px_#95e1d3] [&::-webkit-scrollbar-thumb]:rounded-[3px] [&::-webkit-scrollbar-track]:[-webkit-box-shadow:inset_0_0_6px_#f5f5f5] [&::-webkit-scrollbar-track]:rounded-[3px] lg:max-xl:[&_>p]:leading-[18px] lg:max-xl:[&_>p]:text-[13px]'}>
                    {children}
                </div>
            </div>
        </div>
    )
}

function useAccordionContext(): ProviderType {
    const context: ProviderType | null = useContext(AccordionProvider);

    if (!context) {
        throw new Error(
            "Accordion components must be used inside <Accordion>"
        );
    }

    return context;
}