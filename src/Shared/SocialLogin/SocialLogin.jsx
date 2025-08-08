import { useContext } from "react";
import AuthContext from "../../contex/AuthContex/AuthContext";



const SocialLogin = () => {
    const {signInGoogle} = useContext(AuthContext);
    const handleGoogleSignIn = () =>{
        signInGoogle()
        .then(result =>{
            console.log(result.user)

        } )
        .catch (error =>{
            console.log (error.message)
        })
        
       

    }

    return (
      <button className="btn bg-slate-500" onClick={handleGoogleSignIn}>Google</button>
    );
};

export default SocialLogin;