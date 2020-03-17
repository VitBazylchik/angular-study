import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  const pipe = new OrderByPipe();
  const courses = [
    {
      id: 1,
      title: "TTTitle 1",
      creationDate: 1483223594094 - 100,
      duration: 100,
      description: "BLALBLALBA",
      topRated: false,
    },
    {
      id: 2,
      title: "Title 2",
      creationDate: 1483223594094 - 10**11,
      duration: 122,
      description: "BLALBLALBgsdgfdgdfhfghA",
      topRated: true,
    },
    {
      id: 3,
      title: "ETitle 3",
      creationDate: 1483223594094 - 10**10,
      duration: 96,
      description: "BLALBLALBgsdgfdgdfhfghA",
      topRated: false,
    }
  ];

  it('should return sorted by date courses array', () => {
    const sorted = [
      {
        id: 1,
        title: "TTTitle 1",
        creationDate: 1483223594094 - 100,
        duration: 100,
        description: "BLALBLALBA",
        topRated: false,
      },
      {
        id: 3,
        title: "ETitle 3",
        creationDate: 1483223594094 - 10**10,
        duration: 96,
        description: "BLALBLALBgsdgfdgdfhfghA",
        topRated: false,
      },
      {
        id: 2,
        title: "Title 2",
        creationDate: 1483223594094 - 10**11,
        duration: 122,
        description: "BLALBLALBgsdgfdgdfhfghA",
        topRated: true,
      },
    ];

    expect(pipe.transform(courses)).toEqual(sorted);
  })
});
