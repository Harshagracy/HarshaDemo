import * as React from 'react';
import styles from './FluentUiExample.module.scss';
import { IFluentUiExampleProps } from './IFluentUiExampleProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Typography from './Typography';
import AnimationExample from './AnimationExample';
import IconExample from './IconExample';
import ElevationExample from './Elevation';
import Localisation from './Localisation';
import Componentdemo from './Componentdemo';
import Colors from './Colors'
import Layouts from './Layouts';

export default class FluentUiExample extends React.Component<IFluentUiExampleProps, {}> {
  public render(): React.ReactElement<IFluentUiExampleProps> {
    return (
      <div className={styles.fluentUiExample}>
        {/* <Typography /> */}
        {/* <Colors /> */}
        {/* <Layouts /> */}
        {/* <AnimationExample /> */}
        {/* <IconExample /> */}
        {/* <ElevationExample /> */}
        {/* <Localisation /> */}
        <Componentdemo />
      </div>
    );
  }
}
