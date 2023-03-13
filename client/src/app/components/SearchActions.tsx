import { InputGroup, Icon } from "@blueprintjs/core";
import { FC, ChangeEvent } from "react";

interface SearchActionsProps {
    valueSearch: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearcActions: FC<SearchActionsProps> = ({
    valueSearch,
    handleChange,
}) => {
    return (
        <div className="action__search">
            <InputGroup
                asyncControl={true}
                leftIcon="search"
                type="text"
                value={valueSearch}
                onChange={handleChange}
            />
        </div>
    );
};

export default SearcActions;
