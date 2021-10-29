import { cdCommand } from "./cd/cdResponse";
import { helpCommand } from "./help/helpResponse";
import { nicoCommand } from "./nico/nicoResones";

export const createOutput = (command, inputArray, setCurretDirectory, currentDirectory)=> {
    let commandOutput = {};
    console.log(command);
    switch (command) {
        case 'help':
            commandOutput = helpCommand(inputArray);
            break;
        case 'nico':
            commandOutput = nicoCommand(inputArray);
            break;
        case 'cd':
            commandOutput = cdCommand(inputArray, setCurretDirectory);
            break;
        default:
            commandOutput = { path: "nonexist", text: "There was a Problem trying to determine the command." };
        break;
    }
    return commandOutput;
}

