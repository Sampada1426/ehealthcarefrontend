import UserNav from "./UserNav";

export default function PayNow(){
    return(
        <div>
            <UserNav/>
        <h2 align="center">Order Confirmation</h2>
        <h4 align="center">Your Order has been placed!</h4>
        <p align="center" className="text1">Order ID: DD001</p>
        <h3 align="center">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/order-confirmed-7464607-6110040.png?f=webp" height="300px"/>
        </h3>
        <h5 align="center">
        <a href="/" class="button"><span className="pay-btn">Back to Store</span></a>
        </h5>
    </div>
    )
}