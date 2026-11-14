import styles from './ColumnLayout.module.scss';

function ColumnLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className={styles['column-layout']}>
      {children}
    </div>
  );
}

export default ColumnLayout;
