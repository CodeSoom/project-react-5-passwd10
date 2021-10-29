import { render, fireEvent } from '@testing-library/react';

import SubmitButton from '../SubmitButton';

describe('SubmitButton', () => {
  const handleSubmit = jest.fn();

  beforeEach(() => {
    handleSubmit.mockClear();
  });

  const renderSubmitButton = () => render((
    <SubmitButton
      form="post-id"
      handleSubmit={handleSubmit}
    />
  ));

  it('renders button', () => {
    const { container } = renderSubmitButton();

    expect(container).toHaveTextContent('게시하기');
  });

  it('listens click event', () => {
    const { getByText } = renderSubmitButton();

    fireEvent.click(getByText('게시하기'));

    expect(handleSubmit).toBeCalled();
  });
});
