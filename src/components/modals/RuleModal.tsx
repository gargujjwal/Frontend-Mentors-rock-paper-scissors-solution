import { useContext } from "react";
import ModalContextProvider, { ModalContext } from "../UI/Modal";

export function RuleModal(props: { onExit: () => void }) {
    const modalContext = useContext(ModalContext);

    function modalExitHandler() {
        modalContext.toggleModal();
        props.onExit();
    }

    return (
        <ModalContextProvider>
            <h1
                className={
                    "text-center text-4xl font-bold uppercase text-dark-text"
                }
            >
                Rules
            </h1>
            <img
                className={"object-cover"}
                src="src/assets/images/image-rules.svg"
                alt="rules"
            />

            <button
                className={
                    "flex h-6 w-6 items-center justify-center outline-none hover:scale-110 hover:drop-shadow-2xl lg:h-10 lg:w-10"
                }
                onClick={modalExitHandler}
            >
                <img
                    className={"h-full w-full object-cover"}
                    src="src/assets/images/icon-close.svg"
                    alt="close icon"
                />
            </button>
        </ModalContextProvider>
    );
}
