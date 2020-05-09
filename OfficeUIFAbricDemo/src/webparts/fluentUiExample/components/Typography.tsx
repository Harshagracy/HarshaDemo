import * as React from 'react';
import styles from './FluentUiExample.module.scss';

export default class TypographyExample extends React.Component<any, {}> {
  public render(): React.ReactElement<any> {
    return (
      <div>
        <span className={styles.fontxxl}>hello</span>
        <p className={styles.hebrew}>יהוה</p>
      </div>
    );
  }
} 