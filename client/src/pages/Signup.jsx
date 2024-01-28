import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export function Signup() {
  const [formData, setformData] = useState({})
  const [error, setError] = useState(false);
  const [clickonn, Clickon] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setformData({
      ...formData, [e.target.id]: e.target.value
    });
  }
  // it shoul de
  const handleSubmit = async (e) => {
    e.preventDefault();
    //prevent form refreshing the page
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/api/auth/signup",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),

        }

      );
      const data = await res.json();

      console.log(data.message);
      if (data.message === "User created successfully") {
        Clickon(true);
        setError(false);
      }
      setLoading(false);


      if (data.success === false) {
        setError(true);
        Clickon(false);
        return;
      }  navigate('/sign-in');
    }
    catch (error) {
      setLoading(false);
      setError(true);
    }



  }


  // console.log(formData);
  return (

    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Username'
          id='username'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}

        />
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}

        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}

        />
        <button
          disabled={loading}

          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          onChange={handleChange}
        >
          {loading ? 'loading...' : 'Sign - up'}
        </button>

      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to='/sign-in'>
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong'}</p>


      <p className='text-green-700 mt-5'>{clickonn && <h2>User created successfully</h2>}
      </p>

    </div>
  )
}

//redux information
// In summary, Redux provides a structured and scalable way to manage the state of a JavaScript application. It addresses common challenges in state management by promoting a single source of truth, a predictable state flow, and a separation of concerns. While it adds some boilerplate code, its benefits become more apparent as applications grow in size and complexity. It has become a popular choice for state management in the React ecosystem and beyond.
// In the context of Redux and React, the term "state" refers to the data that represents the current condition or snapshot of a part of your application. It's essentially the information you want to keep track of and potentially display in your user interface.






// // The code snippet you provided is using the `fetch` function to make a POST request to the "/api/auth/signup" endpoint. Let's break down the code:

// // ```javascript
// const res = await fetch("/api/auth/signup", {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(formData),
// });
// ```

// // 1. **Endpoint:**
// //    - `"/api/auth/signup"`: This is the URL endpoint to which the POST request is being made. It's typically the endpoint for user signup/authentication.

// // 2. **Request Method:**
// //    - `method: 'POST'`: This specifies that the HTTP request method being used is POST. In the context of user signup/authentication, this is common for submitting user registration data.

// // 3. **Headers:**
// //    - `headers: { 'Content-Type': 'application/json' }`: This sets the request headers. In this case, it specifies that the request payload (body) is in JSON format. The `'Content-Type': 'application/json'` header informs the server that the data being sent is in JSON format.

// 4. **Request Body:**
//    - `body: JSON.stringify(formData)`: This is the actual data being sent with the request. `formData` is assumed to be an object containing user input or registration data. `JSON.stringify` is used to convert the JavaScript object into a JSON string, which can be sent in the request body.

// 5. **Asynchronous Request:**
//    - `const res = await fetch(...)`: This line uses the `await` keyword to wait for the `fetch` operation to complete. The result (`res`) is an HTTP response object.

// The `fetch` function is a modern JavaScript function for making network requests (HTTP requests) in the browser or in environments that support the Fetch API (such as Node.js with appropriate polyfills). In this context, it is commonly used in web applications, especially with front-end frameworks like React, to communicate with a server and handle user authentication or form submissions.