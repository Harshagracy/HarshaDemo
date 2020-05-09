import * as React from 'react';
import styles from './FluentUiExample.module.scss';

export default class GridExample extends React.Component<any, {}> {
  public render(): React.ReactElement<any> {
    return (
      <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm1 block">1</div>
          <div className="ms-Grid-col ms-u-sm1 block">1</div>
          <div className="ms-Grid-col ms-u-sm1 block">1</div>
          <div className="ms-Grid-col ms-u-sm1 block">1</div>
          <div className="ms-Grid-col ms-u-sm1 block">1</div>
          <div className="ms-Grid-col ms-u-sm1 block">1</div>
          <div className="ms-Grid-col ms-u-sm1 block">1</div>
          <div className="ms-Grid-col ms-u-sm1 block">1</div>
          <div className="ms-Grid-col ms-u-sm1 block">1</div>
          <div className="ms-Grid-col ms-u-sm1 block">1</div>
          <div className="ms-Grid-col ms-u-sm1 block">1</div>
          <div className="ms-Grid-col ms-u-sm1 block">1</div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm2 block">2</div>
          <div className="ms-Grid-col ms-u-sm2 block">2</div>
          <div className="ms-Grid-col ms-u-sm2 block">2</div>
          <div className="ms-Grid-col ms-u-sm2 block">2</div>
          <div className="ms-Grid-col ms-u-sm2 block">2</div>
          <div className="ms-Grid-col ms-u-sm2 block">2</div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm3 block">3</div>
          <div className="ms-Grid-col ms-u-sm3 block">3</div>
          <div className="ms-Grid-col ms-u-sm3 block">3</div>
          <div className="ms-Grid-col ms-u-sm3 block">3</div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm4 block">4</div>
          <div className="ms-Grid-col ms-u-sm4 block">4</div>
          <div className="ms-Grid-col ms-u-sm4 block">4</div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm6 block">6</div>
          <div className="ms-Grid-col ms-u-sm6 block">6</div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm12 block">12</div>
        </div>
      </div>

    );
  }
} 