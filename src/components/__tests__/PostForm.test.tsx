import { render, fireEvent } from '@testing-library/react';

import PostForm from '../PostForm';

describe('PostForm', () => {
  const handleChangeTitle = jest.fn();
  const handleChangeContent = jest.fn();

  beforeEach(() => {
    handleChangeContent.mockClear();
    handleChangeTitle.mockClear();
  });

  const renderPostForm = () => render((
    <PostForm
      title="제목"
      content="글 작성하기"
      formId="post-form"
      handleChangeTitle={handleChangeTitle}
      handleChangeContent={handleChangeContent}
    />
  ));

  it('renders title', () => {
    const { container } = renderPostForm();
    expect(container).toHaveTextContent('제목');
  });

  it('renders content', () => {
    const { container } = renderPostForm();
    expect(container).toHaveTextContent('글 작성하기');
  });

  it('listens handleChangeTitle change event', () => {
    const { getByLabelText } = renderPostForm();

    fireEvent.change(getByLabelText('제목'), { target: { value: '제목을 입력합니다' } });

    expect(handleChangeTitle).toBeCalled();
  });

  it('listens handleChangeContent change event', () => {
    const { getByLabelText } = renderPostForm();

    fireEvent.change(getByLabelText('내용'), { target: { value: '내용을 입력합니다' } });

    expect(handleChangeContent).toBeCalled();
  });
});
