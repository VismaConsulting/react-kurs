# react.js-course

Whatup? Here you'll get a great intro to react.

## Goal

At the end of this workshop, we will have created a blog. Remember blogs? They were pretty cool back in the day. \
What more; they're pretty great for learning new technologies.

Our blog will consist of one page with a list of blog posts, just like this:

![Mockup of blog](https://dl.dropboxusercontent.com/u/488107/react/blog-mockup.png)

We will also have a form for adding posts.


## Fast Intro

We will only have two files, index.html and app.js. React plays very well with frameworks that splits your webapp \
into modules, like browserify, webpack and require.js, but we will not touch on that in this course.

### index.html

    :::html
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Awesome blog</title>
        <script src="http://fb.me/react-0.11.1.js"></script>
        <script src="http://fb.me/JSXTransformer-0.11.1.js"></script>
        <script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
        <script src="app.js" type="text/jsx"></script>
    </head>
    <body>
    <div id="content"></div>
    </body>
    </html>
    ```

### app.js


    :::javascript
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
    

### Hello, World!

We now have a functioning website, although not the prettiest one in the world. Congrats!

![Behold, the Internet](https://dl.dropboxusercontent.com/u/488107/react/helloworld.png)

### What was react here?

* React.createClass({});
* React.renderComponent({});
* JSX

CreateClass and renderComponent are the only essential parts of the API. JSX, which lets you write something similar \
to HTML inside the JavaScript, is purely voluntary.

## Hierarchy of Components

So, we have our first react-component up and going, but it's not very advanced yet.



## API

The API you can work against is located at http://course.abbsnabb.com/. 
You will have to choose a name for your group, which you will use in the url to get unique data. An example for a group name is 'horny-panda'.


|Metode| URL                                                    | What does it do?                          | Content-Type     |
|------| -------------------------------------------------------|-------------------------------------------| -----------------|
|GET   | http://course.abbsnabb.com/:groupName/posts            | Lists all posts                           | application/json |
|POST  | http://course.abbsnabb.com/:groupName/posts            | Creates a post.                           | application/json |
|GET   | http://course.abbsnabb.com/:groupName/posts/:postId    | Fetches the post with the given postId    | application/json |
|PUT   | http://course.abbsnabb.com/:groupName/posts/:postId    | Updates the post with the given postId    | application/json |
|DELETE| http://course.abbsnabb.com/:groupName/posts/:postId    | Deletes the post with the given postId    | application/json |