import React, {Component} from 'react';
import classnames from 'classnames';

import styles from './Button.scss';

let cx = classnames.bind(styles);

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
  }

  componentDidMount() {
    this.setState({change: this.props.change});
  }

  click() {
    this.setState({'active': !this.state.active});
    this.state.change(this.props.name, this.state.active);
  }

  render() {
    let classes = cx('Specialbutton', {active: this.state.active});
    return <button className={classes} onClick={this.click.bind(this)}>{this.props.name}</button>;
  }
}
