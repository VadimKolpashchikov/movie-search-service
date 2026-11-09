import styles from './Title.module.scss';
import type { TitleProps } from './Title.props';

function Title({
  children, level = 1,
}: TitleProps) {
  const Tag = `h${level}` as `h${Required<TitleProps>['level']}`;

  return <Tag className={styles['title']}>{children}</Tag>;
}

export default Title;
