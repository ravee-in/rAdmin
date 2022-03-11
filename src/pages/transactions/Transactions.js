import './transaction.css'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { transactionsData } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const Transactions = () => {
    const [data, setData] = useState(transactionsData);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "c_name",
            headerName: "Customer",
            flex: 1,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.c_img} alt="" />
                        {params.row.c_name}
                    </div>
                );
            },
        },
        { field: "price", headerName: "Amount", width: 200 },
        {
            field: "status",
            headerName: "Status",
            flex: 1,
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,

        },
        {
            field: "action",
            headerName: "Action",
            flex: 1,
            renderCell: (params) => {
                return (
                    <>
                        <DeleteOutline
                            className="transactionDelete text-danger"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className="productList">
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}

export default Transactions