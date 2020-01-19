import React from 'react'
import { withRouter } from 'react-router-dom'

function Profile({ history }) {
  return (
    <form onSubmit={() => alert('submitted')}>
        <div className="form-group">
          <label htmlFor="usernameId">Username</label>
          <input type="text" name="username" className="form-control" id="usernameId" placeholder="Username"/>
        </div>
        <button className="btn btn-primary">Save</button>
    </form>
  )

}

export default withRouter(Profile);