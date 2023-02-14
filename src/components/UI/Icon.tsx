import IconProp from "../../types/props/icon-prop";

export default function Icon(props: IconProp): JSX.Element {
    return (
        <button
            className={`group last:col-span-2 last:mx-auto hover:scale-110 ${props.classes}`}
            data-reactid={props.id}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            <div
                className={`relative grid h-32 w-32 place-content-center rounded-full bg-gradient-to-b p-3 ${props.bgColorClasses}`}
            >
                <div
                    className={
                        "grid place-content-center rounded-full bg-gray-200 p-[1.625rem] shadow-[inset_0_0.35rem_#00000026] group-hover:shadow-[inset_0_0rem_#00000026]"
                    }
                >
                    <img className={"h-10 w-10"} src={props.img} alt="rock" />
                </div>
            </div>
        </button>
    );
}
