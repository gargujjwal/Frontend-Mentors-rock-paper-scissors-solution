import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { useState } from "react";
import Game from "../types/game-type";

export default function App() {
    const [historyOfGame, setHistoryOfGame] = useState<Game[]>([]);
    const [scoreUser, setScoreUser] = useState<number>(0);

    function addGame(match: Game): void {
        setHistoryOfGame(prevState => {
            setScoreUser(prevState => prevState + (match.userWon ? 1 : 0));
            return [...prevState, match];
        });
    }

    return (
        <div
            className={
                "flex h-screen flex-col justify-between bg-gradient-to-b from-[hsl(214,47%,23%)] to-[hsl(237,49%,15%)] p-9 text-white"
            }
        >
            <Header score={scoreUser} />
            <Main onGameComplete={addGame} />
            <Footer />
        </div>
    );
}
