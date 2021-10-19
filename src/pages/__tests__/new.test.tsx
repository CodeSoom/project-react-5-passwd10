import { render } from '@testing-library/react';

import PostNewArticlePage from '../new.page';

describe('HomePage', () => {
  it('renders title', () => {
    const { container } = render(<PostNewArticlePage />);

    expect(container).toHaveTextContent('글 작성하기');
  });

  it('renders title label', () => {
    const { container } = render(<PostNewArticlePage />);

    expect(container).toHaveTextContent('제목');
  });

  it('renders content label', () => {
    const { container } = render(<PostNewArticlePage />);

    expect(container).toHaveTextContent('내용');
  });

  it('renders submit button', () => {
    const { container } = render(<PostNewArticlePage />);

    expect(container).toHaveTextContent('게시하기');
  });
});
