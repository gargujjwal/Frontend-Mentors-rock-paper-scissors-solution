import triangle from "../assets/images/bg-triangle.svg";
import Icon from "./UI/Icon";
import { icons } from "../data";
import { MouseEvent } from "react";

export type UserTurnProps = {
    onUserClick: (e: MouseEvent<HTMLButtonElement>) => void;
};
export default function UserTurn(props: UserTurnProps) {
    return (
        <div className={"relative grid grid-cols-2 place-content-center gap-8"}>
            <img
                className={"absolute top-[20%] left-[11%] w-[75%] object-cover"}
                src={triangle}
                alt="triangle"
            />
            {icons.map(icon => (
                <Icon
                    key={icon.id}
                    disabled={false}
                    onClick={props.onUserClick}
                    {...icon}
                />
            ))}
        </div>
    );
}
