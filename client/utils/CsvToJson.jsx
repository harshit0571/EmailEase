import csvToJson from "convert-csv-to-json";
export const CsvToJson = ({ CSVfile }) => {
  let json = csvToJson.getJsonFromCsv(CSVfile);
  for (let i = 0; i < json.length; i++) {
    console.log(json[i]);
  }
};
