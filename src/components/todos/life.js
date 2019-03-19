import React,{Component} from "react";

class Life extends Component{
    constructor(props){
        super(props);
        console.log(this.props.name);
    }
    //父组件更新子组件是否更新
    shouldComponentUpdate(nextProps,nextState){
        console.log(nextProps,nextState)
        //
        if(nextProps.name !== this.props.name){
            return true
        }else{
            return false
        }
        // console.log("shouldComponentUpdate,life");
    }
    componentWillMount(){
        console.log("componentWillMount，life");
    }
    componentDidMount(){
        console.log("componentDidMount,life");
    }
    componentWillUpdate(){
        console.log("componentWillUpdate,life");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate,life");
    }
    render(){
        console.log("render,life");
        return(
            <div>
                {this.props.name}
            </div>
        )
    } 
}
export default Life;