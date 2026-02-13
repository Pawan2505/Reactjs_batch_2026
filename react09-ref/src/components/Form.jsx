import React, { useRef } from 'react'

const Form = () => {
    const inputRef = useRef({});

    const handleSubmit = (e)=>{
        e.preventDefault();

        const formData = {
            username : inputRef.current.username.value,
            email: inputRef.current.email.value,
            password: inputRef.current.password.value,
        }

        console.log(formData);
        inputRef.current.reset();

    }

  return (
    <form ref={inputRef} onSubmit={handleSubmit}>
        <input type="text" placeholder='username' name='username' />
        <input type="email" placeholder='email' name='email' />
        <input type="password" placeholder='password' name='password' />
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form
