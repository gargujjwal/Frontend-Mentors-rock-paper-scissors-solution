import HeaderProps from "../../types/props/header-props";
import logo from "../../assets/images/logo.svg";

export default function Header(props: HeaderProps): JSX.Element {
    return (
        <header
            className={
                "relative z-10 flex items-center justify-between gap-14 rounded-xl border-4 border-header-outline p-3"
            }
        >
            <div className={"p-3"}>
                <img
                    className={"h-full w-full object-cover"}
                    src={logo}
                    alt="logo"
                />
            </div>
            <div
                className={
                    "flex flex-col rounded-md bg-white px-6 py-2 text-center font-bold"
                }
            >
                <p
                    className={
                        "text-sm uppercase tracking-wide text-score-text"
                    }
                >
                    Score
                </p>
                <h2 className={"text-5xl text-dark-text"}>{props.score}</h2>
            </div>
        </header>
    );
}
