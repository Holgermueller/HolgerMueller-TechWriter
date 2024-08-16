const fs = require("fs");
const csvPath = require("path").resolve(__dirname, "csvFile.csv");
const csv_file = fs.readFileSync(csvPath, "utf-8");

async function convertCSVToJSON() {
  await fetch(csv_file)
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      let result = [];
      let lines = data.split("\n");
      let keys = lines[0].split(",");

      for (let i = 0; i < lines.length; i++) {
        let obj = {};
        let currentLine = lines[i].split(",");
        for (let j = 0; j < keys.length; j++) {
          obj[keys[j]] = currentLine[j];
        }
        result.push(obj);
      }
    });
}

convertCSVToJSON();
