# react.js-course

Whatup? Here you'll get a great intro to react.

## Goal

### Blog
At the end of this workshop, we will have created a blog. Blogs are awesome for showing how much you know about shopping and putting on make-up. Coincidentally,  they're also pretty great for learning new technologies.

Our blog will consist of one page with a list of blog posts, just like this:

![Mockup of blog](https://dl.dropboxusercontent.com/u/488107/react/blog-mockup.png)

We will also add a form for creating new posts.

### Work arrangement

Our work arrangement will be like this:

* We will split in groups of two or three
* There will be a number of tasks. The first one we will do together, and the next ones you will do in your groups.
* There will be prizes for the first group to complete each task.
* There will be consolation prizes for group 2-∞ to finish each task.
* There will be an awesome prize for the group who gets the furthest.

Did everyone understand? Allright, let's go!

## Tasks

### Task 0: Hello, World!

> Do a Hello, World! in React. Use two files: `index.html` and `app.js`

We will only have two files, `index.html` and `app.js`. React plays very well with frameworks that splits your webapp into modules, like browserify, webpack and require.js, but we will not touch on that in this course.

#### index.html

```html
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

#### app.js

```js
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
``` 

#### Hello, World!

We now have a functioning website, although not the prettiest one in the world. Congrats!

![Behold, the Internet](https://dl.dropboxusercontent.com/u/488107/react/helloworld.png)

#### What was React here?

* `React.createClass({});`
* `React.renderComponent({});`
* JSX

`createClass` and `renderComponent` are the only essential parts of the API. JSX, which lets you write something which looks like HTML inside the JavaScript, is purely voluntary.

All React-components you create from now will be created using `React.createClass({})`.

### Hierarchy of Components

So, we have our first react-component up and going, but it's not very advanced yet. We need more components.

Our component tree will look like this:

* PostBox
   * PostForm
   * PostList
      * Post
      
We already made the `PostBox`. The `PostBox` has a `PostList` and a `PostForm`. The `PostList` can contain many `Posts`. This should a pretty straight forward arrangement. 

Each component is responsible for its own markup, for example: `PostList` doesn't care how `Post` decides to present itself.

Allright, let's quickly put up a skeleton for these components.

### Task 1: Structure

> Create new components `PostList`, `PostForm` and `Post` with dummy text. Place instances of `PostList` and `PostForm` inside `PostBox`. Place three instances of `Post` inside the `PostList`.


#### Cheat sheet

This is how you do it:




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