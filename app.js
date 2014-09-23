/** @jsx React.DOM */

var PostBox = React.createClass({
    render: function(){
        return (
            <div id="postContainer">
                <h1>Here will be posts!</h1>
            </div>
            )
    }
});

React.renderComponent( <PostBox />, document.getElementById('content'));