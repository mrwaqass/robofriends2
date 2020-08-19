import React from 'react';
const Scroll = (props)=>{
    return(
        <div className='pt2' style={{overflowY:'scroll', border:'3px solid #080808', height:'800px'}}>
            {props.children}
        </div>
    );
}
export default Scroll;