import { MouseEvent } from 'react';

interface Props {
  handleSubmit: (event: MouseEvent) => void;
  form: string;
}

export default function SubmitButton({ handleSubmit, form }: Props) {
  return (
    <button
      type="submit"
      form={form}
      onClick={handleSubmit}
    >
      게시하기
    </button>
  );
}
