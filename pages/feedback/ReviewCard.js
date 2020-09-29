import React from 'react';

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
            <td>{category}<a href={fromLink} target="_blank"><i class="fas fa-external-link-alt fa-xs" /></a></td>
         </tr>   
    ) 
}

export default ReviewCard;