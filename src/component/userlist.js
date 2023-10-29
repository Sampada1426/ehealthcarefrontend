import React, { Component } from 'react';
import { Link, useHref } from 'react-router-dom';
import AdminNav from './AdminNav';
import { Variables } from './Variable';
import './Medicine.css'

export class Userlist extends Component{
    constructor(props){
        super(props)

        this.state={
            users:[],
            PhotoPath:Variables.PHOTO_URL,
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
        this.setState({users:filtereddata});


    }

    changeMedicineName = (e) =>{
        this.state.MedicineName = e.target.value;
        this.Filter();
    }


    refreshlist(){
        fetch(Variables.API_URL+'User')
        .then(response=>response.json())
        .then(data=>{
            this.setState({users:data,withoutfilter:data});
        });
    }

    componentDidMount(){
        this.refreshlist();
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(Variables.API_URL+'User?id='+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
            
            
        },(error)=>{
            alert('Deleted');
        })
        .then(window.location.reload())
        }
    }

    render(){
        const
        {
            users,
        }=this.state;
        return(
            <div className='App'>
                <AdminNav/>
                <div className='titlesearch'>
                    <p className='title1'>User List</p>
                    <div className='search'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.803 13.8637C13.0959 14.1566 13.5708 14.1566 13.8637 13.8637C14.1566 13.5708 14.1566 13.0959 13.8637 12.803L12.803 13.8637ZM11.25 7C11.25 9.34721 9.34721 11.25 7 11.25V12.75C10.1756 12.75 12.75 10.1756 12.75 7H11.25ZM7 11.25C4.65279 11.25 2.75 9.34721 2.75 7H1.25C1.25 10.1756 3.82436 12.75 7 12.75V11.25ZM2.75 7C2.75 4.65279 4.65279 2.75 7 2.75V1.25C3.82436 1.25 1.25 3.82436 1.25 7H2.75ZM7 2.75C9.34721 2.75 11.25 4.65279 11.25 7H12.75C12.75 3.82436 10.1756 1.25 7 1.25V2.75ZM13.8637 12.803L11.0719 10.0113L10.0113 11.0719L12.803 13.8637L13.8637 12.803Z" fill="#2C2A2B"/>
                        </svg>
                        <input className='searchbar' onChange={this.changeMedicineName} placeholder="Search for your Medicine"/>
                    </div>
                </div>
                <div className='card'>
                <table className='table text-center'>
                        <thead className='table-light'>
                            <tr>
                                <th style={{width:'350px', fontSize:"20px"}}>
                                    Id
                                </th>
                                <th style={{fontSize:"20px"}}>
                                    Name
                                </th>
                                <th style={{fontSize:"20px"}}>
                                    Role
                                </th>
                                <th style={{fontSize:"20px"}}>
                                    Options
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user =>
                                <tr key={user.user_id}>
                                    <td style={{fontSize:"20px"}}>
                                        {user.user_id}
                                    </td>
                                    <td style={{fontSize:"20px"}}>
                                        {user.user_name}
                                    </td>
                                    <td style={{fontSize:"20px"}}>
                                        {user.user_role}
                                    </td>

                                    <td>
                                    <button type='button' className='btn btn light mr-1'
                                     onClick={()=>this.deleteClick(user.user_id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                    </svg>
                                    </button>
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
