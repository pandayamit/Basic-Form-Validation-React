import React,{useState} from 'react';
function Login()
{
    const[user,setuser]=useState("")
    const[password,setpassword]=useState("")
    const[userErr,setuserErr]=useState(false)
    const[passErr,setpassErr]=useState(false)

    function LoginHandle(e){
        if(user.length<3 || password.length<3){
            alert("please enter correct values")
        }
        else{
            alert("all good :)")
        }
       e.preventDefault()
       }

     function userHandler(e){
        let item=e.target.value;
        if(item.length<=3){
            setuserErr(true)
        }
        else{
            setuserErr(false)
        }
        setuser(item)

     }       


     function passwordHandler(e){
        let item=e.target.value;
        if(item.length<=3){
            setpassErr(true)
        }
        else{
            setpassErr(false)
        }
        setpassword(item)

     }       
return(
<div>
    <h1>Login</h1>
    <form onSubmit={LoginHandle}>
        <input type="text" placeholder="   Enter UserId" onChange={userHandler}></input>{userErr?<span>invalid user</span>:""}  <br></br><br></br>
         <input type="password" placeholder="    Enter Password" onChange={passwordHandler}></input>{passErr?<span>invalid password</span>:""} <br></br><br></br>
         <button type="submit">Login</button>
    </form>
</div>
)

}
export default Login;