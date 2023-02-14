import { MouseEvent } from "react";

export interface Icon {
    id: string;
    img: string;
    label: string;
    altText: string;
    bgColorClasses?: string;
}

export default interface IconProp extends Icon {
    classes?: string;
    disabled: boolean;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
