import React from 'react'
import { Link } from 'react-router-dom';
// import Modal from './Modal';
import { connect } from 'react-redux';


const Contact = ({cards}) => {
  // console.log(props.cards);
  return (
    <div>
      {/* <Modal /> */}
      {cards.map((cards) => {
        return (
          <div className='ui raised very padded text container segment'
            style={{ marginTop: '80px' }}
            key={cards.id}>
            <Link to={`/${cards.title}`} className='ui header'>
              {cards.title}
            </Link>
            <p> {cards.body}  </p>
          </div>
        )
      })}
    </div>

  )
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  }
};

export default connect(mapStateToProps)(Contact);
