import { FindPipe } from './find.pipe';
import { Course } from 'src/app/models/course';

describe('FindPipe', () => {
  const pipe = new FindPipe();
  const courses: Course[] = [
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
  ]

  it('should filter courses using an input text', () => {
    const input = 'title';
    const expectedList = [
      {
        id: 2,
        title: "Title 2",
        creationDate: 1483223594094 - 10**11,
        duration: 122,
        description: "BLALBLALBgsdgfdgdfhfghA",
        topRated: true,
      },
    ]
    expect(pipe.transform(courses, input)).toEqual(expectedList);
  })

});
