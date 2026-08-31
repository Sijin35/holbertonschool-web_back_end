console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', data => {
    const cleanData = data.toString().trim();
    // console.log(`Your name is: ${cleanData}`);
    process.stdout.write(`Your name is: ${cleanData}\n`);
    // process.stdout.write(`Your name is: ${data}`);
});

process.stdin.on('end', () => {
    console.log('This important software is now closing');
});