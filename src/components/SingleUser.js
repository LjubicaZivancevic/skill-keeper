import React from 'react'


function SingleUser(props) {
    return (
      
        <div className="row">
        <div className="column">
          <div className="card">
            <h3>{props.name}</h3>
            <p>{props.location}</p>
            <p>Some text</p>
          </div>
        </div>
        </div>
    )
}

export default SingleUser
