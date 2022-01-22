import React from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [users,setUsers] = useState({
        name:"", work:"", phone:"", email:"", password:"", cpassword:""
    })

    const history = useHistory();

    const handleInputs = (e) => {
        let x = e.target.name;
        let y = e.target.value;
        setUsers({
            ...users, [x]:y
        })
    }
    const postData =async (e)=>{
        e.preventDefault();
        const {name, email, phone, work, password, cpassword} = users;
        const res = await fetch("/register", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name, email, phone, work, password, cpassword
            })     
        })
        const data = await res.json();
        if(res.status === 422 || !data){
            window.alert("Registration failed");
            console.log("Registration failed");
        } else {
            window.alert("Registration Successful");
            console.log("Registration Successful");
            history.push("/signin");
        }
    }

    return (
        <>
        <div className ="register_background">
          <div className ="container register_container_background container_position">
            <hr />
                <form method="POST" className ="row g-3">
                    <div className ="col-md-6">
                        <label for="inputName4" className ="form-label">Name</label>
                        <input name="name" value={users.name} onChange={handleInputs} type="text" className ="form-control" id="inputName4" />
                    </div>
                    <div className ="col-md-6">
                        <label for="inputEmail4" className ="form-label">Email</label>
                        <input name="email" value={users.email} onChange={handleInputs} type="email" className ="form-control" id="inputEmail4" />
                    </div>
                    <div className ="col-12">
                        <label for="inputPhone" className ="form-label">Phone No.</label>
                        <input name="phone" value={users.phone} onChange={handleInputs} type="number" className ="form-control" id="inputPhone" />
                    </div>
                    <div className ="col-12">
                        <label for="inputWork" className ="form-label">Work</label>
                        <input name="work" value={users.work} onChange={handleInputs} type="text" className ="form-control" id="inputWork" />
                    </div>
                    <div className ="col-md-6">
                        <label for="inputPassword" className ="form-label">Password</label>
                        <input name="password" value={users.password} onChange={handleInputs} type="password" className ="form-control" id="inputPassword" />
                    </div>
                    <div className ="col-md-6">
                        <label for="inputConfirmPassword" className ="form-label">Confirm Password</label>
                        <input name="cpassword" value={users.cpassword} onChange={handleInputs} type="password" className ="form-control" id="inputConfirmPassword" />
                    </div>
                    <div className ="col-12">
                        <button type="submit" onClick={postData} className ="btn btn-primary">Sign up</button>
                    </div>
                    <hr />
                </form>
          </div>
        </div>  
        </>
    )
}

export default Signup;

/*
            <input name="name" value={users.name} placeholder="your name" onChange={handleInputs}/>
            <hr />
            <input name="email" value={users.email} placeholder="your email" onChange={handleInputs}/>
            <hr />
            <input name="phone" value={users.phone} placeholder="your phone" onChange={handleInputs}/>
            <hr />
            <input name="work" value={users.work} placeholder="your work" onChange={handleInputs}/>
            <hr />
            <input name="password" value={users.password} placeholder="your password" onChange={handleInputs}/>
            <hr />
            <input name="cpassword" value={users.cpassword} placeholder="your cpassword" onChange={handleInputs}/>
            <hr />
            <button type="submit" onClick={postData}>Register</button>
            <hr />
*/
