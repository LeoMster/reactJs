import React,{Component} from 'react';
import Todoinput from './Todoinput';
import Todoing from './Todoing';
import Todocompleted from './Todocompleted';

class Todolist extends Component{
    constructor(){
        super();
        this.state = {
            todo: [],
            completedTodo: []
        };
    }
    
    componentWillMount(){
        var todoArr = JSON.parse(localStorage.getItem('todo'));
        var completedArr = JSON.parse(localStorage.getItem('completed'));
        if(todoArr){
            this.setState({
                todo: todoArr
            });
        }
        if(completedArr){
            this.setState({
                completedTodo: completedArr
            });
        }
    }
    
    componentDidUpdate(){
        localStorage.setItem('todo',JSON.stringify(this.state.todo));
        localStorage.setItem('completed',JSON.stringify(this.state.completedTodo));
    }

    getTodo(val){
        let _todo = [...this.state.todo];
        _todo.push(val);
        this.setState({
            todo: _todo
        });
    }

    deleteBtn(index,str){
        let arr = [...this.state[str]];
        arr.splice(index,1);
        this.setState({
            [str]: arr
        });
    }

    changeTodo(index,checked,str){
        if(checked === true){  
            let item = this.state.todo[index];
            let _completedTodo = [...this.state.completedTodo];
            _completedTodo.push(item);
            this.setState({
                completedTodo: _completedTodo
            });
            this.deleteBtn(index,str);
        }else if(checked === false){
            let item = this.state.completedTodo[index];
            let _todo = [...this.state.todo];
            _todo.push(item);
            this.setState({
                todo: _todo
            });
            this.deleteBtn(index,str);
        }
    }
    
    render(){
        return (
            <div>
                <Todoinput 
                    getTodo={(val)=>this.getTodo(val)}
                />
                <Todoing 
                    doing={this.state.todo}
                    deleteBtn={(index,str)=>this.deleteBtn(index,str)}
                    changeTodo={(index,checked,str)=>this.changeTodo(index,checked,str)}
                />
                <Todocompleted 
                    completed={this.state.completedTodo}
                    deleteBtn={(index,str)=>this.deleteBtn(index,str)}
                    changeTodo={(index,checked,str)=>this.changeTodo(index,checked,str)}
                />
            </div>
        )
    }
}

export default Todolist;