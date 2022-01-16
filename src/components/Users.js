function Users(props) {
    return (
      <div >
        {
            props.users.map(user=>{
                return <h1 key={user.id}>{user.name}</h1>
            })
        }
      </div>
    );
  }
  
  export default Users;