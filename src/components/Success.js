import React from 'react'

const Success = ({reset}) => {
  return (
    <div>
      <div className="box">
        <h1 className="title">Login Success!</h1>
        <button className="button is-primary is-medium" 
                onClick={() => reset()}>Reset Login Form</button>
    </div>
    </div>
  )
}

export default Success
