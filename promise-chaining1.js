var cleanTheRoom= function(){
    return new Promise(function(resolve,reject){
        var isClean=true;
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
        resolve(message+'the garbage is removed.')
    }else{
        reject(message+'the garbage is not removed.')
    }
    
})
}

var winTheIceCream=function(message){
    return new Promise(function(resolve,reject){
    var youWon=true;
    if(youWon){
        resolve(message+'you won the ice-cream')
    }else{
        reject(message+'you lost the ice-cream')
    }
    
})
}

cleanTheRoom().then(function(result){
    return removeTheGarbage(result);
}).then(function(result){
    return winTheIceCream(result);
}).then(function(result){
    console.log(result);
        }).catch(function(error){
            console.log('oops!!,you broke the promises.'+error)
        })
        
    
    