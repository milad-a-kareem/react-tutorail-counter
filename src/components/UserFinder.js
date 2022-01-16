import {useEffect, useState, Component} from 'react'
import Users from './Users'

class UsersFinder extends Component {

    constructor(){
        super();
        this.state = {
            findedUsersState: this.DUMMY_USERS,
            searchTextState: ''
        }
        console.log("constructor fired")
    }

    DUMMY_USERS = [
        {id: '001', name:'Milad'},
        {id: '002', name:'Mohammed'},
        {id: '003', name:'Hana'},
        {id: '004', name:'Ahamed'},
    ]

    name(){

    }

    componentDidMount() {
        console.log("componentDidMount fired")
    }


    onChangeHandler = (event)=>{
        this.setState({searchTextState: event.target.value})
    }

    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate fired")
        if(prevState.searchTextState !== this.state.searchTextState){
            this.setState({findedUsersState: this.DUMMY_USERS.filter(user => user.name.includes(this.state.searchTextState))})
        }
    }

    componentWillUnmount(){
        console.log("component will unmount soon fired")
    }

    render(){
        return (
          <div>
            <input type='text' onChange={this.onChangeHandler}/>
            <Users users={this.state.findedUsersState}/>
          </div>
        );
        
    }
  }
  
  export default UsersFinder;




//   function UsersFinder() {
//     const DUMMY_USERS=[
//         {id: '001', name:'Milad'},
//         {id: '002', name:'Mohammed'},
//         {id: '003', name:'Hana'},
//         {id: '004', name:'Ahamed'},
//     ]

//     const [findedUsersState, SetFindedUsersState]=useState(DUMMY_USERS)
//     const [searchTextState, SetSearchTextState]=useState('')

//     const onChangeHandler = (event)=>{
//         SetSearchTextState(event.target.value)
//     }

//     useEffect(
//         ()=>{
//             SetFindedUsersState(DUMMY_USERS.filter(user => user.name.includes(searchTextState)))
//         }
//         ,[searchTextState])

//     return (
//       <div>
//         <input type='text' onChange={onChangeHandler}/>
//         <Users users={findedUsersState}/>
//       </div>
//     );
//   }