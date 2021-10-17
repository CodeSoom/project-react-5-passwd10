import { render } from '@testing-library/react';

import PostNewArticlePage from '../new.page';

describe('HomePage', () => {
  it('renders "글 작성하기"', () => {
    const { container } = render(<PostNewArticlePage />);

    expect(container).toHaveTextContent('글 작성하기');
  });

  it('renders "제목"', () => {
    const { container } = render(<PostNewArticlePage />);

    expect(container).toHaveTextContent('제목');
  });

  it('renders "내용"', () => {
    const { container } = render(<PostNewArticlePage />);

    expect(container).toHaveTextContent('내용');
  });

  it('renders "게시하기"', () => {
    const { container } = render(<PostNewArticlePage />);

    expect(container).toHaveTextContent('게시하기');
  });
});
