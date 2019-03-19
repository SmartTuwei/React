import React,{Component} from "react";
import Life from "./life"
import axios from "axios"
//import store from "../../store/store" //导入store 创库/
import Compon from "./component"


class TodoList extends Component{
    state = {
        name:"生命周期组件"
    }
    handleClick = ()=>{
        const addval = this.state.inputVal;
        this.setState({
            list : [...this.state.list,addval],
            inputVal:""
        })
    }
    async getInitData(){
        try{
            let res = await axios.get("./list.json");
            this.setState((prevState)=>({
                list:res.data
            }))
        }catch(err){
            console.log(err);
        }
    }
    // handleDeleteItem(index){

    // }
    componentDidMount(){
        //  this.getInitData();
    }   
    render(){
        return(
            <div style={{padding:"30px"}}>
                <Life name={this.state.name} />
                <Compon />
            </div>
        )
    } 
}
export default TodoList;