import Icon from "./UI/Icon";
import ResultsProps from "../types/props/results-props";

export default function Results(props: ResultsProps): JSX.Element {
    return (
        <div className={"h-full"}>
            <div
                className={
                    "flex flex-wrap items-center justify-center gap-16 sm:justify-between sm:gap-0"
                }
            >
                <div
                    className={"z-2 relative flex flex-col items-center gap-6"}
                    aria-label={"your choice"}
                >
                    <div
                        className={`relative h-32 w-32 ${
                            props.resMsg.includes("win") && "winner"
                        }`}
                    >
                        <Icon disabled={true} {...props.userChoice} />
                    </div>
                    <p
                        className={
                            "z-2 relative text-center font-bold uppercase tracking-wider"
                        }
                    >
                        You picked
                    </p>
                </div>
                <div
                    className={"flex flex-col items-center gap-6"}
                    aria-label={"computer choice"}
                >
                    <div
                        className={`h-32 w-32 rounded-full bg-gradient-to-t ${
                            props.resMsg.includes("lose") && "winner"
                        }`}
                    >
                        {<Icon disabled={true} {...props.aiChoice} />}
                    </div>
                    <p
                        className={
                            "z-2 relative text-center font-bold uppercase tracking-wider"
                        }
                    >
                        The house Picked
                    </p>
                </div>
            </div>
            <div
                className={
                    "relative z-10 mt-20 flex flex-col gap-6 px-10 text-center uppercase"
                }
            >
                <h1 className={"text-5xl font-bold"}>{props.resMsg}</h1>
                <button
                    className={
                        "rounded-md bg-white py-5 text-lg font-semibold uppercase tracking-widest text-dark-text hover:bg-[rgba(255,255,255,0.8)]"
                    }
                    type={"button"}
                    onClick={props.onPlayAgainClicked}
                >
                    Play Again
                </button>
            </div>
        </div>
    );
}
