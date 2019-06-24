import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTimeout from 'react-timeout';
import { increment, decrement } from '../actions';

class Counter extends Component {
  incrementAsync = _ => this.props.setTimeout(_ => this.props.increment(), 1000);

  incrementIfOdd = _ => this.props.count % 2 ? this.props.increment() : 0;
  
  handleClick = e => {
    switch(e.target.name) {
      case 'ASYNC':
        this.incrementAsync();
        break;
      case 'IF_ODD':
        this.incrementIfOdd();
        break;
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

export default connect(mapStateToProps, { increment, decrement })(ReactTimeout(Counter));
