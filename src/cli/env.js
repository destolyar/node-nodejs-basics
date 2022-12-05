const parseEnv = () => {
    const RssVariables = process.argv.map((variable, index) => {
        if (variable.includes("RSS_")) return `${variable}=${process.argv[index + 1]}`
    }).filter(variable => !!variable)

    const output = RssVariables.reduce((output, element, index) => (index === RssVariables.length - 1) ? output += element : output += element + "; ", "");
    console.log(output)
};

parseEnv();