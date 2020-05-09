import * as React from 'react';
import styles from './FluentUiExample.module.scss';
import { PrimaryButton, Icon } from 'office-ui-fabric-react';

export default class IconExample extends React.Component<any, any> {
  constructor(props: any, state: any) {
    super(props);
    this.state = {
    }
  }

  public render(): React.ReactElement<any> {
    return (
      <div className="ms-Grid">
        <span className="ms-grid-row">
          <div className="ms-BrandIcon--icon96 ms-BrandIcon--word" />
          <div className="ms-BrandIcon--icon48 ms-BrandIcon--outlook" />
          <div className="ms-BrandIcon--icon48 ms-BrandIcon--access" />
          <div className="ms-BrandIcon--icon16 ms-BrandIcon--sharepoint" />
          <div className="ms-BrandIcon--icon48 ms-BrandIcon--project" />
        </span>
        <div>
          <Icon iconName="Globe" className="ms-Grid-col ms-u-sm2 " />
          <Icon iconName="Globe" className="ms-Grid-col ms-u-sm2" style={{fontSize:16}}/>
          <Icon iconName="Globe" className="ms-Grid-col ms-u-sm2" style={{color:"green"}}/>
          <Icon iconName="Globe" className="ms-Grid-col ms-u-sm2" style={{color:"red"}}/>

          <Icon iconName="Globe" className={"ms-Grid-col ms-u-sm2 "+styles.iconStyles} style={{fontSize:16}}/>
        </div>

      </div>
    );
  }
} 