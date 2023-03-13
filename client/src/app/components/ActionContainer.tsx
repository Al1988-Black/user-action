import { useState, useEffect, ChangeEvent } from "react";
import { Spinner } from "@blueprintjs/core";
import { actionAPI } from "../services/ActionService";
import ActionsTable from "./ActionTable";
import { SelectAction } from "./ActionSelect";
import SearcActions from "./SearchActions";
// import formatUserNumber from "../utils/formatUserNumber"; // использовал для создания actions db

const ActionContainer = () => {
    const {
        data: actions,
        error,
        isLoading,
    } = actionAPI.useFetchAllActionQuery(1000);

    const [searchActions, setSearchActions] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchActions(event.target.value);
    };

    const filterActions =
        searchActions.length &&
        actions &&
        actions.filter(
            (actionItem) =>
                `${actionItem.userName.toLowerCase()}. ${actionItem.action.toLowerCase()} ${
                    actionItem.action_created_at
                }`.indexOf(searchActions.toLowerCase()) >= 0
        );

    // const [createAction, {}] = actionAPI.useCreateActionMutation(); // использовал для создания actions db

    // const createAllActions = async () => {
    //     for (let index = 1; index <= 334; index++) {
    //         const indexUser = formatUserNumber(index);
    //         await createAction({
    //             userName: indexUser,
    //             action: "logged_in",
    //         } as IAction);
    //         await createAction({
    //             userName: indexUser,
    //             action: "button_sign_in_tapped",
    //         } as IAction);
    //         await createAction({
    //             userName: indexUser,
    //             action: "button_log_out_tapped",
    //         } as IAction);
    //     }
    // };
    return (
        <div>
            {/* <button onClick={createAllActions}>create actions</button> */}

            <div className="action__list">
                {isLoading && <Spinner intent="primary" size={100} />}
                {error && <h1>Произошла ошибка при загрузке данных</h1>}
                {actions && actions.length ? (
                    <>
                        <SelectAction actionList={actions} />
                        <SearcActions
                            valueSearch={searchActions}
                            handleChange={handleChange}
                        />

                        <ActionsTable actionList={filterActions || actions} />
                    </>
                ) : (
                    "Actions users not found"
                )}
            </div>
        </div>
    );
};

export default ActionContainer;
