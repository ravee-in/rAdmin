import './register.css';

const Login = () => {
  return (
    <div className="registerWrap bg-light">
      <div className="row w-100">
        <div className="col-md-6 p-5">
          <img src="/images/registerImg.svg" width='100%' alt="" srcset="" />
        </div>
        <div className="col-md-6 p-5">
          <form action="" className='m-auto'>
            <p>Use your Credentials to get Access</p>
            <div className="inputWrap">
              <input type='email' className='registerInput mb-4' placeholder='Enter Registered Email*' />
            </div>
            <div className="inputWrap">
              <input type="password" className='registerInput mb-4' placeholder='**********' />
            </div>
            <p>By continuing, I agree to the <a href='/'>Terms of Use</a> &  <a href='/'>Privacy Policy</a></p>
            <input type='submit' value='LOGIN' className='btn btn-sm btn-info rAdmin_PBTN' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login