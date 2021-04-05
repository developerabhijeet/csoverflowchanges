import React, { useState, useEffect, Component, useContext } from 'react'
import { useParams } from 'react-router-dom';
import {
  Container, Col, Label,
  Button, Form
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './post.css';
import { useSelector } from 'react-redux';
const View = (props) => {
  //console.log(props.user._id)
  const ids = useParams()
  const [posts, setPosts] = useState([]);
  const [data, setData] = useState([]);
  const state = useSelector(state=>{
    return state.userLogin;
  });
  const {loading,userInfo, error} = state
 // console.log(state);

  useEffect(() => {
    fetch(`http://localhost:4000/app/post/${ids.id}`)
      .then(res => res.json()
        .then(res => {
          setPosts(res)
        }).catch(e => {
          console.log(e)
        }))
  }
  );

  const likePost = (id, user_Id) => {
    fetch('http://localhost:4000/app/like', {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        postId: id,
        user_id: user_Id
      })
    }).then(res => res.json())
      .then(result => {

        const newData = data.map(post => {
          if (post._id == result._id) {
            return result

          } else {
            return post

          }
        })
        setData(newData)
      }).catch(err => {
        console.log(err)
      })
  }


  const unlikePost = (id, user_Id) => {
    fetch('http://localhost:4000/app/unlike', {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        postId: id,
        user_id: user_Id

      })
    }).then(res => res.json())
      .then(result => {
        console.log(result.likes)
        const newData = data.map(posts => {
          if (posts._id == result._id) {
            return result
          } else {
            return posts
          }
        })
        setData(newData)
      }).catch(err => {
        console.log(err)
      })
  }
  const makeComment = (texts, post_id, user_Name, user_Id) => {
    fetch('http://localhost:4000/app/comment', {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer" + localStorage.getItem("jwt")
      },
      body: JSON.stringify({
        postId: post_id,
        user_name: user_Name,
        text: texts,
        user_id: user_Id
      })
    }).then(res => res.json())
      .then(result => {
        console.log(result)
        const newData = data.map(posts => {
          if (posts._id == result._id) {
            return result
          } else {
            return posts
          }

        })
        setData(newData)
      }).catch(err => {
        console.log(err);
      })
  }
 

  return (
    <Container className="container">
      <Col>
        <Label className="font-weight-bold posts">{posts.post}</Label>
      </Col>
      <Col>
        <Label className="font-weight-bold details">DOMAIN: </Label><Label className="details">  {posts.domain}</Label>
      </Col>
      <Col>
        <Label className="font-weight-bold details">POSTED BY: </Label><Label className="details">{posts.name}</Label>
      </Col>
      <Col>
        <Label className="font-weight-bold details">POSTED ON: </Label>
        <Label className="details">
        {posts.date}</Label>
      </Col>
      <Col>
        <Label className="font-weight-bold details">LIKES: </Label>
        <Label className="details">{
          posts.likes == undefined ?
            <p>No Likes Yet</p>
            :
            <p>{posts.likes.length}<br /></p>}
        </Label>
      </Col>
      <Col>
        {
          posts.likes == undefined ?
            <p>No likes Yet</p>

            :
            posts.likes.includes(state.userInfo.user._id) ?
              <Button color="danger"
                onClick={() => { unlikePost(posts._id, state.userInfo.user._id) }}>Unlike</Button>
              :
              <Button color="success"
                onClick={() => { likePost(posts._id, state.userInfo.user._id) }}>Like</Button>
        }

      </Col>

      <Col>

        <Form className="form formstyle" onSubmit={(e) => {
          e.preventDefault()
          makeComment(e.target[0].value, posts._id, state.userInfo.user.name, state.userInfo.user._id)
        }}>
          <textarea className="comment-area" col="500" rows="10"></textarea><br />
          <Button className="" color="primary"> Comment</Button>
        </Form>
      </Col>
      <Col className="show-comment">
        {posts.comments == undefined || null ? <h3>No Comments Yet</h3>
          :
          posts.comments.map(record => {
            return (
              <h6 key={record._id}>
                <span className="posted-by">
                  <Link to={`/user/${record.userInfo}`}><strong>{record.postedBy}</strong></Link>
                </span>

                <br />
                <p className="comment">{record.text}</p></h6>
            )
          })
        }
      </Col>
    </Container>


  )
}
export default View;
/*


*/