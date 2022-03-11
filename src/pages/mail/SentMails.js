import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline, Visibility } from '@material-ui/icons';
import React, { useState } from 'react'
import { emailData } from '../../dummyData';

const SentMails = () => {

    const [data, setData] = useState(emailData);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };



    const columns = [
        {
            field: "email_to",
            headerName: "Email ID",
            flex: 1,
        },
        {
            field: "email_body",
            headerName: "Email Body",
            flex: 2,
        },
        {
            field: "status",
            headerName: "Status",
            flex:1,
        },
        {
            field: "action",
            headerName: "Action",
            flex: 1,
            renderCell: (params) => {
                return (
                    <> 
                    <Visibility className="viewBtn"/>
                    <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            },
        },
    ];

    return (
        <div className="SentMails">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default SentMails