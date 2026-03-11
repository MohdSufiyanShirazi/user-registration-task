import React, { useEffect, useState } from 'react'

export default function Api() {

    const [data,setData]=useState([])
    const [error,setError]=useState()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((response) => 
        response.json()
     ).then((data) => 
        setData(data)
     ).catch((err) => {
        setError(err.message)
     });
     }, []); // empty dependency array  it will run only once

  return (
    <div>
        <h2><u>Fetch API </u></h2>
        {
            //error ? <b>{error}</b> : data.length==0 ? <b>Loading...</b> : 
        
        <table border={1} cellPadding={10} bgcolor='lightblue' >
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
                <th>Phone</th>
                <th>Company Name</th>
            </tr>
            {
                data.map((user,index)=>(
                     
                <tr key={index} >
                    <td>{user.id} </td>
                    <td>{user.name} </td>
                    <td>{user.address.city} </td>
                    <td>{user.phone} </td>
                    <td>{user.company.name} </td>
                </tr>
                ))
            }
        </table>
        }
        <hr/>
    </div>
  )
}
