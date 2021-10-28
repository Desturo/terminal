import { helpCommand } from "./help/helpResponse";

export const createOutput = (command, inputArray) => {
    let commandOutput = {};
    switch (command) {
        case 'help':
            commandOutput = helpCommand(inputArray);
        break;
        default:
            commandOutput = { path: "nonexist", text: "There was a Problem trying to determine the command." };
        break;
    }
    return commandOutput;
}

