import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/new');
  };

  return (
    <div>
      Hello World!
      <button
        type="button"
        onClick={handleClick}
      >
        Go New Page
      </button>
    </div>
  );
}
