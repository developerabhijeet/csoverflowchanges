import React, { useState } from 'react'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './post.css';
const Search = (props) => {
  const [search, setSearch] = useState('')
  const [postDetails, setPostDetails] = useState([])
  const fetchPost = (postName) => {
    setSearch(postName)
    fetch('http://localhost:4000/app/search', {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      boyd: JSON.stringify({
        postname: postName
      })
    }).then(res => res.json())
      .then(result => {
        setPostDetails(result.post)
      })
  }
  return (
    <div>
      <Form>
        <Col>
          <Input type="text" className="w-25 searchfield" name="search" placeholder="search problem here"
            value={search} onChange={e => fetchPost(e.target.value)} />
        </Col>
      
      </Form>
      <ul>
        {postDetails.map(post => {
          return <Link to={`/post/${post._id}`}><li>{post.post}</li></Link>
        })}
      </ul>
    </div>
  )
}

export default Search;
