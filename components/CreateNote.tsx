'use client';

import { FormEvent, useState } from 'react';
import ButtonInPage from './ButtonInPage';
import { useRouter } from 'next/navigation';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const router = useRouter();

  const create = async (e: FormEvent) => {
    e.preventDefault();

    await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });

    router.refresh();
    router.push('/notes');
  };

  return (
    <form className="flex flex-col" onSubmit={create}>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-gray-700 mb-1"
        >
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          type="text"
          placeholder="Input your title."
          required
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded sm:text-md focus:ring-1"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="content"
          className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-md font-medium text-gray-700 mb-1"
        >
          Content
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          name="content"
          placeholder="Input your content."
          rows={5}
          required
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded sm:text-md focus:ring-1"
        />
      </div>
      <ButtonInPage type="submit">Submit</ButtonInPage>
    </form>
  );
};

export default CreateNote;
