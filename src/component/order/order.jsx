import React from "react";


const Order = () => {
    return (
        <div className="order">
            <div className="title">
                <span>#</span>
                <h2>Order Details</h2>
            </div>
            <div className="order-details">
                <div className="left">
                    <h3>Order no: #123456789</h3>
                    <p>Placed On  2 June 2023 2:40 PM </p>
                </div>
                <div className="right">
                    <p>Total : <b>$143.00</b></p>
                </div>
            </div>
            <div className="status">

            </div>
            <div className="date">
                <p>8 June 2023 3:40 PM   </p>
                <p>Your order has been successfully verified.</p>
            </div>
            <div className="order-image">
                <div className="img-container">
                    <img src="" alt="dress" />
                </div>
                <div className="text">
                    <h4>Printed White cote</h4>
                    <p>Color: White</p>
                </div>
                <div className="quantity">
                    <b>Qty : 1</b>
                </div>
                <p>$29.00</p>
                <span>X</span>
            </div>
        </div>
    )

}
export default Order;