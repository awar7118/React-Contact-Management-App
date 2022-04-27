import React, {useState, useEffect} from "react";
import fireDb from "../firebase"
import {Link} from "react-router-dom"
import './Home.css'

export default function Home() {
    const[data, setData] = useState({})
    useEffect(()=> {
    // DB name is contact
        fireDb.child("contact").on("value", (snapshot) => {
            if(snapshot.val()!== null) {
                setData({...snapshot.val()})
            } else{
                setData({})
            }
        })
    })
    return(
<div>
<h2> Home</h2>
</div>
    )
}