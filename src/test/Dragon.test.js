import Dragon from './__mock__/dragonSlice';

describe('Dragon must pass test', () => {
  test('Fetch Dragon must return data', () => {
    expect(Dragon.fetchDragon()).toBeDefined();
  });
  test('Fetch dragon return value length must be', () => {
    expect(Dragon.fetchDragon()).toHaveLength(2);
  });
  test('Fetch dragon return name to be', () => {
    expect(Dragon.fetchDragon()[0].name).toBe('Dragon 1');
  });
});
