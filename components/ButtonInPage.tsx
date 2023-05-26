interface Props {
  type: 'button' | 'submit';
  children: string;
}

const ButtonInPage = ({ type, children }: Props) => {
  return (
    <button
      type={type}
      className="text-md py-2 px-3 bg-gray-950 text-white rounded"
    >
      {children}
    </button>
  );
};

export default ButtonInPage;
