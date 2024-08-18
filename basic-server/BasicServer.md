# How to build a basic server without ExpressJS

You may be asking yourself, why do I need to know how to build a node server without ExpressJS? Or why would I want to build a server without Express? It does so much of the heavy lifting, and with so many people relying on it, it’s unlikely it’s going to be going away anytime soon. And that’s true, as well as a million other reasons. That being said, there are always going to be a million reasons to not do something. At the same time, there are going to be benefits to building a server without Express. In this instance, some of those are:

- No depending on dependencies
- It’s a good skill to have
- Have better knowledge about how servers work.

So with that out of the way, let’s build the server.

## Notes

Heads up,While I’m trying to keep this tutorial beginner-friendly, it still presupposes you have some knowledge of javascript.

If you get lost at any moment, you can refer to the code [here](https://github.com/Holgermueller/demo-code-files/blob/master/basic-server/server.js).

## The Process

1. First we have to create a file where our server is going to live, which we’re going to do in whatever your favorite text editor is. While you can call the file anything you want, the conventions for naming this kind of file seem to be calling it server.js or app.js. For the purposes of this tutorial, we’ll call this file server.js.

2. Now that we have the file that’s going to be the server, we need to require HTTP as a variable at the top of our file. This is what we’re going to use to handle the requests and responses we make with the server. The cool thing is that HTTP comes with Node, hence no need to download any dependencies. Still, we need to say that we’re going to use it using the require() method.

```
const HTTP = require('http');
```

3. We also need to declare which port we’re going to use. There are literally thousands of ports we can use, and there’s not enough time or space to go into all of them here. So for brevity’s sake, we’re going to use port 8080, since that’s one of the ones used in tutorials like this. Plus, setting our port as a variable will allow us to reuse it throughout the server more easily, if we need to reuse it.

```
const PORT = 8080;
```

4. With all of that set up, we can create the server. Within HTTP, there’s a method called createServer(). We’ll use that to create it.

```
HTTP.createServer()
```

5. Now that’s all we need to create the server. But we want it to do something. To accomplish this, within createServer, we’ll create an anonymous function with two arguments, the request and the response. We’ll shorten them to req and res. Within our curly braces, we use the writeHead() method to send our response header and display some HTML. We’ll set it to 200, and if it’s successful it’ll display an HTML page for us. Then we’re going to want it to have something on the screen, so since this is a tutorial, let’s have it say ‘Hello world!’ by using the write() method. Then we want to end the response using the end() method.

```
HTTP.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("Hello world!");
})
```

6. All that set up, we need to listen by attaching the listen() method at the end of our function and pass our PORT into it.

```
listen(PORT)
```

7. Now, we can run our server just like it is and, barring any errors, it should run just fine. But I like to do a little more, so I know things are working. To do this, after our PORT, I’ll pass another parameter in the shape of another anonymous function. In this function, all we’re going to do is console.log() a message to ourselves. Since we’re listening, let’s make the message “Server listening on port: “ + PORT, using our port variable from before. Told you we’d get some use out of that variable.

```
listen(PORT, () => {
  console.log("Server listening on Port: " + PORT);
});
```

8. In all, your server should look something like this:

```
const HTTP = require("http");
const PORT = 8080;

HTTP.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("Hello world!");
}).listen(PORT, () => {
  console.log("Server listening on Port: " + PORT);
});
```

9. Now in your terminal you want to start the server. To do that you run: node whateverTheNameOfMyFileIs.js, so for this example we run node server.js. Once the server starts running, in the terminal, you should see the result of the console log telling you the file is running. At the same time, go to your browser and go to localhost:8080. You should see Hello world! in the upper left-hand corner of your browser.

And that's it, that's how to build a basic server with JavaScript.
