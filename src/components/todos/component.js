import React,{Component} from "react"
import {connect} from "react-redux";
import {ADD_LIST_ITEM,DELETE_LIST_ITEM,CHANGE_INPUT_VALUE} from "../../store/actions_types"
class Compon extends Component{
    render(){
      const props = this.props;
        return (
            <div>
                <input type="text" onChange={this.props.handleAddInputValue} value={this.props.inputVal}/>
                <button onClick={this.props.handleAddClick}>add list</button>
                <ul>
                    {
                      this.props.list.map(function(item,index){
                        return <li key={index} onClick={(index)=>{props.handleDeleteItem(index)}}>{item}</li>
                      })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
  return {
      list:state.list,
      inputVal : state.inputVal
  }
}

//store.dispatch 挂在到props 
const mapDispatchToProps = (dispatch)=>{
  return {
    handleAddInputValue(e){
        //改变函数实现一秒以后
        const action = {
          type:CHANGE_INPUT_VALUE,
          value:e.target.value
        }
        console.log(e.target.value)
        dispatch(action);
    },
    handleAddClick(){
      const action = {
        type:ADD_LIST_ITEM
      }
      dispatch(action);
    },
    handleDeleteItem(index){
      const action = {
        type:DELETE_LIST_ITEM,
        index:index
      }
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Compon);