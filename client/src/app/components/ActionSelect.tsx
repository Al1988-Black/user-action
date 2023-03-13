import { FC, useState } from "react";
import { Button, MenuItem } from "@blueprintjs/core";
import { Select2 } from "@blueprintjs/select";
import { filterAction, renderAction } from "../actions";
import { IAction } from "../models/IAction";

const ActionSelect = Select2<IAction>;

interface SelectActionProps {
    actionList: IAction[];
}

export const SelectAction: FC<SelectActionProps> = ({ actionList }) => {
    const [actionItem, setAction] = useState<IAction>(actionList[0]);
    return (
        <ActionSelect
            items={actionList}
            itemPredicate={filterAction}
            itemRenderer={renderAction}
            noResults={<MenuItem disabled={true} text="No results." />}
            onItemSelect={setAction}
            className="film-select"
            fill={true}
        >
            <Button
                text={actionItem.userName + " " + actionItem.action}
                rightIcon="caret-down"
            />
        </ActionSelect>
    );
};
