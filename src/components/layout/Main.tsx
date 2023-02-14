import Results from "../Results";
import UserTurn from "../UserTurn";
import { MouseEvent, useState } from "react";
import MainProps from "../../types/props/main-props";
import { Icon as IconInterface } from "../../types/props/icon-prop";
import Game from "../../types/game-type";
import { aiChoice, decideWinner } from "../../utils/RockPaperScissorGame";
import { icons } from "../../data";

function getResult(userChoice: IconInterface): [string, Game] {
    const aiPicked = aiChoice();
    let gameResult: Game = {
        aiChoice: aiPicked.id,
        usersChoice: userChoice.id,
        userWon: false,
    };

    let resultMessage: string = "You ";
    if (aiPicked.id === userChoice.id) {
        resultMessage = "Draw";
        gameResult = { ...gameResult, userWon: false };
    } else if (decideWinner(userChoice, aiPicked).id === userChoice.id) {
        resultMessage += "win";
        gameResult = { ...gameResult, userWon: true };
    } else {
        resultMessage += "lose";
        gameResult = { ...gameResult, userWon: false };
    }
    return [resultMessage, gameResult];
}

export default function Main(props: MainProps): JSX.Element {
    const [userChoice, setUserChoice] = useState<IconInterface>({
        altText: "",
        bgColorClasses: "",
        id: "",
        img: "",
        label: "",
    });
    const [aiChoice, setAiChoice] = useState<IconInterface>({
        altText: "",
        bgColorClasses: "",
        id: "",
        img: "",
        label: "",
    });
    const [rsgMsg, setRsgMsg] = useState<string>("");

    function resetUserChoice() {
        setUserChoice({
            altText: "",
            bgColorClasses: "",
            id: "",
            img: "",
            label: "",
        });
    }

    function userSelection(e: MouseEvent<HTMLButtonElement>): void {
        const {
            dataset: { reactid: id },
        } = e.currentTarget;
        const userChoiceIcon = icons.find(
            icon => icon.id === id
        ) as IconInterface;
        const [resultMsg, gameRes] = getResult(userChoiceIcon);

        setAiChoice(
            icons.find(icon => icon.id === gameRes.aiChoice) as IconInterface
        );
        setRsgMsg(resultMsg);
        setUserChoice(userChoiceIcon);
        props.onGameComplete(gameRes);
    }

    return (
        <main className={"mt-20 mb-16 flex-grow"}>
            {userChoice.id === "" ? (
                <UserTurn onUserClick={userSelection} />
            ) : (
                <Results
                    userChoice={userChoice}
                    aiChoice={aiChoice}
                    resMsg={rsgMsg}
                    onPlayAgainClicked={resetUserChoice}
                />
            )}
        </main>
    );
}
