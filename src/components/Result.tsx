import { ActionButton } from "./ActionButton";
import { useEffect, useState } from "react";
import { GameType, HandSign } from "../types";
import { decideWinner, getComputerDecision } from "../utils";

type ResultProps = {
    playerChosenSign: HandSign;
    gameType: GameType;
    scoreIncrementer: () => void;
    onGameReset: () => void;
};

function getResultString(winner: "player" | "computer" | "draw" | ""): string {
    switch (winner) {
        case "player":
            return "YOU WIN";
        case "computer":
            return "YOU LOSE";
        case "draw":
            return "DRAW";
        default:
            return "";
    }
}

export default function Result({
    playerChosenSign,
    gameType,
    onGameReset,
    scoreIncrementer,
}: ResultProps) {
    const [computerChoice, setComputerChoice] = useState<
        ResultProps["playerChosenSign"] | ""
    >("");
    const [winner, setWinner] = useState<"player" | "computer" | "draw" | "">(
        ""
    );

    // set computer choice
    useEffect(() => {
        setTimeout(() => {
            // take computer decision
            const computerDecision = getComputerDecision(gameType);
            setComputerChoice(computerDecision);

            // calculate winner
            const winnerChoice = decideWinner(
                playerChosenSign,
                computerDecision
            );
            if (winnerChoice === "draw") setWinner("draw");
            else
                setWinner(
                    winnerChoice === playerChosenSign ? "player" : "computer"
                );

            // if player won, increment score
            if (winnerChoice === playerChosenSign) scoreIncrementer();
        }, 1000);
    }, []);

    const result = getResultString(winner);

    const gameResetHandler = () => {
        setWinner("");
        setComputerChoice("");

        onGameReset();
    };
    return (
        <section className={"mt-20 flex-1 space-y-16 uppercase"}>
            <div className="flex justify-center gap-12 text-center font-bold lg:items-end">
                <div className="space-y-16">
                    <h3 className="lg:text-xl xl:text-2xl">YOU PICKED</h3>
                    <div className={`${winner === "player" ? "winner" : ""}`}>
                        <ActionButton
                            size={"lg"}
                            icon={playerChosenSign}
                            onBtnClick={() => {}}
                        />
                    </div>
                </div>

                <div className="mx-auto hidden w-max min-w-[5rem] space-y-4 lg:block">
                    <h1 className="text-6xl font-bold">{result}</h1>
                    <button
                        className="w-full rounded-lg bg-white py-4 text-center font-semibold tracking-widest text-dark-text"
                        onClick={gameResetHandler}
                    >
                        PLAY AGAIN
                    </button>
                </div>

                <div className="space-y-16">
                    <h3 className="lg:text-xl xl:text-2xl">THE HOUSE PICKED</h3>
                    <div className={`${winner === "computer" ? "winner" : ""}`}>
                        {computerChoice === "" ? (
                            <div className="h-32 w-32 rounded-full bg-[hsl(237,49%,15%)]"></div>
                        ) : (
                            <ActionButton
                                size={"lg"}
                                icon={computerChoice}
                                onBtnClick={() => {}}
                            />
                        )}
                    </div>
                </div>
            </div>
            <div className="mx-auto w-max space-y-4 lg:hidden">
                <h1 className="text-6xl font-bold">{result}</h1>
                <button
                    className="w-full rounded-lg bg-white py-4 text-center font-semibold tracking-widest text-dark-text"
                    onClick={gameResetHandler}
                >
                    PLAY AGAIN
                </button>
            </div>
        </section>
    );
}
