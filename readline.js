const nodeReadline = require('readline');
var util = require('util');
var myInterface = nodeReadline.createInterface(process.stdin, process.stdout);
myInterface.question('I am sure you must have a name? ', (name)=>{
    myInterface.setPrompt(`${name} What is your age? `);
    myInterface.prompt();
    myInterface.on('line', (age)=>{
        if(age<20)
        {
            util.log(`${name.trim()} as per your ${age}, you cannot go ahead`);
            myInterface.close();
        } 
        else {
            util.log(`${name.trim()} as per your age, you are good to go ${age}`);		
            myInterface.close();
        }
    })
});