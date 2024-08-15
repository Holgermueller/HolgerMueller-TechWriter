async function convertCSVToJSON() {
  await fetch("convert-csv-to-json/csvFile.csv")
    .then((response) => {
      console.log(response);
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
