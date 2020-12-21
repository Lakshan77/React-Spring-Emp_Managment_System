import React, { Component } from 'react'
import EmployeeServices from '../Services/EmployeeServices';

class ListEmployeeComponent extends Component {

    constructor (props){
        super(props);

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this)
        this.editEmployee = this.editEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }

    viewEmployee(id){
        this.props.history.push(`/view-employees/${id}`);
    }

    deleteEmployee(id){
        EmployeeServices.deleteEmployees(id).then( res =>{
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    editEmployee(id){
        this.props.history.push(`/update-employees/${id}`);
    }

    componentDidMount() {
        EmployeeServices.getEmployees().then((res) =>{
            this.setState({employees: res.data});
        });
            
    }
    
    addEmployee(){
        this.props.history.push('/add-employees');
    }

    render() {
        return (
            <div>
                <h2 className="text-center" style={{marginTop:20}}>Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                </div>
                 
                <div className='row'>
                    <table className='table table-striped table-borderd' style={{marginTop:30}}>
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead> 
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key = {employee.id}>
                                        <td> {employee.firstName} </td>
                                        <td> {employee.lastName} </td>
                                        <td> {employee.emailId} </td>
                                        <td>
                                            <button onClick={ ()=> this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft:"10px"}} onClick={ ()=> this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                            <button style={{marginLeft:"10px"}} onClick={ ()=> this.viewEmployee(employee.id)} className="btn btn-info">View</button>
                                        </td>
                                        
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListEmployeeComponent