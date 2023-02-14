import paperIcon from "./assets/images/icon-paper.svg";
import scissorsIcon from "./assets/images/icon-scissors.svg";
import rockIcon from "./assets/images/icon-rock.svg";
import { Icon } from "./types/props/icon-prop";

export const icons: Icon[] = [
    {
        id: "56CD868FF42D1",
        img: paperIcon,
        label: "paper",
        altText: "paper icon",
        bgColorClasses:
            "from-paper-1 to-paper-2 shadow-[0_.5rem_#0000004d,_0_0.5rem_#5671f5]",
    },
    {
        id: "86354397F4F25",
        img: scissorsIcon,
        label: "scissors",
        altText: "scissors icon",
        bgColorClasses:
            "from-scissors-1 to-scissors-2 shadow-[0_0.5rem_#0000004d,_0_0.5rem_#eca922]",
    },
    {
        id: "C43A541417C6F",
        img: rockIcon,
        label: "rock",
        altText: "rock icon",
        bgColorClasses:
            "from-rock-1 to-rock-2 shadow-[0_0.5rem_#0000004d,_0_0.5rem_#dd405d]",
    },
];
