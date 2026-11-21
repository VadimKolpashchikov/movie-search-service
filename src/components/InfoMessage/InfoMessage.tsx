import Paragraph from '@/components/UI/Paragraph/Paragraph';
import Title from '@/components/UI/Title/Title';
import styles from './InfoMessage.module.scss';

export default function InfoMessage({ title, text }: { title?: string; text?: string }) {
  return (
    <div className={styles['info-message']}>
      <Title level={2}>{title}</Title>
      <Paragraph size="xl">{text}</Paragraph>
    </div>
  );
}
