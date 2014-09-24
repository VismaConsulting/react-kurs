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
                <Post title="Hello" author="Anders Emil" content="Dette er en post" />
                <Post title="How do you do?" author="Anders Emil" content="Dette er også en post" />
                <Post title="Fallera" author="Anders Emil" content="lorem ipsum" />
            </div>
            )
    }
});

var Post = React.createClass({
    render: function() {
        return (
            <div className="post">
                <h2 className="title">{this.props.title}</h2>
                <small className="author">{this.props.author}</small>
                <p className="content">{this.props.content}</p>
            </div>
            )
    }
});

React.renderComponent( <PostBox />, document.getElementById('content'));