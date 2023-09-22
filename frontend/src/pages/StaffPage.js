import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js" ;

function StaffPage () {
    const [results, setresults] = useState([]);
    const url = () => {
       fetch('https://randomuser.me/api/?results=10') 
       .then((response) => response.json())
       .then((response) => {
        setresults(response.results)
       })
       .catch(() => {
        alert("We've hit a road block. Please, try again.")
       });
    };

    return (
        <>
         <h2>Staff Information</h2>
            <article>
            <p><button className="tableButton"id="click" onClick={url} value="populate">Populate the table</button>Click on the button to fill in the table with the respective information about staff members.</p> 
                
                <table className="staffTable">
                    <thead>
                        <tr>
                            <th>Portrait</th>
                            <th>Name/Email</th>
                            <th>Telephone</th>
                            <th>City</th>               
                        </tr>
                    </thead>
                    <tbody>
                    {results.map((tableId, index) => <StaffRow tableId={tableId} key={index} />)}
                    </tbody>
                </table>
            </article>
            </>
    );
}
export default StaffPage;