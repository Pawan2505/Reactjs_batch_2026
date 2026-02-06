
// const Header = ()=>{


//     return (
//         <div>
//             <h1>This is Header Page</h1>
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eaque?</p>
//         </div>
//     )
// }


// export default Header

// import  './Header.css';

// const Header = (props)=>{


//     return (
//         <>
//             <h1 className="heading">This is Header Page</h1>
//             <p style={{backgroundColor:"red", color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, eaque?</p>
//             <p>Your username is : {props.username}</p>
//         </>
//     )
// }


// export default Header



// import  './Header.css';

// const Header = ({username,fruits})=>{


//     return (
//         <>
//             <p>Your username is : {username}</p>
   
//             <ul>
//                 {
//                     fruits.map((fruit, index)=>{
//                         return(
//                             <li key={index}>{fruit}</li>
//                         )
//                     })
//                 } 
//             </ul>
//         </>
//     )
// }


// export default Header


import  './Header.css';

const Header = (props)=>{


    return (
        <>
            <p>Your username is : {props.username}</p>
   
            <ul>
                {
                    props.fruits.map((fruit, index)=>{
                        return(
                            <li key={index}>{fruit}</li>
                        )
                    })
                } 
            </ul>

            {props.children[1]}
        </>
    )
}


export default Header