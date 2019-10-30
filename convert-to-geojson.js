// process the file that was downloaded in download.js
const {
    hotdoggies
} = require('./data/street_food_vendors.js');
const fs = require('fs-extra');

const hotDogVendors = async (data) => { // create an array or json

    console.log(data);
    // const dataArr = data.features;
    // const flNGS = await dataArr.filter(item => item.properties.state === "FLORIDA");
    // const flPID = await flNGS.map(item => item.properties.pid);

    // return flNGS; // return this if you want json to be returned
    // return flPID; // return this if you want array to be returned

}


const writeArray = (arr) => {
    // fs.writeFile("./fl_ngs/fl_ngs.js", JSON.stringify(arr), function (err) { // uncomment this to return an array
    fs.writeFile("./data/streetFoods.json", JSON.stringify(arr), function (err) { // return an array of objects
        console.log({
            err
        });
    });
}
const setup = async () => {
    const hotDogs = await hotDogVendors(hotdoggies);
    // const writeFile = await writeArray(hotDogs);
}

setup();