import React,{Component} from 'react'
import { MDBCol, MDBInput } from "mdbreact";
import {
  Container, Form,
  Button} from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Home extends Component {
  state={
    name:'',
    post:'',
    posts: [],
  }
  componentDidMount = () =>{
    this.getDetails();
  }
  getDetails = () =>{
    axios.get('/').then((response)=>{
      const data= response.data;
      this.setState({posts:data});
      console.log('data is recieved')
    }).catch((err)=>{
      console.log(err);
    })
  }
 displayPost = (posts)=>{
   if(!posts.length) return null;

  return posts.map((post,index)=>{
     <div key={index}>
       <h2>{post.post}</h2>
       <p>{post.name}</p>
     </div>
   });
  };
  
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
          <p>Problem 1:</p>
          <Form className="form">
            <MDBCol md="8" className="post-text-center">
              <MDBInput type="textarea" label="Enter Your Answers above" rows="3" />
            </MDBCol>
            <Button className="btn-submit">Comment</Button>
          </Form>
          <Container>
        </Container>
        </Container>

    </div>
  )
}
}
export default Home;
