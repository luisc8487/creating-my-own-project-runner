# Continuous Execution Environment with Node.js

This project deomonstrates how to create an environment where a program runs continously without frequring manual updates from the terminal or console, similar to the functionality of nodemon. The project leverages modern JavaScript, the latest Node.js, and several npm packages to build a CLI tool for seamless execution.

## Features

1. File Change Detection:

    - Uses **Chokidar** to monitor changes in files and automatically execute the program when changes are detected.

2. CLI Tool:

    - Built with **Caporal** to provide an easy-to-use command line interface.

3. Process Execution:

    - Utilizes **Child_process** to execute programs dynamically as files are updated.

4. Styled Interface:

    - Employs Chalk (v4.1.10) for styling and enhancing the visual appeal of the command line output.

5. Continuous Execution:

    - Provides a development environment where the porgams runs continuously without the need for manual intervention, ensuring a streamlined workflow.

## Dependencies

- **Node.js:** Latest version.
- **Chalk: v4.1.0** - For styling the terminal interface.
- **Lodash.debounce:** For optimizing repetitive tasks.
- **Caporal:** For building the command line tool.
- **Child_process:** For running external programs.
- **Chokidar:** For monitoring file changes.

## Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory in your terminal.
3. Install the dependencies:

```terminal
npm install
```

4. Ensure you have the latest version of Node.js installed.

## Usage

1. Link the `index.js` file with `package.json` using the bin section to define the executable command.
2. Execute the program using the CLI command defined in the bin section of `package.json`.
3. Make changes to your files and observe the program running continuously without needing manual restarts.

## Example Configuration

The `bin`section in `package.json` should include:

```json
"bin":{
    "watchit": "index.js"
}
```

This links the `index.js` file to a custom CLI command, allowing you to run the program with `watchit`.
