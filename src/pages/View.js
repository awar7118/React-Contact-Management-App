import React, {useState, useEffect} from "react";
import fireDb from "../firebase";
import {useParams, Link } from 'react-router-dom';
import './View.css'

export default function View() {

    const [user, setUser] = useState({})
    // Grabbing the id using the useparam hook we imported above
    const {id} = useParams()

    useEffect(()=>{
// getting the single contact from database
        fireDb.child(`contacts/${id}`).get().then((snapshot) => {
            if (snapshot.exists()) {
                setUser({...snapshot.val()})
            } else {
                setUser({})
            }
        })
    },[id])
    console.log("user", user)
    return(
        <div style={{marginTop: "150px"}}>
            <div className="card">
                        <div className="container">
                            <div className="card-header">
                        <p>User Contact Detail</p> 
                        </div>
                            <strong>Database ID: </strong>
                            <span>{id}</span>
                            <br></br>
                            <br></br>
                            <strong>Name: </strong>
                            <span>{user.name}</span>
                            <br></br>
                            <br></br>
                            <strong>Email: </strong>
                            <span>{user.email}</span>
                            <br></br><br></br>
                            <strong>Contact: </strong>
                            <span>{user.contact}</span>
                            <br></br>
                            <br></br>
                            <Link to="/">
                                <button className="btn btn-edit">
                                     Go back
                                </button>
                            </Link>
                    </div>
            </div>
        </div>
    )
}