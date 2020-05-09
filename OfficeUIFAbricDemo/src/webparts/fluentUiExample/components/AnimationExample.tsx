import * as React from 'react';
import styles from './FluentUiExample.module.scss';
import { PrimaryButton, ActionButton } from 'office-ui-fabric-react';

export default class AnimationExample extends React.Component<any, any> {
  constructor(props: any, state: any) {
    super(props);
    this.state = {
      rectangleClassName: "rectangle"
    }
  }
  private rotate90deg = () => {
    this.setState({
      rectangleClassName: "rectangle" + "  ms-rotate90deg"
    });
  }
  private slideDownOut10 = () => {
    this.setState({
      rectangleClassName: "rectangle" + "  ms-slideDownOut10"
    });
  }
  private fadeIn500 = () => {
    this.setState({
      rectangleClassName: "rectangle" + "  ms-fadeIn500"
    });
  }
  private fadeOut500 = () => {
    this.setState({
      rectangleClassName: "rectangle" + "  ms-fadeOut500"
    });
  }
  private slideLeftIn400 = () => {
    this.setState({
      rectangleClassName: "rectangle" + "  ms-slideLeftIn400"
    });
  }
  private reset = () => {
    this.setState({
      rectangleClassName: "rectangle" 
    });
  }
  public render(): React.ReactElement<any> {
    return (
      <React.Fragment >
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm6 ">
            <div className={this.state.rectangleClassName}>
            </div>
          </div>
          <div className="ms-Grid-col ms-u-sm6">
            <div className="ms-Grid-row "><PrimaryButton text="rotate90deg" onClick={this.rotate90deg} /></div>
            <div className="ms-Grid-row "><PrimaryButton text="slideDownOut10" onClick={this.slideDownOut10} /></div>
            <div className="ms-Grid-row "><PrimaryButton text="fadeIn500" onClick={this.fadeIn500} /></div>
            <div className="ms-Grid-row "><PrimaryButton text="fadeOut500" onClick={this.fadeOut500} /></div>
            <div className="ms-Grid-row "><PrimaryButton text="slideLeftIn400" onClick={this.slideLeftIn400} /></div>
            <div className="ms-Grid-row ">
              <ActionButton iconProps={{ iconName: 'RevToggleKey' }} onClick={this.reset} >
                Reset Animation
              </ActionButton>
            </div>
          </div>
        </div>


      </React.Fragment>
    );
  }
} 