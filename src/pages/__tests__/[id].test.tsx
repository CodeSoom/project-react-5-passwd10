import { render } from '@testing-library/react';

import PostDetailPage from '../[id].page';

describe('PostDetailPage', () => {
  it('renders "hi!"', () => {
    const { container } = render(<PostDetailPage postData="hi" />);

    expect(container).toHaveTextContent('hi');
  });
});
