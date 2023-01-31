export default class Dragon {
  static fetchDragon() {
    const response = {
      data: [
        {
          id: 1,
          name: 'Dragon 1',
          type: 'capsule',
          reserved: false,
        },
        {
          id: 2,
          name: 'Dragon 2',
          type: 'capsule',
          reserved: false,
        },
      ],
    };
    return response.data;
  }
}
