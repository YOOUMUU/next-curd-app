import { Note } from '@entities/Note';

interface Props {
  params: { id: string };
}

const getNote = async (noteId: string) => {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    { next: { revalidate: 10 } }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  return data as Note;
};

const NoteDetailPage = async ({ params }: Props) => {
  const note = await getNote(params.id);

  return (
    <div className="container">
      <h3 className="text-gray-500 font-light">
        <a className="hover:text-gray-950" href="/notes">
          notes
        </a>{' '}
        / {note.title}
      </h3>
      <h1 className="title">{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteDetailPage;
