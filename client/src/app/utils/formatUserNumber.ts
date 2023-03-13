const formatUserNumber = (index: number): string => {
    if (index >= 1 && index < 10) {
        return `user-00${index}`;
    }
    if (index >= 10 && index < 100) {
        return `user-0${index}`;
    }
    return `user-${index}`;
};

export default formatUserNumber;
