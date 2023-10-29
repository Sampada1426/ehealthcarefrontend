import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import UserNav from "./UserNav";
import { Variables } from "./Variable";
import './Meddetail.css';
import { Link } from 'react-router-dom';

export default function MedDetail(props){
    var qty = 10;
    //const path = Variables.PHOTO_URL;
    const {id} = useParams();
    let [buydata,setbuydata]=React.useState([1])
    axios.get(`https://localhost:7240/api/BuyMed?id=${id}`).then(respone => {
        setbuydata(respone.data)

    })

    return(
        <div>
            <UserNav/>
            <p className="shoppingcarttitle">Shoping Cart</p>
            {buydata.map(med=>
            <div>
              <div className='card'>
                <table className='table align-middle'>
                  <thead className='table-light'>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Seller</th>
                      <th>Price</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                <tbody>
                
                  <tr key={med.med_id}>
                    <td><img height='150px' src={med.med_image}/></td>
                    <td>{med.med_name}</td>
                    <td>{med.med_description}</td>
                    <td>{med.med_seller}</td>
                    <td>Rs {med.med_price}</td>
                    <td><input type='number' value={qty} /></td>
                  </tr>
                
                </tbody>
                </table>
              </div>
              <div className="totalbutton">
                <div className="totalprice">Total: Rs {med.med_price*qty} /-</div>
                <div><Link className='button' to={`/PayNow`}>Proceed To Buy</Link></div>
              </div>
            </div>
            )} 
        </div>
    )
}