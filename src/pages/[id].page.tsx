interface Props {
  postData: string;
}

export default function PostDetailPage({ postData }: Props) {
  return (
    <>
      {postData}
    </>
  );
}

export async function getStaticPaths() {
  const paths = [{
    params: {
      id: '1',
    },
  }];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      postData: '',
    },
  };
}
