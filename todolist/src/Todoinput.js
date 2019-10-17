import React,{Component} from 'react';

class Todoinput extends Component{
    getTodo(e){
        if(13 === e.keyCode){
            if(e.target.value === ''){
                alert('请填写此字段！');
                return;
            }
            this.props.getTodo(e.target.value);
            e.target.value = '';
        }
    }
    render(){
        return (
            <div>
                <h3>Todolist:</h3>
                <input
                    placeholder='添加todo'
                    type='text' 
                    onKeyDown={(e)=>this.getTodo(e)}
                />
            </div>
        )
    }
}

export default Todoinput;