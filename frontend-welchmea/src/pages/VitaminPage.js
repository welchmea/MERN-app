import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import VitaminTable from '../components/VitaminTable.js';
import { BsPlusCircle } from "react-icons/bs";
import { GiMedicinePills } from "react-icons/gi";
import { Link } from 'react-router-dom';

function VitaminPage ({setVitamin}) {
    const navigate = useNavigate();

    const [vitamins, setVitamins] = useState([]);

    const retrieveVitamins = async () => {
        const response = await fetch('/VitaminPage');
        const vitamins = await response.json();
        setVitamins(vitamins);
    }
    const editOneVitamin = async vitamin => {
        setVitamin(vitamin);
        navigate("/UpdateVitamin");
    }
    const deleteVitaminById = async _id => {
        const deleted = await fetch(`/VitaminPage/${_id}`, { method: 'DELETE' });
        if (deleted.status === 204) {
            const getDeleted = await fetch('/VitaminPage');
            const vitamins = await getDeleted.json();
            setVitamins(vitamins);
        } else {
            console.error(`The vitamin id = ${_id}, was unable to be deleted. status code = ${deleted.status}`)
        }
    };  
    useEffect(() => {
    retrieveVitamins();
    }, []);
    return (
        <>
        <h2>Vitamins<GiMedicinePills/></h2>
        <p className="iconText"><Link to="/CreateVitamin"><i><BsPlusCircle className="icon"/></i></Link>Click here to add a new vitamin to your database!</p>
        <p className="databasePara">Keep track of the supplements you are consuming.</p>
        <VitaminTable vitamins={vitamins} updateVitamins={editOneVitamin} deleteVitamin={deleteVitaminById} />
        </>
    );
}

export default VitaminPage;