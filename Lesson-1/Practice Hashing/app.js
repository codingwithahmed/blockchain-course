
const SHA256 = require("crypto-js/sha256")
const data1 = "YOU SUCKS!";
const dataObject = {
	id: 1,
  	body: "Ahmed Farooq",
  	time: new Date().getTime().toString().slice(0,-3)
};

/**
 * Step 3: Add code to the `generate hash function
 * Function that generate the SHA256 Hash
 * @param {*} obj 
 */

function generateHash(obj) {
	var strin_fei = JSON.stringify(obj)
    return SHA256(strin_fei)

}

console.log(`SHA256 Hash: ${generateHash(data1)}`);
console.log("************************************");
console.log(`SHA256 Hash: ${generateHash(dataObject)}`);