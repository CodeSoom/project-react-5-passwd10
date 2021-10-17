export default function PostDetailPage({ postData }) {
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
