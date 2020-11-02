const EventEmitter = require('events');

const myEmitter = new EventEmitter();

function empty (){
    myEmitter.on('Hi !!!', () => {
        console.log('Ch0oooooper !!!');
    });

    myEmitter.emit('Hi !!!');
}


function withArgs(names){
    var names = ["Luffy","Zoro","Robin","Nami","Sanji","Ch0pper"]
//Corresction
   /* myEmitter.on('newFellow', (item) => 
        console.log('Here comes a new pirate --> ' + item)
    );
    for (let i = 0; i < names.length; i++) {
        const tab = names [i];
        myEmitter.emit('newFellow',tab);
    }*/

    names.forEach(function(item,index, array) {
        console.log('Here comes a new pirate -->', item);
        myEmitter.emit('newFellow',array);
    }); 
 
}


module.exports = {
    empty,
    withArgs,
}





