import { easeOut } from "motion";
import { motion } from "motion/react"
import team1 from '../../assets/team1/team 1.jpg'
import team2 from'../../assets/team1/team 2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
        <div className="hero-content flex-col lg:flex-row-reverse">
         <div className="flex-1">
         <motion.img
         animate={{y:[50,150,50]}}
         transition={{duration: 10, repeat:Infinity }}
      src= {team1} 
      className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-blue-400 border-b-4" 
      />
        <motion.img
         animate={{x:[100,150,100]}}
         transition={{duration: 10, delay:5, repeat:Infinity }}
      src= {team2} 
      className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-blue-400 border-b-4" 
      />
         </div>
        
          <div className="flex-1">
            <motion.h1 
            animate={{x:50,}}
            transition={{duration: 2, delay:1, ease: easeOut , repeat: Infinity}}
            className="text-5xl font-bold mt-2">Latest <motion.span
            animate={{color: ['#ecff33', '#33ffe3', '#ff6133' ]}}
            transition={{duration: 1.5, repeat: Infinity}}
            >jobs</motion.span> for you!</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;