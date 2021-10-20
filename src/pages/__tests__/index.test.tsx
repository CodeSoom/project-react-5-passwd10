import { render } from '@testing-library/react';

import HomePage from '../index.page';

describe('HomePage', () => {
  const renderHomePage = () => render(<HomePage
    posts={[
      {
        id: '0',
        content: '반갑습니다',
        title: '첫번째 글 입니다',
      },
      {
        id: '1',
        content: '별로 안반갑습니다',
        title: '두번째 글 입니다',
      },
    ]}
  />);

  it('renders home title', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('환영합니다');
  });

  it('renders titles of article lists', () => {
    const { container } = renderHomePage();

    expect(container).toHaveTextContent('첫번째 글 입니다');
    expect(container).toHaveTextContent('두번째 글 입니다');
  });
});
