import React, { useState, useEffect } from "react";
import fireDb from "../firebase"
// import { Link } from "react-router-dom"
import './Home.css'

export default function Home() {
    const[data, setData] = useState({})

    useEffect(()=> {
        // DB name is contact
        fireDb.child("contacts").on("value", (snapshot) => {
            if(snapshot.val() !== null) {
                setData({...snapshot.val() })
            } else{
                setData({})
            }
        })

        return () => {
            setData ({})
        }
    }, [])
    return(
<div style={{marginTop: "100px"}}>
    <table className="styled-table">
        <thead>
            <tr>
                <th style={{textAlign: "center"}}>
                    No.
                </th>
                <th style={{textAlign: "center"}}>
                    Name
                </th>
                <th style={{textAlign: "center"}}>
                    email
                </th>
                  <th style={{textAlign: "center"}}>
                    Contact
                </th>
                  <th style={{textAlign: "center"}}>
                    Action
                </th>
            </tr >
        </thead>
        <tbody>
            {Object.keys(data).map((id, index)=> {
                return (
                    <tr key={id}>
                        <th scope="row"> {index+1} </th>
                            <td>  {data[id].name} </td>
                            <td>  {data[id].email} </td>
                            <td>  {data[id].contact} </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
</div>
    )
}