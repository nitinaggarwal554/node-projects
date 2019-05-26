var cleanTheRoom= function(){
    return new Promise(function(resolve,reject){
        var isClean=false;
        if(isClean){
            resolve('the room is clean.')
        }else{
            reject('the room is not clean.')
        }
    })
}

var removeTheGarbage=function(message){
return new Promise(function(resolve,reject){
    var isRemoved=true;
    if(isRemoved){
        resolve('the garbage is removed.')
    }else{
        reject('the garbage is not removed.')
    }
    
})
}

var winTheIceCream=function(message){
    return new Promise(function(resolve,reject){
    var youWon=false;
    if(youWon){
        resolve('you won the ice-cream')
    }else{
        reject('you lost the ice-cream')
    }
    
})
}
/* 
Promise.all([cleanTheRoom(),removeTheGarbage(),winTheIceCream()])
.then(function(result){
    console.log('all the promises are resolved.');
}).catch(function(result){
    console.log('One of the promise failed.')
})
 */

Promise.race([cleanTheRoom(),removeTheGarbage(),winTheIceCream()])
.then(function(result){
    console.log('one of them is resolved.');
}).catch(function(result){
    console.log('One of them is failed.')
})