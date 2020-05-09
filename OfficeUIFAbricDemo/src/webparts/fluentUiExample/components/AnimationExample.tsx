import * as React from 'react';
import styles from './FluentUiExample.module.scss';
import { PrimaryButton, ActionButton } from 'office-ui-fabric-react';

export default class AnimationExample extends React.Component<any, any> {
  constructor(props: any, state: any) {
    super(props);
    this.state = {
      rectClassName: styles.rect
    }
  }
  private rotate90deg = () => {
    this.setState({
      rectClassName: styles.rect + "  ms-rotate90deg"
    });
  }
  private slideDownOut10 = () => {
    this.setState({
      rectClassName: styles.rect + "  ms-slideDownOut10"
    });
  }
  private fadeIn500 = () => {
    this.setState({
      rectClassName: styles.rect + "  ms-fadeIn500"
    });
  }
  private fadeOut500 = () => {
    this.setState({
      rectClassName: styles.rect + "  ms-fadeOut500"
    });
  }
  private slideLeftIn400 = () => {
    this.setState({
      rectClassName: styles.rect + "  ms-slideLeftIn400"
    });
  }
  private reset = () => {
    this.setState({
      rectClassName: styles.rect 
    });
  }
  public render(): React.ReactElement<any> {
    return (
      <React.Fragment >
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm6 ">
            <div className={this.state.rectClassName}>
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