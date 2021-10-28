import * as data from './helpValues.json'

export const helpCommand = (inputArray) => {
    let text = "Here you'll get some help!"
    if(inputArray[1] === undefined){
        return { path: "nonexist", text: data.helpText }
    }
    data.available.indexOf(inputArray[1]) !== -1 ? text = `Command help with parameter ${inputArray[1]}` : text = "No valid Parameter"
    return { path: "nonexist", text: text };
}

const name = (params) => {
    
}