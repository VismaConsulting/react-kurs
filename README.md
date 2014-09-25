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

* We will split in groups of two or three. Choose a group name now!
* There will be a number of tasks. The first one we will do together, and the next ones you will do in your groups.
* There will be prizes!

Did everyone understand? Allright, let's go!

## Tasks

* Task 0: Hello, World!
* Task 1: Structure
* Task 2: Properties
* Task 3: Loading content from the outside
* Task 4: Loading content from an API
* Task 5: Create a form
* Task 6: Create posts on the server
* Task 7: Style the app
* Task 8: Create a single-post page

### Task 0: Hello, World!

> Do a Hello, World! in React. Use two files: `index.html` and `app.js`

We will only have two files, `index.html` and `app.js`. (For the js-geeks: React plays very well with frameworks that splits your webapp into modules, like browserify, webpack and require.js, but we will not touch on that in this course.)

#### index.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Awesome blog</title>
</head>
<body>
    <div id="content"></div>
    
    <script src="http://fb.me/react-0.11.1.js"></script>
    <script src="http://fb.me/JSXTransformer-0.11.1.js"></script>
    <script src="http://code.jquery.com/jquery-1.10.0.min.js"></script>
    <script src="app.js" type="text/jsx"></script>
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

### What was React about this?

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

> Create new components `PostList`, `PostForm` and `Post` with dummy text. You don't need an actual form with inputs and buttons. Place instances of `PostList` and `PostForm` inside `PostBox`. Place three instances of `Post` inside the `PostList`.

#### Hints

* Check out hint 1 at [this gist](https://gist.github.com/andersem/7a5b1f07ce29e7f1b456#file-task1-hint-js) to see how to include modules in eachother.


#### End Result
![Task 1](https://dl.dropboxusercontent.com/u/488107/react/task1.png)

### Task 2: Properties

> Modify `Post` so it accepts properties, and modify `PostList` so that it provides properties for all posts. Each post should have three properties: title, author and content. 

#### Hint

* Check out hint 2 at [this gist](https://gist.github.com/andersem/7a5b1f07ce29e7f1b456#file-task2-hint-js) to see how to use properties.

#### End Result
![Task 2](https://dl.dropboxusercontent.com/u/488107/react/task2.png)


### Task 3: Load the posts from a list-variable

> Copy the post array underneath to the top of `app.js`. Now, instead of the posts you hardcoded into post-list, you will now load them from this array.

```js
var posts = [
    {title: "Post #1", author:"Anders Emil", content: "This is a typical post"},
    {title: "Post #2", author:"Anders Emil", content: "This is another typical post"},
    {title: "Post #3", author:"Anders Emil", content: "I love shopping"}
];
```

#### Hints

* Check out hint 3 at [this gist](https://gist.github.com/andersem/7a5b1f07ce29e7f1b456#file-task3-hint-js) to see how to load content from a variable.

#### End Result
![Task 3](https://dl.dropboxusercontent.com/u/488107/react/task3.png)

### Moving to a server

From now on, we will use a server for storing and loading posts. To use a server, our index.html-file needs to be hosted on a server. To do that you can use the following command: 

#### Serving your index.html file on HTTP

```bash
$ cd /path/to/web/folder/
$ python -m SimpleHTTPServer
```

If you haven't got python, ask and we will help you serve the file.

#### API

The API is fairly simple, it lets you create, get, edit and delete posts. You can read about it at the bottom of this file.


### Task 4: Load posts from the API 

> Put your group name in the url to the post-api. Use it to get posts from the server.

This one sounds trickier than the first tasks, but fear not, it's pretty ok. Just use the hints for what it's worth.

#### Hints

* Check out hint 4 at [this gist](https://gist.github.com/andersem/7a5b1f07ce29e7f1b456#file-task4-hint-js) to see how to load content from a url.

#### End Result
![Task 4](https://dl.dropboxusercontent.com/u/488107/react/task4.png)

### Task 5: Create a Form

> You should now replace the content in the render-function in `PostForm` with a real form.

#### Hints

* You don't need to handle the submit-button before the next task.
* Check out hint 5 at [this gist](https://gist.github.com/andersem/7a5b1f07ce29e7f1b456#file-task5-hint-js) to see how to make a form.

#### End Result

![Task 5](https://dl.dropboxusercontent.com/u/488107/react/task5.png)

### Task 6: Use the Form to Create Posts

> You should now create a function in `PostForm` to handle clicks on the submit-button. The submitted data should be sent in a POST-call to the API, and you should update the list of posts immediately.

#### Hints

* Check out hint 6 at [this gist](https://gist.github.com/andersem/7a5b1f07ce29e7f1b456#file-task6-hint-js) to see how to handle submits.

#### End Result

![Task 6](https://dl.dropboxusercontent.com/u/488107/react/task6.png)


### Congratulations

You now have a fully functioning blog. What more do you need? Sit down and relax, or start the bonus tasks.

## Bonus tasks

### Task 7: Poll the server every 2 seconds

> You should poll the server every 2 seconds, so your users don't need to `F5` themselves.

### Task 7: Make the Blog Look Good

> The blog looks pretty horrendous right now, can you fix that?

### Task 8: Routing

> Blogs normally let you view a single post. Can you create a page where you view a single post, and link the lists of posts to it?


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

Remember to post your content with `contentType:'application/json'`.
 
An example post-json looks like this:


```js
{
    "title": "Breaking News, Pandas Are Horny",
    "content": "That's a lie! They aren't. \nA major part of every successful species is being horny. There are certainly advantages and disadvantages to our own species’ obsession with cronking, but it was an absolute necessity for our hominid ancestors, as with all critters. If you aren’t making babies your numbers dwindle and you go extinct. Make babies! Not pandas, though. \nUnsurprisingly, these slothful bears have little interest in mating with each other. Their pitiful libido has been so frustrating to zoo keepers that scientists have done everything from showing them pornographic panda videos, to giving doses of Viagra to males. All for naught.",
    "author": "Anders Emil Salvesen",
    "lastUpdated": "2014-09-25T06:40:39.685Z",
    "created": "2014-09-25T06:40:39.685Z",
    "_id": "GP2aWMXv15PCBbpT"
}
```