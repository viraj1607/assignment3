import { Component } from "react";
import './list.css'

class List extends Component{
    render(){
        return(
            <div className="list-container">
                <h1>EMPLOYEE FEEDBACK DATA</h1>
                <ul>
                    {this.props.details.map((value,i)=>{
                        return(
                            <li key={i}>Name:{value.name} | Department:{value.dept} | Rating:{value.rating}</li>
                        )
                    })}
                </ul>
                <button onClick={this.props.showList}>Go Back</button>
            </div>
        )
    }
}

export default List