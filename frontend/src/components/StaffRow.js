import React from "react";

function StaffRow({tableId}) {
    return (
        <tr>
            <td><img src={tableId.picture.thumbnail} alt="profile"/></td>
            <td>
                <a href={"mailto:" + tableId.email}>
                {tableId.name.first}
                {tableId.name.last}
                </a>
            </td>
            <td>{tableId.phone}</td>
            <td>{tableId.location.city}</td>
        </tr>
    );
};
export default StaffRow;