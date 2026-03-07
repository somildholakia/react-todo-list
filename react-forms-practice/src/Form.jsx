import { useState } from "react";

export default function Form(){

    let [formData,setFormData] = useState({
        fullname: "",
        username: "",
        password: "",
    })


    let handleInputChange = (event) => {
        
        
        setFormData( (currData) => {
            return{...currData, [event.target.name] : event.target.value};
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        setFormData({
             fullname: "",
        username: "",
        password: "",
        })
    }

    return(
        <div>
            <h2>Forms</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">Enter your name</label><br />
                <input value={formData.fullname} onChange={handleInputChange} placeholder="Enter your name" id="fullname" name="fullname"></input> <br /><br />
               

                <label htmlFor="username">Enter the username</label> <br />
                <input value={formData.username} onChange={handleInputChange} id="username" placeholder="Enter username" name="username"></input> <br /> <br />

                <lebel htmlFor="password">Enter the password</lebel> <br />
                <input value={formData.password} onChange={handleInputChange} id="password" placeholder="Enter password" name="password"></input> <br /><br />
                 <button>Submit</button>
            </form>
        </div>
    );
    
}