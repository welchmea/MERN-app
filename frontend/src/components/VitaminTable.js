import VitaminRow from "./VitaminRow";

function VitaminTable ({vitamins, updateVitamins, deleteVitamin}) {

    return (
        <>
         <h2>Database</h2>
            <article>
            <p className="databasePara">Update or delete information about vitamins and supplements in this table.</p>
            <div className="center-table-div">
                <table className="vitaminTable">
                    <thead>
                        <tr> 
                            <th>Vitamin Name</th>
                            <th>Date Taken</th>
                            <th>Purpose for taking</th>
                            <th>Amount per day (mg)</th>
                            <th>Update</th>  
                            <th>Delete</th>             
                        </tr>
                    </thead>
                    <tbody>
                    {vitamins.map((vitamins, index) => <VitaminRow vitamins={vitamins} key={index} updateVitamins={updateVitamins} deleteVitamin={deleteVitamin}/>)}
                    </tbody>
                </table>
                </div>
            </article>
            </>
    );
}
export default VitaminTable;