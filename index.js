const moment = require('moment');

moment.locale('pt-br'); 
let data = moment().format('ll, h:mm:ss a');

//let data = moment().format('D MMMM  YYYY, h:mm:ss a');
console.log(data);