import * as React from 'react';
import styles from './FluentUiExample.module.scss';

export default class Colors extends React.Component<any, any> {
  public render(): React.ReactElement<any> {
    return (
      <React.Fragment>
        
        <div className={"ms-fontColor-teal"}>
          Color teal
        </div>
        <div className={"ms-fontColor-orange"}>
          Color orange
        </div>
        <div className={"ms-fontColor-blueMid"}>
          Color blueMid
        </div>
        <div className={"ms-fontColor-yellow"}>
          Color yellow
        </div>
      </React.Fragment>
    );
  }
} 