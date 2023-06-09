import { ActionButton } from "../ActionButton";
import { Game, HandSign } from "../../types";
import Result from "../Result";
import { useState } from "react";

export default function RockPaperScissor({ gameType, onScoreIncrease }: Game) {
    const [userChoice, setUserChoice] = useState<HandSign | "">("");

    const userChoiceChangeHandler = (chosenHandSign: HandSign) =>
        setUserChoice(chosenHandSign);

    const gameResetHandler = () => setUserChoice("");

    return userChoice === "" ? (
        <main className="relative mx-auto flex max-w-md flex-wrap justify-center gap-16 bg-triangle bg-[length:250px] bg-center bg-no-repeat transition md:scale-125 xl:scale-150">
            {(["paper", "scissors", "rock"] as HandSign[]).map(
                (handSign, i) => (
                    <ActionButton
                        key={i}
                        icon={handSign}
                        onBtnClick={userChoiceChangeHandler}
                    />
                )
            )}
        </main>
    ) : (
        <Result
            playerChosenSign={userChoice}
            gameType={gameType}
            scoreIncrementer={onScoreIncrease}
            onGameReset={gameResetHandler}
        />
    );
}
