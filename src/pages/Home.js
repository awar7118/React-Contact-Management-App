import React, { useState, useEffect } from "react";
import fireDb from "../firebase"
import { Link } from "react-router-dom"
import './Home.css'
import { toast } from "react-toastify";

export default function Home() {
    const[data, setData] = useState({})
    const [currentPage, setCurrentPage] = useState(1);
    const[contactsPerPage, setContactsPerPage] = useState(10)
    // Useffect includes a query that gets the data from the realtime database/
    useEffect(()=> {
        // DB name is currently contacts
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
    const indexOfLastContact = currentPage * contactsPerPage
    const indexOfFirstContact = indexOfLastContact - contactsPerPage
    
    const onDelete = (id) => {
        if (window.confirm("Are you sure you would like to delete this contact?")){
            fireDb.child(`contacts/${id}`).remove((err)=> {
                if(err) {
                    toast.error(err)
                }
                else {
                    toast.success("contact deleted successfully")
                }
            })
        }
    }
    return(
<div style={{marginTop: "100px"}}>
    <table className="styled-table">
        <thead>
            <tr>
                <th style={{textAlign: "center"}}>
                    #
                </th>
                <th style={{textAlign: "center"}}>
                    Full Name
                </th>
                <th style={{textAlign: "center"}}>
                    Email
                </th>
                  <th style={{textAlign: "center"}}>
                    Contact Number
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
                            <td> 
                                <Link to={`/update/${id}`}>
                                    <button className="btn btn-edit">
                                        Edit
                                    </button>
                                </Link>
                                <button className="btn btn-delete"
                                onClick={()=> {
                                    onDelete(id)
                                }}
                                > Delete</button>
                                <Link to={`/view/${id}`}>
                                    <button className="btn btn-view">
                                        View
                                    </button>
                                </Link>
                            </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
</div>
    )
}