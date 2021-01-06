import isSubsMessage from './isSubsMessage'

describe('isSubsMessage', () => {
    it('should be true when phrase contains "subs"', () => {
        const message = { content: 'How many subs do you have?' }
        expect(isSubsMessage(message)).toBe(true);
    });

    it('should be false when phrase contains no subs keywords', () => {
        const message = { content: 'Have you seen the Matrix?' }
        expect(isSubsMessage(message)).toBe(false);
    });
});

