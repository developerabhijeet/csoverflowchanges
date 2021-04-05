import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';


import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { editUserProfile } from '../../redux/actions/users/userActions';
const EditProfile = ({ history }) => {

  //const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  //const [image, setImage] = useState('');
  const [tech, setTech] = useState('');
  const [jobtitle, setJobtitle] = useState('');
  // const [user, setUser] = useState([])
 
  const dispatch = useDispatch();

 
  // useEffect(() => {
  //   fetch(`http://localhost:4000/app/profile/${ids.id}`)
  //     .then(res => res.json()
  //       .then(res => {
  //         setUser(res)
  //       }).catch(e => {
  //         console.log(e)
  //       }))
  // }
  // );
  const userLogin = useSelector(state =>{ 
    console.log(state)
    return state.userLogin
   
    });
 
  const { userInfo } = userLogin;
  const id = userInfo?.user?._id

  const updateProfile = e => {
    e.preventDefault();
    if(bio==''||jobtitle==''||tech==''){
      alert("All fields are required")
    }else{
    dispatch(editUserProfile(id, bio, tech, jobtitle));
    //history.push('/')
  }
}
  // const uploadPic = (e)=>{
  //   e.preventDefault();
  //   console.log(image)
  //       fetch('http://localhost:4000/app/upload', {
  //     method: 'put',
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": "Bearer" + localStorage.getItem('jwt')
  //     },
  //     body: JSON.stringify({
  //       image:image,
  //       id: props.user._id,

  //     })
  //   }).then(res => res.json())
  //     .then(result => { 
  //       console.log(result)
  //       return result

  //     }).catch(err=>{
  //       console.log(err)
  //     })

  // }
  //   const updateProfile=(e)=>{
  //     e.preventDefault();
  //     if(bio==""||tech==""||jobtitle==""){
  //       alert("all fields must be filled")
  //     }else{
  //     fetch(`http://localhost:4000/app/editprofile`, {
  //       method: 'put',
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": "Bearer" + localStorage.getItem('jwt')
  //       },
  //       body: JSON.stringify({
  //         id: props.user._id,
  //         name,
  //         bio,
  //         tech,
  //         jobtitle,image

  //       })
  //     }).then(res => res.json())
  //       .then(result => {
  //         console.log(result)
  //         return result

  //       }).catch(err=>{
  //         console.log(err)
  //       })
  //     }
  // }
  return (
    <Container className="signup">
      <h2>Edit Profile</h2>
      <Form className="form" onSubmit={updateProfile} >
        <Col>
          <FormGroup>
            <Label for="name">Name: {userInfo?.user?.name}</Label>

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

        {/* <Col>
            <FormGroup>
              <Label>Profile Picture*</Label>
              <Input
                type="file"
                name="image"
                id="image"
                onChange={e=>setImage(e.target.files[0])}
              />
            </FormGroup>
            <Button className="btn-submit" onClick={uploadPic}>Upload</Button>
          </Col> */}


        <Button className="btn-submit">Submit</Button>
      </Form>
    </Container>
  )
}

export default EditProfile;