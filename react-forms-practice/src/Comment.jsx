import { useState } from "react";

export default function Comment(){

    let [formdata,setFormData] = useState({
        username: "",
        rating: 1,
        comment: "",

    })

    let handleFormData = (event) => {
         setFormData((currData) => {
            return {...currData, [event.target.name] : event.target.value};
        })
    }

    let handleFormFeatures = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <h5>Comments</h5>

            <form onSubmit={handleFormFeatures}>
                <input value={formdata.username} name="username" onChange={handleFormData} placeholder="username" type="text"></input><br /> <br />
                <input value={formdata.rating} name="rating" onChange={handleFormData} placeholder="rating" type="number" min={1} max={5}></input><br /> <br />
                <textarea value={formdata.comment} name="comment" onChange={handleFormData} placeholder="comments"></textarea> <br /> <br />
                <button>Submit</button>
            </form>
        </div>
    );
}