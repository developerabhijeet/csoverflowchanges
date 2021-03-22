import React,{Component} from 'react'
import { MDBCol, MDBInput } from "mdbreact";
import {
  Container, Form,
  Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DataTable from './data-table';
class Home extends Component {
  constructor(props){
    super(props);
    this.state = { postsCollection:[] };
  }  

componentDidMount = () =>{
    axios.get('http://localhost:4000/app')
    .then(res => {
        this.setState({ postsCollection: res.data });
    })
    .catch(function (error) {
        console.log(error);
    })
}
dataTable() {
  return this.state.postsCollection.map((data, i) => {
      return <DataTable obj={data} key={i} />;
  });
}

  render(){
   console.log(this.state);
    return (
    <div>
      <center>
        <div className="post-link">
      <h6 className="home-text"><Link to="/post">Post Your Errors buddy!</Link></h6>
        </div>
      </center>
      <Container className="home">
          
          <Container>
       {this.dataTable()}
        </Container>
 

        </Container>

    </div>
  )
}
}

export default Home;
