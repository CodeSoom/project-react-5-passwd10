import { render } from '@testing-library/react';

import PostDetailPage from '../[id].page';

describe('PostDetailPage', () => {
  it('renders title', () => {
    const { container } = render(<PostDetailPage
      postData={{
        title: '제목',
        content: '',
      }}
    />);

    expect(container).toHaveTextContent('제목');
  });

  it('renders content', () => {
    const { container } = render(<PostDetailPage
      postData={{
        title: '',
        content: '내용',
      }}
    />);

    expect(container).toHaveTextContent('내용');
  });
});
