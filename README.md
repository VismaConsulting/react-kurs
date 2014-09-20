# react.js-course

Whatup? Here you'll get a great intro to react.





## API

The API you can work against is located at http://course.abbsnabb.com/. 
You will have to choose a name for your group, which you will use in the url to get unique data. An example of a group name is 'horny-panda'.


|Metode| URL                                                    | What does it do?                          | Content-type     |
|------| -------------------------------------------------------|:-----------------------------------------:| ----------------:|
|GET   | http://course.abbsnabb.com/:groupName/posts            | Lists all posts                           | application/json |
|POST  | http://course.abbsnabb.com/:groupName/posts            | Creates a post.                           | application/json |
|GET   | http://course.abbsnabb.com/:groupName/posts/:postId    | Fetches the post with the given postId    | application/json |
|PUT   | http://course.abbsnabb.com/:groupName/posts/:postId    | Updates the post with the given postId    | application/json |
|DELETE| http://course.abbsnabb.com/:groupName/posts/:postId    | Deletes the post with the given postId    | application/json |
