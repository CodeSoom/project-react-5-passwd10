import { collection, getDocs } from 'firebase/firestore';

import firestore from '../../firebase/clientApp';

interface Post {
  id: string;
  content: string;
  title: string;
}

interface Props {
  posts: Post[]
}

export default function HomePage({ posts }: Props) {
  return (
    <div>
      <h1>환영합니다</h1>
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            제목:
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const querySnapshot = await getDocs(collection(firestore, 'posts'));
  const posts: Post[] = [];

  if (!querySnapshot) {
    return {
      notFound: true,
    };
  }

  querySnapshot.forEach((doc) => {
    const post: Post = {
      id: doc.id,
      content: doc.data().content,
      title: doc.data().title,
    };

    posts.push(post);
  });

  return {
    props: {
      posts,
    },
  };
}
