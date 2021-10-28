import * as data from './nicoValues.json'
import moment from 'moment'

export const nicoCommand = (inputArray) => {
    if(inputArray[1] === undefined){
        return { path: "nonexist", text: data.standardText }
    }
    let obj = data.parameters.find(o => o.parameter === inputArray[1])
    if(obj === undefined) {
        return { path: "nonexist", text: "Parameter not recognized!" };
    }else if(obj.parameter === "-v") {
        let currentYear = new Date().getFullYear();
        const age = currentYear - 2001;

        const currentDate = new Date();
        let year = '';
        const formattedDate = moment(currentDate).format('YYY-MM-DD')
        formattedDate < new Date(`${currentYear}-02-03`) ? year = currentYear : currentYear = currentYear + 1;
        const nextByrthday = new Date(`${year}-02-03`)

        return { path: "nonexist", text: nextByrthday.toString() };
    }else {
        return { path: "nonexist", text: obj.text };
    }
    
}