import ColumnLayout from '@/layouts/ColumnLayout/ColumnLayout';
import { useParams } from 'react-router';

export default function MoviePage() {
  const { id } = useParams();

  return (
    <ColumnLayout>
      Movie Page
      {' '}
      {id}
    </ColumnLayout>
  );
}
