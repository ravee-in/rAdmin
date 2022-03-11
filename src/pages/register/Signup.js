import './register.css';

const Signup = () => {
  return (
    <div className="registerWrap bg-light">
      <div className="row w-100">
        <div className="col-md-6 p-5">
          <img src="/images/registerImg.svg" width='100%' alt="" srcset="" />
        </div>
        <div className="col-md-6 p-5">
          <form action="" className='m-auto'>
            <p>Please fill the details to create an Account. OR <a href="/">Log In</a></p>
            <div className="inputWrap">
              <input type='email' className='registerInput mb-4' placeholder='Enter your Real Name*' />
            </div> 
            <div className="inputWrap">
              <input type='email' className='registerInput mb-4' placeholder='Enter an Email ID*' />
            </div>
            <div className="inputWrap">
              <input type="password" className='registerInput mb-4' placeholder="Choose a strong Password*" />
            </div>
            <div className="inputWrap">
              <input type="password" className='registerInput mb-4' placeholder="Re-enter your password*" />
            </div>
            <p>By continuing, I agree to the <a href='/'>Terms of Use</a> &  <a href='/'>Privacy Policy</a></p>
            <input type='submit' value='Create Account' className='btn btn-sm btn-info rAdmin_PBTN' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup