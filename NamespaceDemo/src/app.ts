/// <reference path="utility-functions.ts"/>

import util = Utility.Fees;

let fee = util.CalculateLateFee(10);
console.log(`Fee: ${fee}`);
