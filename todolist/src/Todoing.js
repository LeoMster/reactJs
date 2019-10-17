import React,{Component} from 'react';

class Todoing extends Component{
    deleteBtn(index,str){
        this.props.deleteBtn(index,str);
    }
    isCompleted(index,str,e){
        let checked = e.target.checked;
        if(checked === true){
            this.props.changeTodo(index,checked,str);
            e.target.checked = false;
        }
    }
    render(){
        let doing   = this.props.doing;
        let str     = 'todo';

        return (
            <div>
                <h3>正在进行:{doing.length}</h3>
                <ul>
                    {
                        doing.map(
                            (item,index)=><li key={index}>
                                <input 
                                    type='checkbox'
                                    onClick={(e)=>this.isCompleted(index,str,e)}
                                    defaultChecked={false}
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

export default Todoing;