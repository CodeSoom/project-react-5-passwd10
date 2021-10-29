/* eslint-disable no-alert */
import { useState, MouseEvent, ChangeEvent } from 'react';

import {
  collection, getDocs, setDoc, doc,
} from 'firebase/firestore';

import firestore from '../../firebase/clientApp';

import PostForm from '../components/PostForm';
import SubmitButton from '../components/SubmitButton';

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
      <PostForm
        title={title}
        content={content}
        formId="post-form"
        handleChangeTitle={handleChangeTitle}
        handleChangeContent={handleChangeContent}
      />
      <SubmitButton
        form="post-form"
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
