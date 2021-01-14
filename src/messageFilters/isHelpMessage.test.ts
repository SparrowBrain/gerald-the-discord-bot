import isHelpMessage from './isHelpMessage'

describe('isHelpMessage', () => {
    it('should be true when phrase contains "help"', () => {
        const message = { content: 'help me!' }
        expect(isHelpMessage(message)).toBe(true);
    });

    it('should be false when phrase contains no help keywords', () => {
        const message = { content: 'Have you seen the Matrix?' }
        expect(isHelpMessage(message)).toBe(false);
    });
});

