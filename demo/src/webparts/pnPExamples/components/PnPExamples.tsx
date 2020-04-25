import * as React from 'react';
import styles from './PnPExamples.module.scss';
import { IPnPExamplesProps } from './IPnPExamplesProps';
import DisplayOrders from './DisplayOrders';
import DisplayProduct from './DisplayProduct';

export default class PnPExamples extends React.Component<IPnPExamplesProps, {}> {
  public render(): React.ReactElement<IPnPExamplesProps> {
    return (
      <span>
        <h1>PnP JS Examples</h1>
        {/* <DisplayOrders /> */}
        <DisplayProduct context={this.props.context}/>
      </span>
    );
  }
}
