export const createOutput = (command) => {
    const commandOutput = {};
    switch (command) {
        case 'help':
            commandOutput = { path: "nonexist", text: "Command: \"" + command + "\" recognized" };
        break;
        default:
            commandOutput = { path: "nonexist", text: "There was a Problem trying to determine the command." };
        break;
    }
    return commandOutput;
}
    
