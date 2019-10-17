import React,{Component} from 'react';

class Todocompleted extends Component{
    deleteBtn(index,str){
        this.props.deleteBtn(index,str);
    }
    isCompleted(index,str,e){
        let checked = e.target.checked;
        if(checked === false){
            this.props.changeTodo(index,checked,str);
            e.target.checked = true;
        }
    }
    render(){
        let completed   = this.props.completed;
        let str         = 'completedTodo';

        return (
            <div>
                <h3>已经完成:{completed.length}</h3>   
                <ul>
                    {
                        completed.map(
                            (item,index)=><li key={index}>
                                <input 
                                    onClick={(e)=>this.isCompleted(index,str,e)}
                                    type='checkbox'
                                    defaultChecked={true}
                                />
                                    {item}
                                <button onClick={()=>this.deleteBtn(index,str)}>-</button>
                            </li>
                        )
                    }
                </ul>    
            </div>
        )
    }
}

export default Todocompleted;