import React from 'react';

import {Col, Card, Button} from 'react-bootstrap';

export default ({id, reviewName, message, category}) => {

    return(
        <tr>   
            <td>{id}</td>
            <td>
                {reviewName} 
                <br/>
                8/24/2020
            </td>
            <td>{message}</td>
            <td>Five Stars</td>
            <td>{category}</td>
         </tr>   
    ) 
}