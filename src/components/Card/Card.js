import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.scss';

class Card extends React.Component {

  static propTypes ={
    title: PropTypes.string,
  }

  render(){
    console.log('Card:', this.props);
    const {title} = this.props;
    return (
      <section className={styles.component}>
        <h3>{title}</h3>
      </section>
    );
  }
}

export default Card;
