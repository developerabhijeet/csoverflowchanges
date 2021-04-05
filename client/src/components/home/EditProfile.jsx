import React, { useState, useEffect } from 'react';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';


import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { editUserProfile } from '../../redux/actions/users/userActions';
const EditProfile = ({ history }) => {

  const [bio, setBio] = useState('');
  const [tech, setTech] = useState('');
  const [jobtitle, setJobtitle] = useState('');

 
  const dispatch = useDispatch();

  const currentUser = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData')) : null;
  const id = currentUser._id;

 

const state = useSelector(state=>{
  return state.userLogin;
});
const {loading, userInfo, error} = state
  const updateProfile = e => {
    e.preventDefault();
    if(bio==''||jobtitle==''||tech==''){
      alert("All fields are required")
    }else{
    dispatch(editUserProfile(id, bio, tech, jobtitle));
    history.push(`/profile/${currentUser._id}`);
  }
}

  return (
    <Container className="signup">
      <h2>Edit Profile</h2>
      <Form className="form" onSubmit={updateProfile} >
    
        <Col>
          <FormGroup>
            <Label for="name">Name: {currentUser.name}</Label>

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
              onChange={e => setBio(e.target.value)}
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
              placeholder="Must Be filled"
              value={jobtitle}
              onChange={e => setJobtitle(e.target.value)}
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
              placeholder="Must be filled"
              value={tech}
              onChange={e => setTech(e.target.value)}
            />
          </FormGroup>
        </Col>


        <Button className="btn-submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default EditProfile;