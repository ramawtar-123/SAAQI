import React,{useState} from 'react'
import { redirect } from 'react-router-dom';

function Login({handleIsLoggedIn}) {


  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Optionally, you can redirect or perform other actions after successful login
        console.log('User logged in successfully');
        handleIsLoggedIn(true)
        
      } else {
        handleIsLoggedIn(false)
        const data = await response.json();
        console.log(data.message || 'Error logging in');
      }
    } catch (error) {
      handleIsLoggedIn(false)
      console.error('Error:', error);
      console.log('Internal Server Error');
    }
  };



    return (
      <>
          <div className="flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1707343843982-f8275f3994c5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-[100vh]">
              <div className="box flex flex-col items-center h-[80vh] w-[28vw] rounded-xl glass-blur text-white">
  
                <div className="dets mt-[9%]  w-[90%] h-[70%] flex flex-col justify-center ">
  
                  
                    <form onSubmit={handleSubmit}>
                      <div className="flex flex-col justify-center items-center gap-5 text-white ">
                        <h1 className='text-3xl mt-10 font-semibold'>Login</h1>
    
                        <input type="email" value={formData.email} onChange={handleChange}  name="email" id="email" placeholder='Email' className='w-[80%] h-9 p-4 pl-6  bg-transparent border-b focus:outline-none placeholder-gray-200'/>
                        <input type="password" value={formData.password} onChange={handleChange}  name="password" id="password" placeholder='Password' className='w-[80%] h-9 p-4 pl-6  bg-transparent border-b focus:outline-none placeholder-gray-200'/>
                        
                        <div className="flex gap-[5.2rem] ">
                          <div>
                            <input type="checkbox" name="remember-me" id="remember-user" />
                            <label htmlFor="remember-user">Remember me</label>
                          </div>

                          <a href="forget-password" className='text-[13px] text-zinc-300'>Forget Password?</a>
                        </div>

                        <input type="submit" value="Submit" className='w-[35%] h-10 p-2 mt-7 bg-white text-black rounded-lg'/>
                        <a href="register" className='text-[13px] text-zinc-300'>Don't have an Account?</a>
                    
                        </div>

                        
                      
                    </form>
                    </div>
                
  
                <div className="login-with flex w-[80%] h-[15%] justify-center items-center gap-4 mt-4">
                      <a href="http://google-authentication" className='text-white'>
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30" >
  <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
  </svg>
                      </a>
  
                      <a href="http://facebook-authencation">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
          <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
      </svg>
                      </a>
  
                      <a href="http://github-authencation">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
          <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
      </svg>
                      </a>
  
                      <a href="http://linkedln-authencation">
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
      </svg>
                      </a>
                </div>
  
              </div>
                
  
          </div>
  
      </>
    )
  
}

export default Login