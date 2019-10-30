const csvtojson = require('csvtojson');

async function getCSV() {
    return csvtojson().fromFile("./data/street_food_vendors.csv")
        .then(async source => {
            //     const uniqueInsurance = await [...new Set(source.map(item => item.Insurance_Company))];

            //     for (i in uniqueInsurance) {
            //         const result = source.filter(element => {
            //             return element.Insurance_Company === uniqueInsurance[i]
            //         });
            //         // transform data
            //         const sortedUserid = result.sort(compareUserid);
            //         const uniqueArray = removeDups(sortedUserid)
            //         const sortedFirstName = uniqueArray.sort(compareFirstNames);
            //         const sortedLastName = sortedFirstName.sort(compareLastNames);
            //         const sortedResult = sortedLastName
            //         // write data back to csv
            //         const keys = Object.keys(source[0]);
            //         const csv = jsontocsv(sortedResult, {
            //             fields: keys
            //         });
            //         fs.writeFileSync(dir + "/" + uniqueInsurance[i], csv);
            //     }

            console.log(source);
        }).catch();
}
getCSV();