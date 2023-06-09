import { MouseEventHandler, useState } from "react";
import RockPaperScissorSVG from "../assets/images/logo/logo.svg";
import RockPaperScissorLizardSpockSVG from "../assets/images/logo/logo-bonus.svg";

import Modal from "./Modal";
import RockPaperScissorLizardSpock from "./Games/RockPaperScissorLizardSpock";
import RockPaperScissor from "./Games/RockPaperScissor";
import { GameType } from "../types";

export default function App() {
    const [gameType, setGameType] = useState<GameType>("rock-paper-scissors");
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);

    const scoreIncrementer = () => setScore(prevScore => prevScore + 1);

    const gameChangingButtonClickHandler: MouseEventHandler<
        HTMLButtonElement
    > = () =>
        setGameType(prevState =>
            prevState === "rock-paper-scissors"
                ? "rock-paper-scissor-spock-lizard"
                : "rock-paper-scissors"
        );

    const modalToggleHandler: MouseEventHandler<HTMLButtonElement> = () =>
        setShowModal(prevState => !prevState);

    return (
        <>
            {showModal && (
                <Modal gameType={gameType} onModalClose={modalToggleHandler} />
            )}
            <section className="h-screen bg-gradient-to-b from-[hsl(214,47%,23%)] to-[hsl(237,49%,15%)] font-primary text-white">
                <main className="container mx-auto flex h-full max-w-6xl flex-col justify-between p-8">
                    <header className="flex justify-between rounded-lg border-4 border-gray-500 p-4">
                        <button onClick={gameChangingButtonClickHandler}>
                            <img
                                className={"ml-4 h-16 lg:h-28 xl:h-32"}
                                src={
                                    gameType === "rock-paper-scissors"
                                        ? RockPaperScissorSVG
                                        : RockPaperScissorLizardSpockSVG
                                }
                                alt="game title"
                                title={"Click here to change game"}
                            />
                        </button>
                        {/* Score Meter */}
                        <article className="grid h-20 w-20 place-content-center rounded-lg bg-slate-50 px-6 py-2 text-center font-bold lg:h-28 lg:w-28 xl:h-32 xl:w-32">
                            <p className="text-xs uppercase tracking-widest text-score-text lg:text-base">
                                SCORE
                            </p>
                            <p className="text-4xl text-dark-text lg:text-7xl">
                                {score}
                            </p>
                        </article>
                    </header>
                    {gameType === "rock-paper-scissors" ? (
                        <RockPaperScissor
                            gameType={gameType}
                            onScoreIncrease={scoreIncrementer}
                        />
                    ) : (
                        <RockPaperScissorLizardSpock
                            gameType={gameType}
                            onScoreIncrease={scoreIncrementer}
                        />
                    )}
                    <footer className={"text-center lg:text-right"}>
                        <button
                            className="rounded-lg border-2 border-white px-12 py-2 text-lg font-semibold uppercase tracking-widest transition hover:bg-[rgba(0,0,0,0.2)]"
                            onClick={modalToggleHandler}
                        >
                            RULES
                        </button>
                    </footer>
                </main>
            </section>
        </>
    );
}
