import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Variables } from './Variable';
import './Medicine.css'

export class Medicine extends Component{
    constructor(props){
        super(props)

        this.state={
            medicines:[],
            //PhotoPath:Variables.PHOTO_URL,
            //PhotoPath:Variables.PHOTO_URL,
            MedicineName:"",
            withoutfilter:[]
        }

    }

    Filter()
    {
        var MedicineName = this.state.MedicineName;
        var filtereddata = this.state.withoutfilter.filter(
            function(fl){
                return fl.med_name.toString().toLowerCase().includes(
                    MedicineName.toString().trim().toLowerCase()
                )
            }
        );
        this.setState({medicines:filtereddata});


    }

    changeMedicineName = (e) =>{
        this.state.MedicineName = e.target.value;
        this.Filter();
    }

    refreshlist(){
        fetch(Variables.API_URL+'Medicine')
        .then(response=>response.json())
        .then(data=>{
            this.setState({medicines:data,withoutfilter:data});
        });
    }

    componentDidMount(){
        this.refreshlist();
    }

    render(){
        const
        {
            medicines,
            // PhotoPath
        }=this.state;
        return(
            <div className='Medicine'>
                <div className='titlesearch'>
                    <p className='title1'>Medicines List</p>
                    <div className='search'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.803 13.8637C13.0959 14.1566 13.5708 14.1566 13.8637 13.8637C14.1566 13.5708 14.1566 13.0959 13.8637 12.803L12.803 13.8637ZM11.25 7C11.25 9.34721 9.34721 11.25 7 11.25V12.75C10.1756 12.75 12.75 10.1756 12.75 7H11.25ZM7 11.25C4.65279 11.25 2.75 9.34721 2.75 7H1.25C1.25 10.1756 3.82436 12.75 7 12.75V11.25ZM2.75 7C2.75 4.65279 4.65279 2.75 7 2.75V1.25C3.82436 1.25 1.25 3.82436 1.25 7H2.75ZM7 2.75C9.34721 2.75 11.25 4.65279 11.25 7H12.75C12.75 3.82436 10.1756 1.25 7 1.25V2.75ZM13.8637 12.803L11.0719 10.0113L10.0113 11.0719L12.803 13.8637L13.8637 12.803Z" fill="#2C2A2B"/>
                        </svg>
                        <input className='searchbar' onChange={this.changeMedicineName} placeholder="Search for your Medicine"/>
                    </div>
                </div>
                <div className='card'>
                <table className='table align-middle'>
                        <thead className='table-light'>
                            <tr>
                                <th>  
                                    Image
                                </th>
                                <th>
                                    Name
                                </th>
                                <th>
                                    Description
                                </th>
                                <th>
                                    Price
                                </th>
                                <th>
                                    Seller
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {medicines.map(med =>
                                <tr key={med.med_id}>
                                    <td>
                                        <img height='150px' src={med.med_image}/>
                                    </td>
                                    <td>
                                        {med.med_name}
                                    </td>
                                    <td className='meddes'>
                                        {med.med_description}
                                    </td>
                                    <td>
                                        {med.med_price}
                                    </td>
                                    <td>
                                        {med.med_seller}
                                    </td>
                                    <td>
                                        <Link className='button' to={`/medicine/${med.med_id}`}>Add to Cart</Link>    
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>     
            </div>
        )
    }    
}
