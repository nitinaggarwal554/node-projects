var cleanTheRoom=new Promise(function(resolve,reject){
    var isClean=false;
    if(isClean){
        resolve('the room is clean.')
    }else{
        reject('the room is not clean.')
    }
    
})

cleanTheRoom.then(function(result){
    console.log('Resolve: '+result);
}).catch(function(result){
    console.log('Rejected: '+result);
})