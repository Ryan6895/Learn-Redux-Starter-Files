import React from 'react';
import { Link } from 'react-router';
import Photo from './photo';
import Comments from './comments';


const Single = React.createClass({
  render() {

const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
console.log(i);
const post = this.props.posts[i];
console.log(post);

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props}/>
        <Comments></Comments>
      </div>
    )
  }
})
export default Single;
