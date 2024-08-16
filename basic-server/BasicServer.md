# How to build a basic server without ExpressJS

You may be asking yourself, why do I need to know how to build a node server without ExpressJS? Or why would I want to build a server without Express? It does so much of the heavy lifting, and with so many people relying on it, it’s unlikely it’s going to be going away anytime soon. And that’s true. In fact, for those reasons, ExpressJS is the de facto framework for building servers in Node. Still knowing how to do something without a framework is a good skill to have. Sure there are some negatives to this. Those include but are not limited to:

- It can be intimidating
- You have to do more work

That being said, there are always going to be a million reasons to not do something. At the same time, there are going to be reasons to do that thing. In this instance, some of those are:

- No depending on dependencies
- It’s a good skill to have
- Have better knowledge about how servers work.

Let’s build the server.

Heads up,While I’m trying to keep this tutorial beginner-friendly, it still presupposes you have some knowledge of javascript.

First we have to create a file where our server is going to live, which we’re going to do in whatever your favorite text editor is. While you can call the file anything you want, the conventions for naming this kind of file seem to be calling it server.js or app.js. For the purposes of this tutorial, we’ll call this file server.js.

Now that we have the file that’s going to be the server, we need to require HTTP as a variable at the top of our file. This is what we’re going to use to handle the requests and responses we make with the server. The cool thing is that HTTP comes with Node. We need to say that we’re going to use it using the require() method.

We also need to declare which port we’re going to use. There are literally thousands of ports we can use, and there’s not enough time or space to go into all of them here. So for brevity’s sake, we’re going to use port 8080, since that’s one of the ones used in tutorials like this. Plus, setting our port as a variable will allow us to reuse it throughout the server more easily, if we need to reuse it.

With all of that set up, we can create the server. Within HTTP, there’s a method called createServer(). We’ll use that to create it.

Now that’s all we need to create the server. But we want it to do something. To accomplish this, within createServer, we’ll create an anonymous function with two arguments, the request and the response. We’ll shorten them to req and res. Within our curly braces, we use the writeHead() method to send our response header and display some HTML. We’ll set it to 200, and if it’s successful it’ll display an HTML page for us. Then we’re going to want it to have something on the screen, so since this is a tutorial, let’s have it say ‘Hello world!’ by using the write() method. Then we want to end the response using the end() method.

All that set up, we need to listen by attaching the listen() method at the end of our function and pass our PORT into it. Now, we can run this server just like it is and barring any errors, it should run just fine. But I like to do a little more, so I know things are working. To do this, after our PORT, I’ll pass another parameter in the shape of another anonymous function. In this function, all we’re going to do is console.log() a message to ourselves. Since we’re listening, let’s make the message “Server listening on port: “ + PORT, using our port variable from before. Told you we’d get some use out of that variable.

Now in your terminal you want to start the server. To do that you run: node whateverTheNameOfMyFileIs.js, so for this example we run node server.js. In the terminal, you should see the result of the console log telling you the file is running. Now go to your browser and go to localhost:8080. You should see Hello World in the upper left-hand corner of your browser.

You may be thinking, okay I have a basic server, what can I do with it? The short answer is pretty much whatever you want. Let’s try an HTML page.

Create an HTML document and call it whatever you want and put whatever you want in it. I’m just going to have an H1 element with the phrase ‘This is the html file!’ as the text.

Since we’re not going to use other files, we need to access the file system, since that’s what we’re not creating, of our app. To do this we use the FS module, which also comes with Node. As you may have guessed, FS stands for file system. There’s a lot you can do with it. We’re barely going to scratch the surface here, so feel free to delve into it more.

Back at the top of our file, we need to require the FS module and store it in a variable, just like we did with the HTTP module. Not that we have this variable, we’re going to include it in createServer(). We do this with the line of code: fs.readFile(‘index.html’, (err, data) =>

As you can tell, this is another anonymous function. In the curly braces of this function, we want to include the code we wrote before, with a little tweaking. The line res.end(), we now want to return this.

Now that we’ve made these changes, restart your server and go to localhost in your browser. If all works well, you should be seeing the contents of your HTML file on the screen. How cool is that?
