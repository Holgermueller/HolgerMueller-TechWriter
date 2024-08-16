# How to convert a CSV file to a JSON object with JavaScript on the client side

A month or so ago, I was working on a project that required using data in a CSV file to create options on an HTML selector. (You can check out that project [HERE](https://github.com/Holgermueller/courseraweatherapp)) I knew I could manually, painstakingly, hardcode the data into the HTML element. (And in the end, it might have even been the faster option.) But I didn’t want to do that. I knew there had to be a way to convert the data in the CSV file to a JSON object dynamically. However, in my research, I found a lot of solutions for how to do this in the backend, but nothing really for the frontend. (If there is something else out there that shows how to do this, I missed it, most likely due to my lack of patience.) It was only through a few lucky guesses that I was able to come up with this solution.

## What do CSV and JSON mean?

I’m not going to go too deep into the weeds about what CSV and JSON are. If you’re reading this, you probably know already, and you can feel free to skip ahead to the process. That said, here are some brief explanations.

### CSV

For those who don’t know, CSV stands for Comma Separated Value. It’s essentially a file that stores data in a table format. Here's an example:

```
latitude,longitude,city,country
52.367,4.904,Amsterdam,Netherlands
39.933,32.859,Ankara,Turkey
56.134,12.945,Åstorp,Sweden
37.983,23.727,Athens,Greece
```

As you can see, the first line defines the table’s columns and the following lines are the data, separated into their respective columns by commas, hence the name.

### JSON

JSON stands for JavaScript Object Notation. As the name suggests, a JSON is a JavaScript object. Here's an exemple of a package.json, which is, as the name says, a JSON:

```
{
  "name": "tip-calculator",
  "version": "1.0.0",
  "description": "![Design preview for the Tip calculator app coding challenge](./design/desktop-preview.jpg)",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "postcss:watch": "postcss styles.css --dir public --watch"
  },
  "author": "Developer Name",
  "license": "ISC",
  "dependencies": {
    "autoprefixer": "^10.4.19",
    "cssnano": "^7.0.2",
    "postcss": "^8.4.38",
    "postcss-cli": "^11.0.0"
  }
}
```

Don't worry too much about the specific data here, just focus on the data types and how they're arranged. As you can see, it's just a JavaScript object with the complexity turned up a little. And yes, they can get more complicated than this. JSONs usually follow some kind of pattern, and having data in this format makes the data easier to work with.

Now let's look at turning one into the other.

## Some Notes Before We Begin

First, while this tutorial is written as beginner friendly as possible, it supposes you have some knowledge of JavaScript.

Second, though this is for frontend work, it supposes you're running your app on some kind of development server.

If you ever feel lost at any point while reading this, feel free to refer to the code in the repository [here](https://github.com/Holgermueller/demo-code-files/blob/master/convert-csv-to-json/converter.js).

## The Process

The first thing we need to do is declare a function to handle the conversion. Call the function anything you like. For the purposes of this tutorial, I’m calling my function convertCSVToJSON because when I learned to code, my instructor said to name things the way a seven year old would. The function should look something like this:

```
async function convertCSVToJSON(){}
```

Now that we have our function declared, we need to grab the data stored in the CSV file. (Heads up, this tutorial uses a local CSV file). To do this, use JavaScript’s built-in fetch method to grab the data from the path to the CSV file.

```
await fetch('./csvFile.csv')
```

You could also store the path as a variable if you'd like, but since we're only using the path once in this example, it's not really necessary.

Once we’ve fetched the data, we need to use a then() method to clean up the data. We do that by using the text() method.

```
await fetch('./csvFile.csv')
    .then(response => {
        return response.text()
    })
```

Now that the response is nice and clean and easy to read, we use another then() method to grab the data.

```
.then(data => {})
```

Once we have the data held in our variable called data, we need to do some set up before we work with it. First we need an empty array to hold onto the data once we’re done with it.

```
let result = []
```

Then we need to split the data up. First, we’ll split the data up. Since a CSV file is a series of lines, we’ll split it up into those lines, using the break at the end of each line as the point where we make the split.

```
let lines = data.split('\n')
```

We also need to define the keys for the data in our JSON. For this we use the first line of the CSV file. Grab the zero-index line and split it up along the commas.

```
let keys = lines[0].split(',')
```

Now that we have our keys defined, we’re going to loop through the data, twice, using nested for loops.

For the first loop, we’re looping through each line. Inside this first loop, we create an empty object that’s going to hold each of the lines. Then we create a variable to store our current line that we’ll use to split each line along its commas.

```
for(let i = 0; i < lines.length; i++){
    let obj = {};
    let currentLine = lines[i].split('');
    ...
}
```

Then we create our nested loop. This loop uses the keys variable from before and matches those keys with its corresponding piece of data. Once these corresponding pieces of data are paired up, they’re shunted into their own cozy little object.

```
for (let j = 0; j < keys.length; j++){
    obj[keys[j]] = currentLine[j];
}
```

Finally, using the push() method, we’re going to take each one of those objects and push it into our empty array from before.

```
result.push(obj);
```

In the end, you should have a function that looks like this:

```
async function createSelector() {
  await fetch("./csvFile.csv")
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      let result = [];
      let lines = data.split("\n");
      let keys = lines[0].split(",");

      for (let i = 1; i < lines.length; i++) {
        let obj = {};
        let currentLine = lines[i].split(",");
        for (let j = 0; j < keys.length; j++) {
          obj[keys[j]] = currentLine[j];
        }
        result.push(obj);
      }
    }
```

Now all our data is packaged up nice and ready to be worked with. With this JSON, you can display the data as a table on the DOM, or use it to create a selector on a form, and anything else you’d like to do with it.
