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
const {name, email, contact] = state;
    return(
<div style={{marginTop: "100px"}}>
    <form style={{margin: auto, padding: "15px", maxWidth: "400px", alignContent: "center"}}>
        

    </form>
</div>
    )
}