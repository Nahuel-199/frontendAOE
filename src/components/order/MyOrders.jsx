import React, { Fragment, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, myOrders } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typography from '@mui/material/Typography';
import LaunchIcon from '@mui/icons-material/Launch';
import "./MyOrders.css";
import MetaData from "../layout/MetaData";
import UserOptions from "../layout/UserOptions";

const MyOrders = () => {
    const dispatch = useDispatch();

    const { loading, error, orders } = useSelector((state) => state.myOrders);
    const { user, isAuthenticated } = useSelector((state) => state.user);

    const columns = [
        { field: "id", headerName: "Orden ID", minWidth: 300, flex: 1 },
    
        {
          field: "status",
          headerName: "Estado",
          minWidth: 150,
          flex: 0.5,
          cellClassName: (params) => {
            return params.getValue(params.id, "status") === "Delivered"
              ? "greenColor"
              : "redColor";
          },
        },
        {
          field: "itemsQty",
          headerName: "Cantidad",
          type: "number",
          minWidth: 150,
          flex: 0.3,
        },
    
        {
          field: "amount",
          headerName: "Precio",
          type: "number",
          minWidth: 270,
          flex: 0.5,
        },
    
        {
          field: "actions",
          flex: 0.3,
          headerName: "Acciones",
          minWidth: 150,
          type: "number",
          sortable: false,
          renderCell: (params) => {
            return (
              <Link to={`/order/${params.getValue(params.id, "id")}`}>
                <LaunchIcon />
              </Link>
            );
          },
        },
      ];
      const rows = [];
      orders &&
      orders.forEach((item, index) => {
        rows.push({
          itemsQty: item.orderItems.length,
          id: item._id,
          status: item.orderStatus,
          amount: item.totalPrice,
        });
      });
  
    useEffect(() => {
      if (error) {
        toast.error(error,{
          position: toast.POSITION.BOTTOM_CENTER
        });
        dispatch(clearErrors());
      }
  
      dispatch(myOrders());
    }, [dispatch, error]);

  return (
 <Fragment>
      <MetaData title={`${user.name} - Ordenes`} />
      <ToastContainer />
      {isAuthenticated && <UserOptions user={user} />}

      {loading ? (
        <Loader />
      ) : (
        <div className="myOrdersPage">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />

          <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
        </div>
      )}
    </Fragment>
  )
}

export default MyOrders