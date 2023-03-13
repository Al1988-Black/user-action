import { FC } from "react";
import { Column, Table2, Cell } from "@blueprintjs/table";
import { HotkeysProvider } from "@blueprintjs/core";
import { IAction } from "../models/IAction";

interface ActionTableProps {
    actionList: IAction[];
}

const ActionsTable: FC<ActionTableProps> = ({ actionList }) => {
    const userCellRenderer = (rowIndex: number) => (
        <Cell>{actionList[rowIndex].userName}</Cell>
    );
    const actionCellRenderer = (rowIndex: number) => (
        <Cell>{actionList[rowIndex].action}</Cell>
    );
    const dateCellRenderer = (rowIndex: number) => (
        <Cell>{actionList[rowIndex].action_created_at}</Cell>
    );
    return (
        <HotkeysProvider>
            <div style={{ height: "1000px" }}>
                <Table2 numRows={actionList.length}>
                    <Column name="userName" cellRenderer={userCellRenderer} />
                    <Column name="action" cellRenderer={actionCellRenderer} />
                    <Column
                        name="action_created_at"
                        cellRenderer={dateCellRenderer}
                    />
                </Table2>
            </div>
        </HotkeysProvider>
    );
};

export default ActionsTable;
