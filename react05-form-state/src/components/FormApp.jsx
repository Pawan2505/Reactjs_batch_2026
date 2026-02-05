import React, { useEffect, useState } from 'react'

const FormApp = () => {

    const [formData, setFormData] = useState({username:"",email:"",password:""})

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
    }

    const handleChange = (e)=>{
        // console.log(e.target);
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }

    // useEffect(()=>{
    //     // code
    // },[])

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' name='username' value={formData.username} onChange={(e)=>handleChange(e)} />
        <input type="email" placeholder='Email' name='email' value={formData.email} onChange={(e)=>handleChange(e)} />
        <input type="password" placeholder='Password' value={formData.password} name='password' onChange={(e)=>handleChange(e)} />
        {/* <input type="file" /> */}
        <button>Submit</button>``
    </form>
  )
}

export default FormApp



// onSubmit, onChange, e.target, name attribute in React Forms:

// onSubmit : form ka jo data (all inputs data) hai submit hone par ek sath object me apko dega.

// onChange : input field ka jo bhi data hai wo apko real time me dega jab bhi ap kuch type karoge. -> state update karne ke liye use hota hai.

// name attribute : input field ko identify karne ke liye use hota hai. form ke andar multiple input fields hote hai to unhe alag alag identify karne ke liye name attribute use karte hai.

// e.target : jis element par event hua hai us element ko refer karta hai. For example, agar apne input field me kuch type kiya to e.target us input field ko refer karega.