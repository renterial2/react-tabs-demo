import React from 'react'

const LoginForm = ({handleSubmit, 
                    handleChangePassword, 
                    handleChangeUserName, 
                    usernameVal, 
                    passwordVal, 
                    showAlert, 
                    alertMessage}) => {
  return (
    <div className="box">
        <h1 className="title">
            Login
        </h1>
        { showAlert ? <div className="notification is-danger">
                                <button className="delete"></button>
                                {alertMessage}
                                </div> : null }
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className="field">
                <label className="label">
                    Username
                </label>
                <div className="control"> 
                    <input placeholder="Username" 
                            type="text" 
                            id="usernameInput" 
                            className="input is-medium" 
                            onChange={(event) => handleChangeUserName(event)}
                            value={usernameVal} />
                </div>
            </div>
            <div className="field">
                <label className="label">
                    Password
                </label>
                <div className="control">
                    <input placeholder="Password" 
                            type="password" 
                            className="input is-medium" 
                            onChange={(event) => handleChangePassword(event)}
                            value={passwordVal} />
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <button className="button is-primary is-medium" 
                            type="submit">
                            Login
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginForm
