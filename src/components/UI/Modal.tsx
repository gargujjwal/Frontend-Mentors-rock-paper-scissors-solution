import React, { createContext, useState } from "react";
import ModalProps from "../../types/props/modal-props";
import ModalContextType from "../../types/contexts/modal-context";

export const ModalContext = createContext<ModalContextType>({
    hidden: false,
    toggleModal: () => {},
});

export default function ModalContextProvider(props: ModalProps): JSX.Element {
    const [hide, setHide] = useState<boolean>(false);

    function toggleModal(): void {
        setHide(prevState => !prevState);
    }

    // using context here, so that I can just let the child element to take care
    // of letting the modal close
    return (
        <ModalContext.Provider value={{ hidden: hide, toggleModal }}>
            <div
                className={`absolute z-20 flex h-full w-full flex-col items-center justify-between gap-4 bg-white py-28 ${
                    hide && "hidden"
                } ${props.className}`}
            >
                {props.children}
            </div>
        </ModalContext.Provider>
    );
}
