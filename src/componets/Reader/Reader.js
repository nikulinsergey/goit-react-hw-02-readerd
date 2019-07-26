/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import Publication from '../Publication/Publication';
import Controls from '../Controls/Controls';
import Counter from '../Counter/Counter';
import css from '../styles.module.css';
import publications from '../../publications.json';

export default class Reader extends Component {
  state = { counter: 1 };

  onForward = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  onBack = () => this.setState(state => ({ counter: state.counter - 1 }));

  render() {
    const { counter } = this.state;
    return (
      <div className={css.reader}>
        <Publication {...publications[counter - 1]} />
        <Counter number={counter} total={publications.length} />
        <Controls
          onForward={this.onForward}
          onBack={this.onBack}
          disableBack={counter === 1}
          disabledForward={counter === publications.length}
        />
      </div>
    );
  }
}
