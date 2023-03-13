import { MenuItem } from "@blueprintjs/core";
import { ItemPredicate, ItemRenderer } from "@blueprintjs/select";
import { IAction } from "./models/IAction";

export const renderAction: ItemRenderer<IAction> = (
    actionItem,
    { handleClick, modifiers, query }
) => {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    const text = `${actionItem.userName}. ${actionItem.action}`;
    return (
        <MenuItem
            active={modifiers.active}
            disabled={modifiers.disabled}
            label={actionItem.action_created_at}
            key={actionItem._id}
            onClick={handleClick}
            text={highlightText(text, query)}
        />
    );
};

export const filterAction: ItemPredicate<IAction> = (query, actionItem) => {
    return (
        `${actionItem.userName.toLowerCase()}. ${actionItem.action.toLowerCase()} ${
            actionItem.action_created_at
        }`.indexOf(query.toLowerCase()) >= 0
    );
};

function highlightText(text: string, query: string) {
    let lastIndex = 0;
    const words = query
        .split(/\s+/)
        .filter((word) => word.length > 0)
        .map(escapeRegExpChars);
    if (words.length === 0) {
        return [text];
    }
    const regexp = new RegExp(words.join("|"), "gi");
    const tokens: React.ReactNode[] = [];
    while (true) {
        const match = regexp.exec(text);
        if (!match) {
            break;
        }
        const length = match[0].length;
        const before = text.slice(lastIndex, regexp.lastIndex - length);
        if (before.length > 0) {
            tokens.push(before);
        }
        lastIndex = regexp.lastIndex;
        tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
    }
    const rest = text.slice(lastIndex);
    if (rest.length > 0) {
        tokens.push(rest);
    }
    return tokens;
}

function escapeRegExpChars(text: string) {
    return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
