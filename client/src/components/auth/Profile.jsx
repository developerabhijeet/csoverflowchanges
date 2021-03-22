import React,{Component} from 'react'
import UserTable from './UserTable';
import axios from 'axios';
class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { usersCollection:[] };
  }  

componentDidMount = () =>{
    axios.get('http://localhost:4000/app/profile')
    .then(res => {
        this.setState({ usersCollection: res.data });
    })
    .catch(function (error) {
        console.log(error);
    })
}
dataTable() {
  return this.state.usersCollection.map((data, i) => {
      return <UserTable obj={data} key={i} />;
  });
}
  render(){
  return (
    <div className="profile">
    {this.dataTable()}
         </div>
  )
}
}
export default Profile;
