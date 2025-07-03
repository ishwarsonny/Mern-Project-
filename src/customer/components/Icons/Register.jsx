import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Login email:", email);
    console.log("Login password:", password);
    alert("Registered Successfully");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img 
          className="login-logo" 
          src="https://www.leheriya.com/cdn/shop/files/logo_be55d2b1-210e-43b5-b911-3585765e88aa_50x@2x.png?v=1677655114" 
          alt="Login Icon" 
        />

        <h2 className="login-title">Log in</h2>
        <p className="login-subtitle">Enter your email and password</p>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="login-input"
            required
          />
         
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            required
          />
          <NavLink to="/Login">
          <button type="submit" className="login-button">
            Continue
          </button>
          </NavLink>
          
          <p className="justify-center items-center">If registered <NavLink to="/Login" className="register-link">Login</NavLink> here</p>
        </form>
        
        <p className="login-privacy">Privacy</p>
      </div>
    </div>
  );
};

export default Register;

// import React, { useState } from "react";
// import "./Login.css";
// import { NavLink } from "react-router-dom";

// const Register = () => {
//   const [name, setName] = useState("");  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Name:", name);
//     console.log("Login email:", email);
//     console.log("Login password:", password);
//     // alert("Registered Successfully");
//     try{
//     const response= fetch(`http://localhost:4000/api/user/register`,{
//         method:"POST",
//         body: JSON.stringify(name,email,password),
//     });

//     console.log(response);
//    } catch(error){
//          console.log("register ",error);
//    }
   
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <img 
//           className="login-logo" 
//           src="https://www.leheriya.com/cdn/shop/files/logo_be55d2b1-210e-43b5-b911-3585765e88aa_50x@2x.png?v=1677655114" 
//           alt="Login Icon" 
//         />

//         <h2 className="login-title">Log in</h2>
//         <p className="login-subtitle">Enter your email and password</p>
        
//         <form className="login-form" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="login-input"
//             required
//           />
         
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="login-input"
//             required
//           />
          
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="login-input"
//             required
//           />
          
//           <button type="submit" className="login-button">
//             Continue
//           </button>
          
//           <p className="justify-center items-center">If registered <NavLink to="/Login" className="register-link">Login</NavLink> here</p>
//         </form>
        
//         <p className="login-privacy">Privacy</p>
//       </div>
//     </div>
//   );
// };

// export default Register;
