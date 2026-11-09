import cn from 'classnames';
import styles from './Title.module.scss';
import type { TitleProps } from './Title.props';

function Title({
  children, level = 1, className, ...props
}: TitleProps) {
  const Tag = `h${level}` as `h${Required<TitleProps>['level']}`;

  return (
    <Tag {...props} className={cn(styles['title'], className)}>
      {children}
    </Tag>
  );
}

export default Title;
