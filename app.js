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
    render: function(){
        return (
            <div className="postContainer">
                <PostList data={this.state.data}/>
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
        var postNodes = this.props.data.map(function (post) {
            return (
                <Post title={post.title} author={post.author} content={post.content} />
                );
        });
        return (
            <div className="postList">
                <h1>Posts</h1>
                {postNodes}
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

React.renderComponent( <PostBox url="http://course.abbsnabb.com/horny-panda/posts" />, document.getElementById('content'));