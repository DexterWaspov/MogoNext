import Form from 'next/form';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function TopSearch({isWhite}: {isWhite: boolean}) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');

    function handleMouseEnter() {
        setIsOpen(true);
    }

    function handleMouseLeave() {
        setIsOpen(false);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    const openClass: string = isOpen ? 'opacity-100' : 'opacity-0';
    const iconColor: string = isWhite ? 'text-white ' : 'text-[#333333] ';

    return (
        <Form
            className={(isOpen ? "w-[235px] absolute right-0 " : "relative overflow-hidden ") + iconColor + "text-[17px] font-extrabold pt-[13px]"}
            action="#"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <input
                name="search-value"
                className={`${openClass} absolute border-2 [background:white] border-solid border-[#333] right-[30px] top-[10px] rounded-[5px] text-[#333] font-normal indent-[5px] transition-opacity duration-700 ease-[ease]`}
                type="text"
                value={inputValue}
                onChange={handleChange}
                autoComplete="off"
            />
            <button type="submit" className="float-right">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </Form>
    )
}