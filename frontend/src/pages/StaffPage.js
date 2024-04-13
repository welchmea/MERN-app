import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js" ;
import { useBackgroundImage } from '../components/useBackgroundImage.js';

function StaffPage () {
    useBackgroundImage('images/chirayu-trivedi-feGMDDR3BlE-unsplash.jpg')
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
          <div className='body-text-in-main'>
         <h2>Staff Information</h2>
            <article>
                <div className=''>
                <button className="tableButton"id="click" onClick={url} value="populate">Populate the table</button>
                <p>Click on the button to fill in the table with the respective information about staff members.</p>
                </div>

                <div className='center-table-div'>
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
                </div>
            </article>
            </div>
            </>
    );
}
export default StaffPage;