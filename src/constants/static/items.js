export const items = [
  {
    id: 1,
    // image: { src: 'https://js.cx/gallery/img1-lg.jpg' },
    image: { src: 'dist/images/img1-lg.jpg' },
    title: 'First title',
    text: {
      post:
      `Here is the post for a TextBox. Here is the post for a TextBox.
      Here is the post for a TextBox. Here is the post for a TextBox.
      Here is the post for a TextBox. Here is the post for a TextBox.
      Here is the post for a TextBox. Here is the post for a TextBox.`
    },
    meta: {
      author: 'Ivan Ivanich',
      createdAt: '2016-12-29T10:53:54.000Z',
      // updatedAt: '2016-12-29T10:53:54.000Z',
      count: 5
    }
  },
  {
    id: 2,
    image: {
      src: 'dist/images/img6-lg.jpg',
      width: '300px',
      height: '240px'
    },
    title: 'Second title',
    text: { post: 'Second post for a TextBox' },
    meta: {
      createdAt: '2016-12-29T10:53:54.000Z',
      updatedAt: '2016-12-29T10:53:54.000Z',
      count: 7
    }
  },
  {
    id: 3,
    image: { },
    title: 'Third post',
    text: { },
    meta: {
      author: 'Ivan Ivanich',
      createdAt: '2016-12-29T10:53:54.000Z',
      updatedAt: '2016-12-29T10:53:54.000Z',
      count: 13
    }
  }
];
