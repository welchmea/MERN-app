import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import { useBackgroundImage } from '../components/useBackgroundImage';

export const UpdateVitamin = ({ updateVitamins }) => {
    useBackgroundImage('images/denis-sebastian-tamas-Prsu103pTio-unsplash.jpg')
    const [name, setName] = useState(updateVitamins.name);
    const [date, setDate] = useState(updateVitamins.date);
    const [purpose, setPurpose] = useState(updateVitamins.purpose);
    const [unit_day, setUnitDay] = useState(updateVitamins.unit_day);
    
    const navigate = useNavigate();

    const changeVitamin = async () => {
        const response = await fetch(`/VitaminPage/${updateVitamins._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name:name,
                date:date,
                purpose:purpose,
                unit_day:unit_day,
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`The vitamin you entered has been successfully edited`);
        } else {
            const errMessage = await response.json();
            alert(`A error has occurred, the vitamin was not able to be updated. See status code = ${response.status}. ${errMessage.Error}`);
        }
        navigate("/VitaminPage");
    }

    return (

        <>
        <div className='body-text-in-main'>
        <article>
            <h2>Update Vitamins</h2>
            <p >You can edit a supplement here if you have found discrepancies in the data.</p>
            <form onSubmit={(e) => { e.preventDefault();}}></form>
                    <table className="vitaminTable" id="vitamins">
                    <thead>
                        <tr>
                            <th>Vitamin Name</th>
                            <th>Date Taken</th>
                            <th>Purpose for use</th>
                            <th>Amount per day (mg)</th>
                            <th>Update</th>              
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            <label htmlFor="vitamin"></label>
                                <input 
                                    type="text"
                                    placeholder="Name of the Vitamin"
                                    value={name}
                                    onChange={e => setName(e.target.value)} 
                                    id="vitamin" 
                                    />
                            </td>
                            <td>
                                <label htmlFor="date"></label>
                                <input 
                                    type="date"
                                    value={date}
                                    placeholder="Date Taken"
                                    onChange={e => setDate(e.target.value)} 
                                    id="date" />
                            </td>
                            <td>
                            <label htmlFor="use"></label>
                            <input 
                                type="text"
                                placeholder="Reason for taking"
                                value={purpose}
                                onChange={e => setPurpose(e.target.value)} 
                                id="use" />
                            </td>
                            <td>
                            <label htmlFor="unit"></label>
                            <input 
                                type="number"
                                placeholder="Amount per day"
                                value={unit_day}
                                onChange={e => setUnitDay(e.target.value)} 
                                id="unit" />
                            </td>
                            <td><label htmlFor="alter">
                            <button type="submit" onClick={changeVitamin} id="alter">Click!</button></label></td>
                        </tr>
                    </tbody> 
                    </table> 
            </article>
            </div>
        </>
    );
}
export default UpdateVitamin;