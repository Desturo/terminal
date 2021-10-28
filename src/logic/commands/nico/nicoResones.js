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
        currentDate  < new Date(`${currentYear}-02-03`) ? year = currentYear : year = currentYear + 1;
        const birthdayString = `${year}-02-03`
        const nextByrthday = new Date(birthdayString)
        const differenceInMs = nextByrthday.getTime() - currentDate.getTime();
        const differenceInDays = Math.round(differenceInMs / (1000 * 3600 * 24));
        const differenceInPerc = Math.round(((365 - differenceInDays) / 365) * 100);

        return { path: "nonexist", text: `v${age}.${differenceInPerc}` };
    }else {
        return { path: "nonexist", text: obj.text };
    }
    
}