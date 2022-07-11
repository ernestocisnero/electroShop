

export const Auth = () => {
  return (
    <>

      <div className="container w-50">
        <div className="d-flex d-sm-flex flex-column justify-content-center mt-4">
          <form className="form-group">
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted mb-2">We'll never share your email with anyone else.</small>
            <div className="form-group">
              <input type="password" className="form-control" aria-describedby="passHelp" placeholder="Password" />
              <small id="passHelp" className="form-text text-muted mb-2">All your passwords are secure with us.</small>
            </div>
            <button className="btn btn-dark"> Login </button>
          </form>
        </div>
      </div>



    </>
  )
}
