console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', data => {
    // const cleanData = data.trim();
    // process.stdout.write(`Your name is: ${cleanData}`);
    process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
    console.log('This important software is now closing');
});