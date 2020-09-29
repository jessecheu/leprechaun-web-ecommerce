import React from 'react';

import TimeStamp from 'react-timestamp'

const ReviewCard = ({id, reviewName, message, category, publishdate, fromLink}) => {

    return(
        <tr>   
            <td>{id}</td>
            <td>
                <b>{reviewName}</b>
                <br/>
                {publishdate}
            </td>
            <td>{message}</td>
            <td><a href={fromLink} target="_blank">{category}</a></td>
         </tr>   
    ) 
}

export default ReviewCard;