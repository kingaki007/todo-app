import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators } from 'redux';
import {selectTask} from '../actions/index';

class TaskList extends Component{

    renderList(){
        return this.props.tasks.map((task)=>{
            return (
                <li
                 onClick = { ()=> this.props.selectTask(task) }
                 key={task.name} className="list-group-item">{task.name}</li>
            )
        })
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectTask: selectTask},dispatch);
}

function mapStateToProps(state){
    return {
        tasks : state.tasks
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);