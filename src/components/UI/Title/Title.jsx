import styles from './Title.module.scss';

function Title({
  children, level = 1,
}) {
  const Tag = `h${level}`;

  return <Tag className={styles['title']}>{children}</Tag>;
}

export default Title;
