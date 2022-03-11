import { DataGrid } from '@material-ui/data-grid';
import React from 'react'
import { emailData } from '../../dummyData';

const TrashMails = () => {
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
    ];

    return (
        <div className="SentMails">
            <DataGrid
                rows={emailData}
                disableSelectionOnClick
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}

export default TrashMails