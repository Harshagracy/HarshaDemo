import * as React from 'react';
import styles from './FluentUiExample.module.scss';

export default class ElevationExample extends React.Component<any, any> {
 
  public render(): React.ReactElement<any> {
    return (
      <React.Fragment>
      <div className={styles.rect}>
        Elevation
       </div>
      </React.Fragment>
    );
  }
} 