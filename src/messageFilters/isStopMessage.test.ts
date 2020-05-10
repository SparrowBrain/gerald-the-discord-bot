import isStopMessage from './isStopMessage'

describe('isStopMessage', () => {
    it('should be true when phrase contains "stop"', () => {
        const message = { Content: 'stop this nonsense!' }
        expect(isStopMessage(message)).toBe(true);
    });

    it('should be false when phrase contains no stopping keywords', () => {
        const message = { Content: 'Have you seen the Matrix?' }
        expect(isStopMessage(message)).toBe(false);
    });
});

