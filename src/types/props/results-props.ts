import { Icon } from "./icon-prop";

type Results = {
    userChoice: Icon;
    aiChoice: Icon;
    resMsg: string;
    onPlayAgainClicked: () => void;
};
export default Results;
