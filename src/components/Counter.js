import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends Component {
  handleClick = e => {
    switch(e.target.name) {
      case 'INCREMENT':
        this.props.increment();
        break;
      case 'DECREMENT':
        this.props.decrement();
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <div className="counter">
        <p>Clicked<br />{this.props.count}<br />Times</p>
        <button name="INCREMENT" onClick={this.handleClick}>
          +
        </button>
        <button name="DECREMENT" onClick={this.handleClick}>
          -
        </button>
        <button name="ASYNC" onClick={this.handleClick}>
          ASYNC
        </button>
        <button name="IF_ODD" onClick={this.handleClick}>
          IFODD
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps, { increment, decrement })(Counter);
