import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom"
import './AddEdit.css'
import fireDb from "../firebase";
import { toast } from "react-toastify";

const initialState = {
name: "",
email: "",
contact: ""
}
export default function AddEdit() {

    const [state, setState] = useState(initialState);
    const[data, setData] = useState({});
    const {name, email, contact} = state;

    const handleSubmit = () => {};
    const handleInputChange = () => {};

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