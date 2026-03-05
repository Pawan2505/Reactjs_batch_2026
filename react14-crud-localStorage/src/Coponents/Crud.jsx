import React, { useEffect, useState } from 'react'


const Crud = () => {
    const [users,setUsers]=useState([])
    const [newuser,setNewUser]=useState({name:'',email:'',phone:''})
    const [id,setId]=useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(id){
            const updatedUsers = users.map((user) => user.id === id ? {...newuser, id} : user);
            setUsers(updatedUsers);
            localStorage.setItem('Users', JSON.stringify(updatedUsers));
            setId(null);
        }else{
        const user = {...newuser, id: Date.now()};
        setUsers([...users, user]);
        localStorage.setItem('Users', JSON.stringify([...users, user]));
        }
        setNewUser({name:'',email:'',phone:''})
    }

   const handleChange = (e)=>{
    const {name,value} = e.target;
    setNewUser({...newuser,[name]:value})
   }


   const handleDelete = (id)=>{

    if(id){
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
        localStorage.setItem('Users', JSON.stringify(updatedUsers));
        setId(null);
    }else{
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem('Users', JSON.stringify(updatedUsers));
    }

   
   }


   const handleEdit = (id)=>{
    const userToEdit = users.find((user) => user.id === id);
    if (userToEdit) {
        setNewUser(userToEdit);
        setId(id);
    }
   }


   useEffect(()=>{
    const storedUsers = localStorage.getItem('Users');
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter name' name='name' onChange={handleChange} value={newuser.name}/>
        <input type="email" placeholder='Enter Email' name='email' onChange={handleChange} value={newuser.email}/>
        <input type="number" placeholder='Enter Phone' name='phone' onChange={handleChange} value={newuser.phone}/>

        <button type='submit'>Submit</button>
      </form>

        {/* display users */}
        {users.map((user) => (
          <div key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
            <button onClick={() => handleEdit(user.id)}>Edit</button>
          </div>
        ))}
    </div>
  )
}

export default Crud
