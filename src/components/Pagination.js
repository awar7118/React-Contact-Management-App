import React from "react";

const Pagination = ({totalContacts,contactsPerPage, paginate}) => {
const pageNumbers = [];
for (let i=1; i <= Math.ceil(totalContacts/contactsPerPage); i++){
    pageNumbers.push(i)
}
// console.log(pageNumbers.length)
return ( 
    <nav>
        <ul className='pagination' >
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={(number)=>{paginate(number)}}  href='/' className = 'page-link'>
                            {number}
                        </a>
                    </li>
                ))}
        </ul>
        <p>Paginationnn</p>
    </nav>
)
}
export default Pagination