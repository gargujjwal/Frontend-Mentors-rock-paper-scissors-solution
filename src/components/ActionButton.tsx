import RockSVG from "../assets/images/games/icon-rock.svg";
import PaperSVG from "../assets/images/games/icon-paper.svg";
import ScissorSVG from "../assets/images/games/icon-scissors.svg";
import LizardSVG from "../assets/images/games/icon-lizard.svg";
import SpockSVG from "../assets/images/games/icon-spock.svg";
import { HandSign } from "../types";
import { MouseEventHandler } from "react";

type ActionButtonProps = {
    icon: HandSign;
    onBtnClick: (icon: HandSign) => void;
    size?: "sm" | "lg";
};

function getIcon(icon: ActionButtonProps["icon"]) {
    switch (icon) {
        case "rock":
            return RockSVG;
        case "paper":
            return PaperSVG;
        case "lizard":
            return LizardSVG;
        case "spock":
            return SpockSVG;
        case "scissors":
            return ScissorSVG;
    }
}

function getColorClasses(icon: ActionButtonProps["icon"]): string {
    switch (icon) {
        case "rock":
            return "from-rock-1 to-rock-2 shadow-[0_0.5rem_#0000004d,_0_0.5rem_#dd405d]";
        case "paper":
            return "from-paper-1 to-paper-2 shadow-[0_.5rem_#0000004d,_0_0.5rem_#5671f5]";
        case "scissors":
            return "from-scissors-1 to-scissors-2 shadow-[0_0.5rem_#0000004d,_0_0.5rem_#eca922]";
        case "lizard":
            return "from-lizard-1 to-lizard-2 shadow-[0_.5rem_#0000004d,_0_0.5rem_#5C36A7]";
        case "spock":
            return "from-spock-1 to-spock-2 shadow-[0_.5rem_#0000004d,_0_0.5rem_#2D8EAE]";
    }
}

export function ActionButton({ icon, size, onBtnClick }: ActionButtonProps) {
    const buttonClickHandler: MouseEventHandler<HTMLButtonElement> = () =>
        onBtnClick(icon);

    return (
        <button
            className={`h-[7.5rem] w-[7.5rem] rounded-full bg-gradient-to-b p-3 transition hover:translate-y-2 md:h-32 md:w-32 xl:h-40 xl:w-40 xl:p-4 ${
                size === "sm" && "scale-75"
            } ${size === "lg" && "scale-125"} ${getColorClasses(icon)}`}
            onClick={buttonClickHandler}
        >
            <div className="grid h-full w-full place-content-center rounded-full bg-gray-200 p-4 shadow-[inset_0_0.35rem_#00000026]">
                <img src={getIcon(icon)} alt={`${icon}`} />
            </div>
        </button>
    );
}
