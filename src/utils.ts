import { GameType, HandSign } from "./types";

export function getComputerDecision(game: GameType): HandSign {
    const handSigns: HandSign[] = ["rock", "paper", "scissors"];
    game === "rock-paper-scissor-spock-lizard" &&
        handSigns.push(...(["lizard", "spock"] as HandSign[]));

    return handSigns.at(Math.floor(Math.random() * handSigns.length))!;
}

export function decideWinner(
    firstSign: HandSign,
    secSign: HandSign
): HandSign | "draw" {
    if (firstSign === secSign) return "draw";

    // key can defeat all the values stored in its values
    const decisions = new Map<HandSign, [HandSign, HandSign]>(
        Object.entries<[HandSign, HandSign]>({
            paper: ["rock", "spock"],
            rock: ["lizard", "scissors"],
            lizard: ["spock", "paper"],
            spock: ["scissors", "rock"],
            scissors: ["paper", "lizard"],
        }) as [HandSign, [HandSign, HandSign]][]
    );

    // if secSign is one of the value of the firstSign of decisions map, then winner is firstSign otherwise secSIgn
    return decisions.get(firstSign)?.includes(secSign) ? firstSign : secSign;
}
