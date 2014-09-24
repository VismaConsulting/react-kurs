/** @jsx React.DOM */

var PostBox = React.createClass({
    render: function(){
        return (
            <div className="postContainer">
                <PostList />
                <PostForm />
            </div>
            )
    }
});

var PostForm = React.createClass({
    render: function() {
        return (
            <div className="postForm">
                Here will be a form
            </div>
            )
    }
});

var PostList = React.createClass({
    render: function() {
        return (
            <div className="postList">
                <h1>Posts</h1>
                <Post />
                <Post />
                <Post />
            </div>
            )
    }
});

var Post = React.createClass({
    render: function() {
        return (
            <div className="post">
                <p>I am a post</p>
            </div>
            )
    }
});

React.renderComponent( <PostBox />, document.getElementById('content'));