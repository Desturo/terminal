import { helpCommand } from "./help/helpResponse";
import { nicoCommand } from "./nico/nicoResones";

export const createOutput = (command, inputArray) => {
    let commandOutput = {};
    switch (command) {
        case 'help':
            commandOutput = helpCommand(inputArray);
            break;
        case 'nico':
            commandOutput = nicoCommand(inputArray);
            break;
        default:
            commandOutput = { path: "nonexist", text: "There was a Problem trying to determine the command." };
        break;
    }
    return commandOutput;
}

