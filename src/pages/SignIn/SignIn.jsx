import Lottie from "lottie-react";
import RegisterLottieData from'../../assets/lottiee/signIn.json'
import { useContext } from "react";
import AuthContext from "../../contex/AuthContex/AuthContext";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const SignIn = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    console.log('in signIn page', location);
    const from = location.state || '/';
    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password) 
        .then(result =>{
            console.log('sign in',result.user.email);
            const user = {email: email}
            axios.post('http://localhost:3000/jwt', user,{withCredentials:true})
            .then(res =>{
              console.log(res.data);
            })

            navigate(from);
            
        } )
        .catch(error =>{    //Riyad5
            console.log(error.message);
        })
    
   

        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96 p-10">
           
           <Lottie animationData={RegisterLottieData }></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shr!ink-0 shadow-2xl">
          <h1 className="text-5xl font-bold ml-8 mt-4">Login</h1>
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" 
                name="email"
                 placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" 
                name="password"
                placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="divider lg:divider-horizontal text-center">OR</div>
      <div className="text-center mb-6 ">
       <SocialLogin></SocialLogin>
      </div>
          </div>
        </div>
      </div>
       
    );
};

export default SignIn;