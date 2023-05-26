import ButtonInPage from '@components/ButtonInPage';
import Card from '@components/Card';
import { Note } from '@entities/Note';
import Link from 'next/link';

const getNotes = async () => {
  const res = await fetch(
    'http://127.0.0.1:8090/api/collections/notes/records',
    { cache: 'no-cache' }
  );
  const data = await res.json();

  return data?.items as Note[];
};

const NotePage = async () => {
  const notes = await getNotes();

  return (
    <div className="container">
      <div className="flex justify-between items-center">
        <h1 className="title">Notes</h1>
        <Link href="/create">
          <ButtonInPage type="button">Add</ButtonInPage>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-10">
        {notes?.map((note) => {
          return (
            <Link href={`/notes/${note.id}`}>
              <Card
                created={new Date(note.created).toLocaleString()}
                title={note.title}
                key={note.id}
              >
                {note.content}
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NotePage;
