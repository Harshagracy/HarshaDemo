import * as React from 'react';
import styles from './FluentUiExample.module.scss';

export default class Localisation extends React.Component<any, any> {
  public render(): React.ReactElement<any> {
    return (
      <React.Fragment>
        <p dir="rtl" className={styles.hebrew}>יהוה</p>
        <div lang='el-GR'>
          Καλημέρα
        </div>
        <div lang='hi-IN'>
          क्या चल रहा है
        </div>
      </React.Fragment>
    );
  }
} 