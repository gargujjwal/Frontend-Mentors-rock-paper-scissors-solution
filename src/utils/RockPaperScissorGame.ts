import { Icon } from "../types/props/icon-prop";
import { icons } from "../data";

export function aiChoice(): Icon {
    return icons[Math.floor(Math.random() * 10) % icons.length];
}

export function decideWinner(first: Icon, sec: Icon): Icon {
    let winner: Icon;
    switch (first.label) {
        case "paper":
            winner = sec.label === "rock" ? first : sec;
            break;
        case "rock":
            winner = sec.label === "scissors" ? first : sec;
            break;
        default:
            winner = sec.label === "paper" ? first : sec;
    }
    return winner;
}
