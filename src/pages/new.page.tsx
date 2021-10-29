/* eslint-disable no-alert */
import { useState, MouseEvent, ChangeEvent } from 'react';

import {
  collection, getDocs, setDoc, doc,
} from 'firebase/firestore';

import firestore from '../../firebase/clientApp';

export default function PostNewArticlePage() {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const post = async ({ postTitle, postContent }: { postTitle: string, postContent: string}) => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'posts'));

      await setDoc(doc(firestore, 'posts', `${Number(querySnapshot.size) + 1}`), {
        title: postTitle,
        content: postContent,
      });

      alert('글을 성공적으로 등록했습니다');
    } catch (error) {
      alert('글을 등록하지 못했습니다');
    }
  };

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault();

    post({ postTitle: title, postContent: content });
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    setTitle(value);
  };

  const handleChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
