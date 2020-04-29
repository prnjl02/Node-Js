// const fs = require('fs');

// //fs.writeFileSync('notes.txt','My name is Pranjal');

// fs.appendFileSync('notes.txt','Heyy!!!! text is appended');

//const name ="Pranjal";

// const name=require('./utils')
// console.log(name);

// const validator =require('validator')


// const getNotes=require('./notes');
// console.log(getNotes)

// console.log(validator.isEmail('example.com'))

// console.log(chalk.blue('Success!!!!!!!!!'));

// console.log(chalk.blue.inverse('Blue color'))

// console.log('hey!!!!!!');

const yargs = require('yargs')
const chalk=require('chalk')
const notes=require('./notes')

// creating a list command
yargs.command({
    command:'list',
    describe:'To store a list of notes',
    handler:function(){
        console.log(chalk.blue('List command is working fine!!!!'))
    }
})

yargs.command({
    command:'read',
    describe:'to read a note',
    handler:function(){
        console.log(chalk.yellow('Read command is working fine'))
    }
})



yargs.command({
    command:'add',
    describe:'Adding a title',
    builder:{
       title:{
       describe:'To add a new note',
       demandOption:true,
       type:'string'
        },
        body:{
            describe:'To provide a body of title',
            demandOption:true,
            type:'string'
        }
        },
    handler:function(argv){
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
      command:'remove',
      describe:'To remove a note',
      builder:{
          title:{
              describe:'To remove the title',
              demandOption:true,
              type:'string'
          }
              },
              handler:function(argv){
                  console.log('remove command is working!!!');
                  notes.removeNote(argv.title)
                  
              }
})
//console.log(yargs.argv)

yargs.parse()


