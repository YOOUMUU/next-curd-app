import { ReactNode } from 'react';

interface Props {
  title: string;
  created: string;
  children: ReactNode;
}

const Card = ({ title, created, children }: Props) => {
  return (
    <div className="min-h-full flex flex-col justify-between rounded p-3 border border-gray-200 bg-gray-50 shadow-lg shadow-gray-100	">
      <div>
        <h3 className="text-xl font-bold pb-2">{title}</h3>
        <h5 className="text-md pb-4">{children}</h5>
      </div>
      <p className=" text-md text-gray-400">{created}</p>
    </div>
  );
};

export default Card;
