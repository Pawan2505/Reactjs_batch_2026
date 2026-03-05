// import React from 'react'
// import { useForm } from 'react-hook-form'

// const App = () => {
//   const {register,handleSubmit,required} = useForm();

//   const onSubmit = (data)=>{
//     console.log(data);
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("username",{required:true})} type="text" placeholder='Username...' />
//       <input {...register("age",{required})} type="number" placeholder='Age...' />
//       <input {...register("email",{required:true})} type="email" placeholder='Email...' />
//       <input {...register("password",{required:true})} type="password" placeholder='Password...' />
//       <button type='submit'>Submit</button>
//     </form>
//   )
// }

// export default App



import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
 const {register,handleSubmit,required,formState:{errors}} = useForm();
 const abc = (data)=>{
  console.log(data);
 }
  return (
   <form onSubmit={handleSubmit(abc)} className='form-controls w-50 mx-auto mt-5 shadow-lg p-5'>
    <input className='form-control mb-3' {...register("username",{required:true})} type="text" placeholder='username...' />
    {errors.username && <span>This field is required</span>}
    <input className='form-control mb-3' {...register("email")} type="email" placeholder='Email...' />
    <input className='form-control mb-3' {...register("age")} type="number" placeholder='age...' />
    <input className='form-control mb-3' {...register("password")} type="text" placeholder='password...' />

    <button className='btn btn-primary' type='submit'>Submit</button>
   </form>
  )
}

export default App
