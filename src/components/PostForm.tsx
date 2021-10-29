import { ChangeEvent } from 'react';

interface Props {
  title: string;
  content: string;
  formId: string;
  handleChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  handleChangeContent: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function PostForm({
  title, content, formId, handleChangeTitle, handleChangeContent,
}: Props) {
  return (
    <form id={formId}>
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
  );
}
