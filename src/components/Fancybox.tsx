'use client';

import { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function Fancybox(props: { children: React.ReactNode }) {
    useEffect(() => {
        NativeFancybox.bind("[data-fancybox]", {});

        return () => {
            NativeFancybox.destroy();
        };
    }, []);

    return <>{props.children}</>;
}