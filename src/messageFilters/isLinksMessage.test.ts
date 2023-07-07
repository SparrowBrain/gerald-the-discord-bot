import isLinksMessage from './isLinksMessage';

describe('isLinksMessage', () => {
  it('should be true when phrase contains "links"', () => {
    const message = { content: 'Show me all your links!' };
    expect(isLinksMessage(message)).toBe(true);
  });

  it('should be false when phrase contains no links keywords', () => {
    const message = { content: 'Have you seen the Matrix?' };
    expect(isLinksMessage(message)).toBe(false);
  });
});
