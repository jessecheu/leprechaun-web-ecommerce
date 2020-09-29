import React from 'react';

const ReviewCard = ({id, reviewName, message, category, publishdate, fromLink}) => {

    return(
        <tr>   
            <td>{id}</td>
            <td>
                {reviewName} 
                <br/>
                {publishdate}
            </td>
            <td>{message}</td>
            <td><a href={fromLink} target="_blank">{category}</a></td>
         </tr>   
    ) 
}

export default ReviewCard;