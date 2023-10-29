import React, { Component } from 'react';
import AdminNav from './AdminNav';
import { Variables } from './Variable';
import './Meddetail.css';
import { AdminMed } from './AdminMed';



export class Admin extends Component{
    constructor(props){
        super(props)

        this.state={
            medicines:[],
            modalTitle:"",
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

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch(Variables.API_URL+'Medicine?id='+id,{
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
            medicines,
        }=this.state;
        return(
            <div className='App'>
                <AdminNav/>
                <div>
                    <div className='titlebtn'>
                        <p className='title1'>Medicines List</p>
                        <a href="/admin/add"><span className="addmed">Add Medicine</span></a>
                    </div>

                    {/* <a style={{marginLeft:"10px"}} href="/admin/userlist
                    " class="btn btn-success btn-sm float-right"><span className="add-btn">
                     User list
                    </span></a> */}
                                  
                  <AdminMed/>

                </div>
            </div>
        )
    }    
}
