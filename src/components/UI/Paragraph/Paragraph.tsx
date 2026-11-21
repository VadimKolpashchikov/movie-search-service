import cn from 'classnames';
import styles from './Paragraph.module.scss';
import type { ParagraphProps } from './Paragraph.props';

function Paragraph({
  children, size = 'l', ...props
}: ParagraphProps) {
  return (
    <p {...props} className={cn(styles['paragraph'], styles[`paragraph_size-${size}`])}>
      {children}
    </p>
  );
}

export default Paragraph;
