import { render } from '@testing-library/react';

import HomePage from '../index.page';

describe('HomePage', () => {
  it('renders "Hello World!"', () => {
    const { container } = render(<HomePage />);

    expect(container).toHaveTextContent('Hello World!');
  });
});
