import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrUpdate} from 'react-icons/gr';

function VitaminRow ({vitamins, updateVitamins, deleteVitamin}) {
    return (
      <tr>
        <td>
        {vitamins.name} 
        </td>
        <td>
          {vitamins.date.slice(0, 10)}
        </td>
        <td>
          {vitamins.purpose}
        </td>
        <td>
          {vitamins.unit_day}
        </td>
        <td>
          <GrUpdate onClick={() => updateVitamins(vitamins)}/>
        </td>
        <td>
            <RiDeleteBin6Line onClick={() => deleteVitamin(vitamins._id)}/>
        </td>
      </tr>

    )
};

export default VitaminRow;
