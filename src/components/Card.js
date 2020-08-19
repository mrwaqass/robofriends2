import React from 'react';
const Card = ({name, email, id})=>{
    return(
        <div className='bg-light-blue tc dib br3 ma1 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?10x10`} alt='Robot'></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;