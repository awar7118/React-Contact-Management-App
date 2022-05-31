import React from "react";
const Pagination = ({totalContacts,contactsPerPage, paginate}) => {
const pageNumbers = [];
for (let i=1; i <= Math.ceil(totalContacts/contactsPerPage); i++){
    pageNumbers.push(i)
}
return ( 
    <nav style={{textAlign: "center"}}>
        <ul className='pagination' style={{justifyContent: "center", marginTop: "20px"}}>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={()=>{paginate(number)}}  href='/#' className = 'page-link'>
                            {number}
                        </a>
                    </li>
                ))}
        </ul>
    </nav>
)
}
export default Pagination