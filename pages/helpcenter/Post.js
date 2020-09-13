import React from 'react'

const mockPost = 
    {
        "id": 1,
        "title": "Where to Start?",
        "content": "Start by going into the tab of one of the test. ",
        "created_by": {
            "id": 1,
            "firstname": "Fyrix",
            "lastname": "Admin",
            "username": null
        },
        "updated_by": {
            "id": 1,
            "firstname": "Fyrix",
            "lastname": "Admin",
            "username": null
        },
        "created_at": "2020-08-27T23:32:14.485Z",
        "updated_at": "2020-08-27T23:32:14.552Z"
    }



export default (props) => {
    const title = mockPost.title
    const content = mockPost.content

    return(
        <div className="Post"> 
             <h4>{title}</h4>
             <div>
                <p>{content}</p>
             </div>
        </div>
    )
}