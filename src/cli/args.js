const parseArgs = () => {
    const RssVariables = process.argv.map((variable, index) => {
        if (variable.includes("--")) return `${variable.slice(2)} is ${process.argv[index + 1]}`
    }).filter(variable => !!variable)

    const output = RssVariables.reduce((output, element, index) => (index === RssVariables.length - 1) ? output += element : output += element + ", ", "");
    console.log(output)
};

parseArgs();