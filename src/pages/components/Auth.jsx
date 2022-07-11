
import { ValidateCredentials } from "../../helpers/";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";



export const Auth = () => {

  const { email, password, onInputChange, onResetForm } = useForm({ email: '', password: '' });
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();

    ValidateCredentials(email, password) && navigate( "../", {replace:true} );
    onResetForm();
  }

  return (
    <>
      <div className="container w-50">
        <div className="d-flex d-sm-flex flex-column justify-content-center mt-4">
          <form className="form-group" onSubmit={handleSubmit}>
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={email} onChange={onInputChange} />
            <small id="emailHelp" className="form-text text-muted mb-2">We'll never share your email with anyone else.</small>
            <div className="form-group">
              <input type="password" className="form-control" aria-describedby="passHelp" placeholder="Password" name="password" value={password} onChange={onInputChange} />
              <small id="passHelp" className="form-text text-muted mb-2">All your passwords are secure with us.</small>
            </div>
            <button className="btn btn-primary"> Login </button> 
          </form>
        </div>
      </div>
    </>
  )
}
