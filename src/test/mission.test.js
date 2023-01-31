import Mission from './__mock__/missionReducer';

describe('Mission must pass the test', () => {
  test('Fetch mission must return data', () => {
    expect(Mission.fetchMission()).toBeDefined();
  });
  test('Fetch mission return value length must be', () => {
    expect(Mission.fetchMission()).toHaveLength(3);
  });
  test('Fetch mission return name to be', () => {
    expect(Mission.fetchMission()[1].name).toBe('Commit is key to success');
  });
});
