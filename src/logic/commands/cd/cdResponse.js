import * as data from './cdValues.json'

export const cdCommand = (inputArray, setCurretDirectory, currentDirectory) => {
    let text = "Here you'll get some help!"
    if(inputArray[1] === undefined){
        return { path: "nonexist", text: 'No path defined' }
    }
    
    if(inputArray.length === 2 )
    {
        setCurretDirectory([...currentDirectory, inputArray[1]])
        return { path: "nonexist", text: 'nonexist' };
    }
    
}