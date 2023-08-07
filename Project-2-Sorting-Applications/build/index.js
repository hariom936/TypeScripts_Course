"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const String_1 = require("./String");
const dateArray = [
    new Date(2001, 9, 24),
    new Date(2030, 9, 24),
    new Date(2020, 9, 24),
    new Date(2050, 9, 24),
];
const years = dateArray.map((date) => {
    return date.getFullYear();
});
// const numberData = new Numbers(years);
// numberData.sort();
// // const sortData = new SortData(numberData);
// // sortData.sort();
// console.log(numberData.number);
const stringData = new String_1.String('vdGryF');
// const sortData = new SortData(stringData);
// sortData.sort();
stringData.sort();
console.log(stringData.str);
