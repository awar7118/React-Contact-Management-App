import React, {useEffect, useState} from "react";
import './AddEdit.css'
import fireDb from "../firebase";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';


const initialState = {
name: "",
email: "",
contact: ""
}
export default function AddEdit() {

    const [state, setState] = useState(initialState);
    const[data, setData] = useState({});
    const {name, email, contact} = state;

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const{name, value} = event.target
        setState({...state, [name]: value})
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if(!name || !email || !contact){
            toast.error("Please complete values in each input field")
        }
        else{

            fireDb.child("contacts").push(state, (err) => {
                if(err) {
                    toast.error(err);
                } else {toast.success("Contact Added Successfully")}
            })
            setTimeout(()=> navigate('/'))
        }
    };

  
    return(
        <div style={{marginTop: "100px"}}>
            <form 
            style={{margin: "auto", padding: "15px", maxWidth: "400px", alignContent: "center"}}
            onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    placeHolder="your name..."
                    value = {name}
                    onChange={handleInputChange}
                ></input>
                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    id="email"
                    name="email"
                    placeHolder="your email..."
                    value = {email}
                    onChange={handleInputChange}
                ></input>
                <label htmlFor="contact">Contact</label>
                <input 
                    type="number"
                    id="contact"
                    name="contact"
                    placeHolder="your contact..."
                    value = {contact}
                    onChange={handleInputChange}
                ></input>

                <input type="submit" value="save" ></input>
            </form>
        </div>
    )
}