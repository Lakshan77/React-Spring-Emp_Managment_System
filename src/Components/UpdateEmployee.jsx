import React, { Component } from 'react'
import EmployeeServices from '../Services/EmployeeServices';

export default class UpdateEmployee extends Component {
    constructor(props){
        super(props)

        this.state ={
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.ChangeFirstNameHandler = this.ChangeFirstNameHandler.bind(this);
        this.ChangeLastNameHandler = this.ChangeLastNameHandler.bind(this);
        this.ChangeEmailIdHandler = this.ChangeEmailIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeServices .getEmployeeById(this.state.id).then((res)=>{
            let employee = res.data;
            this.setState({firstName: employee.firstName, lastName:employee.lastName, emailId:employee.emailId});
        });
    }

    updateEmployee = (e)=>{
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};

        EmployeeServices.updateEmployee(employee, this.state.id).then(res =>{
            this.props.history.push('/employees');
        });
       
    }

    ChangeFirstNameHandler=(event)=>{
        this.setState({firstName: event.target.value});
    } 

    ChangeLastNameHandler=(event)=>{
        this.setState({lastName: event.target.value});
    }
    ChangeEmailIdHandler=(event)=>{
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{marginTop:"20px"}}>
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name: </label>
                                        <input placeholder="FirstName" name="firstName" className="form-control" 
                                        value={this.state.firstName} onChange={this.ChangeFirstNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name: </label>
                                        <input placeholder="LastName" name="lastName" className="form-control" 
                                        value={this.state.lastName} onChange={this.ChangeLastNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email ID: </label>
                                        <input placeholder="email ID" name="emailId" className="form-control" 
                                        value={this.state.emailId} onChange={this.ChangeEmailIdHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
