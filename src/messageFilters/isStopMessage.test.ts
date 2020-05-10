import isStopMessage from './isStopMessage'

describe('isStopMessage', () => {
    it('should be true when phrase contains "stop"', () => {
        const message = { content: 'stop this nonsense!' }
        expect(isStopMessage(message)).toBe(true);
    });

    it('should be false when phrase contains no stopping keywords', () => {
        const message = { content: 'Have you seen the Matrix?' }
        expect(isStopMessage(message)).toBe(false);
    });
});

