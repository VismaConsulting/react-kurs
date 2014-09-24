/** @jsx React.DOM */

var posts = [
    {title: "Post #1", author:"Anders Emil", content: "This is a typical post"},
    {title: "Post #2", author:"Anders Emil", content: "This is another typical post"},
    {title: "Post #3", author:"Anders Emil", content: "I love shopping"}
];

var PostBox = React.createClass({
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handlePostSubmit: function(post) {
        var posts = this.state.data;
        var newPosts = posts.concat([post]);
        this.setState({data: newPosts});
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            contentType: 'application/json',
            type: 'POST',
            data: JSON.stringify(post),
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    render: function(){
        return (
            <div className="postContainer">
                <div className="page-header">
                    <h1>Posts</h1>
                </div>
                <PostList data={this.state.data}/>
                <hr />
                <PostForm onPostSubmit={this.handlePostSubmit} />
            </div>
            )
    }
});

var PostForm = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var title = this.refs.title.getDOMNode().value.trim();
        var author = this.refs.author.getDOMNode().value.trim();
        var content = this.refs.content.getDOMNode().value.trim();
        if (!title || !author || !content) {
            return;
        }
        this.props.onPostSubmit({title: title, author: author, content: content});
        this.refs.title.getDOMNode().value = '';
        this.refs.author.getDOMNode().value = '';
        this.refs.content.getDOMNode().value = '';
        return;
    },
    render: function() {
        return (
            <form className="postForm" role="form" onSubmit={this.handleSubmit}>
                <h3>Add new post</h3>
                <div className="form-group">
                    <label>Title</label>
                    <input className="form-control" type="text" ref="title" placeholder="Title..." />
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input className="form-control" type="text" ref="author" placeholder="Author..." />
                </div>
                <div className="form-group">
                    <textarea className="form-control" rows="3" ref="content" placeholder="Content..."></textarea>
                </div>
                <input type="submit" className="btn btn-default" value="Post" />
            </form>
            )
    }
});

var PostList = React.createClass({
    render: function() {
        var postNodes = this.props.data.map(function (post) {
            return (
                <Post title={post.title} author={post.author} content={post.content} />
                );
        });
        return (
            <div className="postList">
                {postNodes}
            </div>
            )
    }
});

var Post = React.createClass({
    render: function() {
        return (
            <div className="post panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                    <small className="author">{this.props.author}</small>
                </div>
                <div className="panel-body">
                    {this.props.content}
                </div>
            </div>
            )
    }
});

React.renderComponent( <PostBox url="http://course.abbsnabb.com/horny-panda/posts" />, document.getElementById('content'));