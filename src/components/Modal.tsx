import { createPortal } from "react-dom";
import { GameType } from "./App";
import RulesRockPaperScissor from "../assets/images/rules/image-rules.svg";
import RulesRockPaperScissorLizardSpock from "../assets/images/rules/image-rules-bonus.svg";
import CrossSVG from "../assets/images/icon-close.svg";
import { MouseEventHandler } from "react";

type ModalProps = {
    gameType: GameType;
    onModalClose: MouseEventHandler<HTMLButtonElement>;
};
export default function Modal({ gameType, onModalClose }: ModalProps) {
    return createPortal(
        <dialog className="fixed z-50 block h-full w-full font-primary lg:grid lg:place-content-center lg:bg-[rgba(0,0,0,0.5)]">
            <div className="flex h-full flex-col items-center justify-around bg-white lg:relative lg:h-max lg:w-max lg:items-start lg:gap-10 lg:rounded-lg lg:p-8">
                <h1 className="text-5xl font-bold uppercase text-dark-text lg:flex lg:w-full lg:justify-between">
                    RULES
                    <button
                        className={"hidden lg:block"}
                        onClick={onModalClose}
                    >
                        <img src={CrossSVG} alt="cross" />
                    </button>
                </h1>
                <img
                    className="lg:w-96"
                    src={
                        gameType === "rock-paper-scissors"
                            ? RulesRockPaperScissor
                            : RulesRockPaperScissorLizardSpock
                    }
                    alt="rules"
                />
                <button
                    className="p-4 text-center lg:hidden"
                    onClick={onModalClose}
                >
                    <img src={CrossSVG} alt="cross" />
                </button>
            </div>
        </dialog>,
        document.querySelector("#modal") as HTMLElement
    );
}
