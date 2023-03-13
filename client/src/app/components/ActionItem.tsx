import { FC } from "react";
import { IAction } from "../models/IAction";

interface ActionItemProps {
    actionUser: IAction;
}

const ActionItem: FC<ActionItemProps> = ({ actionUser }) => {
    return (
        <div className="action">
            {actionUser.userName} - {actionUser.action} -{" "}
            {actionUser.action_created_at}
        </div>
    );
};

export default ActionItem;
