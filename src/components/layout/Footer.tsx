import Props from "../../types/default-props";
import React, { useState } from "react";
import { RuleModal } from "../modals/RuleModal";
import ReactDOM from "react-dom";

export default function Footer(props: Props): JSX.Element {
    const [showRuleModal, setShowRuleModal] = useState<boolean>(false);

    function hideRuleModal() {
        setShowRuleModal(false);
    }

    function ruleBtnClickHandler() {
        setShowRuleModal(prevState => !prevState);
    }

    return (
        <footer className={`text-center  ${props.className}`}>
            {showRuleModal &&
                ReactDOM.createPortal(
                    <RuleModal onExit={hideRuleModal} />,
                    document.getElementById("modal") as HTMLElement
                )}
            <button
                className={
                    "mb-4 rounded-lg border-2 py-2 px-9 text-lg font-[600] uppercase tracking-widest transition-all hover:scale-110"
                }
                onClick={ruleBtnClickHandler}
            >
                rules
            </button>
            <div className="fixed bottom-0 mx-auto text-center text-sm">
                Challenge by{" "}
                <a
                    className={"text-score-text underline"}
                    href="https://www.frontendmentor.io?ref=challenge"
                    target="_blank"
                >
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a
                    className={
                        "bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-center text-score-text text-transparent underline transition-all duration-500 hover:font-bold hover:uppercase"
                    }
                    href="#"
                >
                    Ujjwal Garg
                </a>
                .
            </div>
        </footer>
    );
}
