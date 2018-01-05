import React from 'react';
import styles from './MainLayout.scss';
import Building from '../Building';

function MainLayout({ header, children, footer, location, isBuilding }) {
  const building = isBuilding ? (<Building></Building>) : '';
  return (
    <div className={styles.wraper}>
      <div className={`${styles.content} ${isBuilding ? styles.building : ''}`}>
        {header}
        <div className={styles.content}>
          <div className={styles.main}>
            {children}
          </div>
        </div>
      </div>
      {building}
      <div className={styles.footer}>
        {footer}
      </div>
    </div>
  );
}

export default MainLayout;
