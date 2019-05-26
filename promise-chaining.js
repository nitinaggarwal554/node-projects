var cleanTheRoom=new Promise(function(resolve,reject){
    var isClean=true;
    if(isClean){
        resolve('the room is clean.')
    }else{
        reject('the room is not clean.')
    }
    
})

var removeTheGarbage=new Promise(function(resolve,reject){
    var isRemoved=false;
    if(isRemoved){
        resolve('the garbage is removed.')
    }else{
        reject('the garbage is not removed.')
    }
    
})

var winTheIceCream=new Promise(function(resolve,reject){
    var youWon=true;
    if(youWon){
        resolve('you won the ice-cream')
    }else{
        reject('you lost the ice-cream')
    }
    
})


cleanTheRoom.then(function(result){
    console.log('cleanTheRoom Resolved: '+result);
    removeTheGarbage.then(function(result){
        console.log('removeTheGarbage Resolved: '+result);
        winTheIceCream.then(function(result){
            console.log('winTheIcecream Resolved: '+result);
        }).catch(function(result){
            console.log('winTheIcecream Rejected: '+result);
    })
}).catch(function(result){
        console.log('removeTheGarbage Rejected: '+result);
    })
}).catch(function(result){
        console.log('cleanTheRoom Rejected: '+result);
    })

