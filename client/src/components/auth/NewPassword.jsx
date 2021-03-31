import React,{useState} from 'react'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { useParams } from 'react-router-dom';


const NewPassword = () => {
  const {token} = useParams();
  const [password, setPassword] = useState("")
  const postData=()=>{
    fetch('http://localhost:4000/app/newpassword',{
      method: "post",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        password,
        token
      })
    }).then(res=>res.json())
      .then(data=>{
        alert("Your password changed successfully!")
            console.log(data.message)
            console.log(data)
            
        
      })
    
  }
  return (
    <Container className="login">
      
    <h2>Change Password:</h2>
    <Form className="form">
    <Col>
          <FormGroup>
            <Label for="examplePassword">Password*</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Enter Your New Password Here"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            </FormGroup>
        </Col>
      <Button onClick={postData}>Change Password</Button>
      </Form>
      </Container>
  )
}


export default NewPassword;
