import React from 'react';

class EmployeeList extends React.Component {
    constructor() {
        super();
        this.state = {
            employeeList: []
        }
    }

    componentDidMount() {
        this.loadList();
    }

    render() {
        return (
            <ul>
                {this.state.employeeList.map((employee) => (
                    <li>
                        {employee.firstName} {employee.lastName} is {employee.age} years old!
                    </li>
                ))}
            </ul>
        );
    }

    loadList() {
        const url = "http://10.197.122.131:8080/employees/";
        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.json())
        .then((employeeList) => this.setState({employeeList}));
    }
}



export default EmployeeList;