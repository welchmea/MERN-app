import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

export const CreateVitamin = () => {

    const reroute = useNavigate();

    const [name, setName] = useState('');
    const [date, setDate] = useState( );
    const [purpose, setPurpose] = useState('');
    const [unit_day, setUnitDay] = useState('0');

    const addVitamin = async () => {
        const newVitamin = { name, date, purpose, unit_day };
        const results = await fetch('/VitaminPage', {
            method: 'post',
            body: JSON.stringify(newVitamin),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
  
    if(results.status === 201){
        alert(`Congratulations! You have added a new Vitamin to your supplements.`);
        reroute("/VitaminPage");
    } else {
        alert(`Defer to the status code: ${results.status}, to determine what went wrong.`);
    }
        reroute("/VitaminPage");
    
    };
    return (
    <>
        <h2>Add Vitamins</h2>
        <article>
            <p className="databasePara">You can add vitamins to your database on this page.</p>
            <form onSubmit={(e) => { e.preventDefault();}}></form>
                    <table className="vitaminTable" id="vitamins">
                    <caption><p>Which Vitamins would you like to add?</p></caption>
                    <thead>
                        <tr>
                            <th>Vitamin Name</th>
                            <th>Date Taken</th>
                            <th>Purpose for taking</th>
                            <th>Amount per day (mg)</th>
                            <th>Add</th>              
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            <label htmlFor="vitamin" className="required">
                                <input
                                    type="text"
                                    placeholder="What kind of supplement is this?"
                                    value={name}
                                    onChange={e => setName(e.target.value)} 
                                    id="vitamin" 
                                    /></label>
                            </td>
                            <td>
                                <label htmlFor="date" className="required">
                                <input
                                    type="date"
                                    value={date}
                                    onChange={e => setDate(e.target.value)} 
                                    id="date"
                                    /></label>
                            </td>
                            <td>
                            <label htmlFor="purpose" className="required">
                            <input
                                type="text"
                                placeholder="Why are you taking this supplement?"
                                value={purpose}
                                onChange={e => setPurpose(e.target.value)} 
                                id="purpose" 
                                /></label>
                            </td>
                            <td>
                            <label htmlFor="unit" className="required">
                            <input
                                type="number"
                                value={unit_day}
                                onChange={e => setUnitDay(e.target.value)} 
                                id="unit" 
                                /></label>
                            </td>
                            <td><label htmlFor="alter">
                            <button type="submit" onClick={addVitamin} id="alter">Click!</button></label></td>
                        </tr>
                    </tbody>  
                </table>
            </article>
    </>
    );
};

export default CreateVitamin;

