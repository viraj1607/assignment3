import { Component } from "react";
import List from "../list/list";
import './feedback.css'

class Feedback extends Component{
    state={
        name:"",
        dept:"",
        rating:"",
        details:[],
        list:false
    }

    handleChange=(e)=>{
        this.setState({[e.target.id]:e.target.value})
    }

    handleForm=(e)=>{
        e.preventDefault();
        const details=[...this.state.details];
        const detail={name:this.state.name,dept:this.state.dept,rating:this.state.rating}
        details.push(detail);
        this.setState({details,list:true,name:"",dept:"",rating:""})
    }

    showList=()=>{
        this.setState({list:!this.state.list})
    }

    render(){
        return(
            <div>
                {this.state.list?
                <List details={this.state.details} showList={this.showList} />:
                <div className="form-container">
                    <h1>EMPLOYEE FEEDBACK FROM</h1>
                    <form>
                        Name:
                        <input vlaue={this.state.name} id="name" onChange={this.handleChange}/>
                        <br/>
                        Department:
                        <input value={this.state.dept} id="dept" onChange={this.handleChange}/>
                        <br/>
                        Rating:
                        <input value={this.state.rating} id="rating" onChange={this.handleChange}/>
                        <br/>
                        <button onClick={this.handleForm}>Submit</button>
                    </form>
                </div>
                }   
            </div>
        )
    }
}

export default Feedback