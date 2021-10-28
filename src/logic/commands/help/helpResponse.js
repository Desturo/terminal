import * as data from './helpValues.json'

export const helpCommand = (inputArray) => {
    let text = "Here you'll get some help!"
    if(inputArray[1] === undefined){
        return { path: "nonexist", text: data.standardText }
    }
    let obj = data.parameters.find(o => o.parameter === inputArray[1])
    if(obj === undefined) {
        return { path: "nonexist", text: text };
    }else {
        return { path: "nonexist", text: obj.text };
    }
    
}