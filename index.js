const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('what is your name? ', (nameAnswer) => {
  rl.question('When does the course start? (YYYY-MM-DD): ', (dateAnswer) => { 
    const courseStart = new Date(dateAnswer);
    const today = new Date();
    const timeDiff = courseStart.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log(`Welcome to SALT, ${nameAnswer}`);
    console.log(`There are ${daysDiff} days until the course starts.`)
    rl.close();
  });
});