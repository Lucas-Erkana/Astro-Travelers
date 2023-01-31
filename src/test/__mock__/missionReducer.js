export default class Mission {
  static fetchMission() {
    const response = {
      data: [
        {
          id: 1,
          name: 'Tally',
          description: 'Life of man depends on him',
          reserved: false,
        },
        {
          id: 2,
          name: 'Commit is key to success',
          description: 'Never give up on your dream',
          reserved: false,
        },
        {
          id: 3,
          name: 'Just Believe',
          description: 'Nobody else will do it for you',
          reserved: false,
        },
      ],
    };
    return response.data;
  }
}
