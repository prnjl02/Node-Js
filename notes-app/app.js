// const fs = require('fs');

// //fs.writeFileSync('notes.txt','My name is Pranjal');

// fs.appendFileSync('notes.txt','Heyy!!!! text is appended');

//const name ="Pranjal";

// const name=require('./utils')
// console.log(name);

// const validator =require('validator')

// const chalk=require('chalk')
// const getNotes=require('./notes');
// console.log(getNotes)

// console.log(validator.isEmail('example.com'))

// console.log(chalk.blue('Success!!!!!!!!!'));

// console.log(chalk.blue.inverse('Blue color'))

// console.log('hey!!!!!!');

const yargs = require('yargs')

// creating a list command
yargs.command({
    command:'list',
    describe:'To store a list of notes',
    handler:function(){
        console.log('List command is working fine!!!!')
    }
})

yargs.command({
    command:'read',
    describe:'to read a note',
    handler:function(){
        console.log('Read command is working fine')
    }
})

console.log(yargs.argv)