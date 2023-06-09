export type HandSign = "rock" | "paper" | "scissors" | "lizard" | "spock";
export type GameType =
    | "rock-paper-scissors"
    | "rock-paper-scissor-spock-lizard";

export interface Game {
    gameType: GameType;
    onScoreIncrease: () => void;
}
