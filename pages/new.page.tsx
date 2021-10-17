import { useState } from 'react';

export default function PostNewArticlePage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChangeTitle = (event) => {
    const { target: { value } } = event;
    setTitle(value);
  };

  const handleChangeContent = (event) => {
    const { target: { value } } = event;
    setContent(value);
  };

  return (
    <div>
      <h2>글 작성하기</h2>
      <form id="post-form">
        <div>
          <label htmlFor="post-title">
            제목
          </label>
          <input
            type="text"
            id="post-title"
            name="title"
            value={title}
            onChange={handleChangeTitle}
          />
        </div>
        <div>
          <label htmlFor="post-content">
            내용
          </label>
          <textarea
            id="post-content"
            name="content"
            value={content}
            onChange={handleChangeContent}
          />
        </div>
      </form>
      <button
        type="submit"
        form="post-form"
        onClick={handleSubmit}
      >
        게시하기
      </button>
    </div>
  );
}
