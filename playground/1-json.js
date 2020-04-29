const fs = require('fs')

const sampleJSON={"name":"Andrew","planet":"Earth","age":27};
const sampleJSONString=JSON.stringify(sampleJSON);
fs.writeFileSync('1-json.json',sampleJSONString);

const dataBuffer = JSON.parse((fs.readFileSync('1-json.json')))
console.log(dataBuffer.name);

dataBuffer.name="Pranjal";
dataBuffer.age="24";

const dataBufferJSON=JSON.stringify(dataBuffer)

fs.writeFileSync('1-json.json',dataBufferJSON);

 const readNewObject= fs.readFileSync('1-json.json')
 console.log('Modified data is ',JSON.parse(readNewObject));