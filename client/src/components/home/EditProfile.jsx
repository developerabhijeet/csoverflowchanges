import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const EditProfile = (props) => {
 

    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [image, setImage] = useState('');
    const [tech, setTech] = useState('');
    const [jobtitle, setJobtitle] = useState('');
    const ids = useParams();
    console.log(ids)
    const updateProfile=(e)=>{
      e.preventDefault();
      console.log(image)
      fetch(`http://localhost:4000/app/editprofile/${ids.id}`, {
        method: 'put',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer" + localStorage.getItem('jwt')
        },
        body: JSON.stringify({
          id: props.user._id,
          name,
          bio,
          tech,
          jobtitle,
          image
        })
      }).then(res => res.json())
        .then(result => {
          console.log(result)
          return result
          
        }).catch(err=>{
          console.log(err)
        })
  }
  return (
<Container className="signup">
        <h2>Edit Profile</h2>
        <Form className="form" >
          <Col>
            <FormGroup>
              <Label for="name">Name*</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Full Name"
                value={name}
                onChange={e=>setName(e.target.value)}
                />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label>Bio*</Label>
              <Input
                type="text"
                name="bio"
                id="bio"
                placeholder="Enter a breif Introduction about Yourself"
                value={bio}
                onChange={e=>setBio(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Job Title*</Label>
              <Input
                type="text"
                name="jobtitle"
                id="jobtitle"
                placeholder="Sotware Developer"
                value={jobtitle}
                onChange={e=>setJobtitle(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Technology*</Label>
              <Input
                type="text"
                name="tech"
                id="tech"
                placeholder="ReactJS, NodeJS, Python "
                value={tech}
                onChange={e=>setTech(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label>Profile Picture*</Label>
              <Input
                type="file"
                name="image"
                id="image"
                onChange={e=>setImage(e.target.files[0])}
              />
            </FormGroup>
          </Col>


          <Button className="btn-submit" onClick={updateProfile}>Submit</Button>
        </Form>
      </Container>
  )
}

export default EditProfile;