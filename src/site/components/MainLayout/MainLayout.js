import React from 'react';
import styles from './MainLayout.scss';

function MainLayout({ header, children, footer, location }) {
  return (
    <div className={styles.wraper}>
      <div className={styles.content}>
        {header}
        <div className={styles.content}>
          <div className={styles.main}>
            {children}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        {footer}
      </div>
    </div>
  );
}

export default MainLayout;
