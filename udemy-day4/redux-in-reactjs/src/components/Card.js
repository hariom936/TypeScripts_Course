import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { fetchUsers } from '../actions/cardAction';
// import { connect } from 'react-redux';

const Card = () => {
    let { user } = useParams();

    const card = useSelector((state) => {
        return state.cards.find((card) => card.title === user);
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const { title, body } = card;


    const users = useSelector((state) => {
        return state.users;
    });
    // console.log(users);

    useEffect(() => {
         // eslint-disable-next-line
        dispatch(fetchUsers());
    }, []);

    const onButtonClick = () => {
        let id = card.id;
        dispatch({ type: "DELETE_CARD", id });
        navigate('/contact');
    }
    
        // <div className='ui raised very padded text container segment' style={{ marginTop: '80px' }}>
        //     <h3 className='ui header'> {title} </h3>
        //     <p>{body}</p>
        //     <button className='ui primary right floated button'
        //         onClick={onButtonClick}>Delete</button>
        // </div>
        return  users.mpa((user) => {
            return (
                <div className='ui raised very padded text container segment' style={{ marginTop: '80px' }} key={user.id}>
                    <h3 className='ui header'> {user.name} </h3>
                    <p>{user.email}</p>
                    <button className='ui primary right floated button'
                        onClick={onButtonClick}>Delete</button>
                </div>
            )
        })
    
}

// const mapStateToProps = (state, ownProps) => {
//     let title = ownProps.match.params.user;
//     return {
//         card: state.cards.find(cards => cards.title === title)
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deletecard: (id) => { dispatch(deletecard(id)) }
//     }
// }

export default (Card);