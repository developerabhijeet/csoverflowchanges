import React,{useState} from 'react'
import {

  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
const Reset = () => {
  const [email, setEmail] = useState("")
  const postData=()=>{
    fetch('http://localhost:4000/app/resetpassword',{
      method: "post",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email
      })
    }).then(res=>res.json())
      .then(data=>{
        alert("Check your mail for password reset link")
            console.log(data.message)
            console.log(data)
        
      })
    
  }
  return (
    <Container className="login">
      
    <h2>Reset Password:</h2>
    <Form className="form">
      <Col>
        <FormGroup>
          <Label>Email*</Label>

          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="myemail@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        
         
        </FormGroup>
      </Col>
      <Button onClick={postData}>Send Email</Button>
      </Form>
      </Container>
  )
}

export default Reset;
