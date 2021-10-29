import { GetStaticPropsContext } from 'next';

import { collection, getDocs } from 'firebase/firestore';

import firestore from '../../firebase/clientApp';

interface Props {
  postData: {
    title: string,
    content: string,
  }
}

export default function PostDetailPage({ postData }: Props) {
  const { title, content } = postData;

  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
    </>
  );
}

export async function getStaticPaths() {
  const querySnapshot = await getDocs(collection(firestore, 'posts'));

  if (!querySnapshot) {
    return {
      notFound: true,
    };
  }

  const paths = new Array(querySnapshot.size).fill('').map((_, i) => ({
    params: {
      id: String(i + 1),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { id } = context.params;

  const querySnapshot = await getDocs(collection(firestore, 'posts'));

  if (!querySnapshot) {
    return {
      notFound: true,
    };
  }

  let postData;

  querySnapshot.forEach((doc) => {
    if (doc.id === id) {
      postData = doc.data();
    }
  });

  return {
    props: {
      postData,
    },
  };
}
