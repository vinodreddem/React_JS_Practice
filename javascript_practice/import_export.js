// Define the Variable'apiKey' inside the utils.py
// In order to import that variable inside this module, we need to export tjhat variable in utils.js 

// let apiKey = "sampleapikeyexampleqqqqqqqqqqqqqqqqqq";
// export let apiKey2 = "gvfdhkjbjlbb";

// So here I can able to import apikey2 but there is an exception here
import { apiKey2 } from "./utils.js";

// If Module has single variable like default variable, then ?
console.log(apiKey2)

//------------------------------------------------------------------------------------------------------------------
// in default.js file we have defined only one variable with out name and with default.
// So this we don't need give any name and also we can't define multiple default variables in a single module
// like insdie the default js we can't have multiple default variables
//------------------------------------------------------------------------------------------------------------------
import {exampleDefault } from "./default.js";
console.log("Example Default is ", exampleDefault)


//------------------------------------------------------------------------------------------------------------------
// in mixed_default_export - we have both the default and the export named variables, so we can able to import them
//------------------------------------------------------------------------------------------------------------------
import {exampleDefault2 } from "./mixed_default_export.js"
import { key3 } from "./mixed_default_export.js";
import { key4 } from "./mixed_default_export.js";