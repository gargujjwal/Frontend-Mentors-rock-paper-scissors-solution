import { ActionButton } from "../ActionButton";
import { useState } from "react";
import { Game, HandSign } from "../../types";
import Result from "../Result";

export default function RockPaperScissorLizardSpock({
    gameType,
    onScoreIncrease,
}: Game) {
    const [userChoice, setUserChoice] = useState<HandSign | "">("");
    const userChoiceChangeHandler = (chosenHandSign: HandSign) => {
        setUserChoice(chosenHandSign);
    };

    const gameResetHandler = () => setUserChoice("");

    return userChoice === "" ? (
        <main className="relative mx-auto flex max-w-md flex-wrap justify-center bg-pentagon  bg-[length:270px] bg-center bg-no-repeat transition md:scale-125 md:bg-[length:300px] lg:bg-[length:330px] xl:scale-150">
            <div className="w-full text-center">
                <ActionButton
                    size={"sm"}
                    icon={"scissors"}
                    onBtnClick={userChoiceChangeHandler}
                />
            </div>
            <div className="relative -top-2 mb-3 flex w-full justify-between md:w-[99%]">
                <ActionButton
                    size={"sm"}
                    icon={"paper"}
                    onBtnClick={userChoiceChangeHandler}
                />
                <ActionButton
                    size={"sm"}
                    icon={"spock"}
                    onBtnClick={userChoiceChangeHandler}
                />
            </div>
            <div className={"flex w-full justify-evenly"}>
                <ActionButton
                    size={"sm"}
                    icon={"lizard"}
                    onBtnClick={userChoiceChangeHandler}
                />
                <ActionButton
                    size={"sm"}
                    icon={"rock"}
                    onBtnClick={userChoiceChangeHandler}
                />
            </div>
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
