import isStartMessage from "./isStartMessage"

describe('isStartMessage', () => {
    it('should be true when phrase contains "start"', () => {
        const message = {content:'Let\'s start this!'}
        expect(isStartMessage(message)).toBe(true);
    });

    it('should be false when phrase contain no starting keywords', () => {
        const message = {content:'Hi, have a nice day!'}
        expect(isStartMessage(message)).toBe(false);
    });
});