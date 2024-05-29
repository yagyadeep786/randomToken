
function randomToken(obj={
    length:16,
    charset:"alfabatic"
}) {
    console.log(obj);
   var charcterSet={
        "alfabatic":"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
        "numeric":"0123456789",
        "spacial":"@#$%&_",
    }
    var charters="";
    if(typeof obj.charset == String){
        charters+= charcterSet[obj.charset];
    }else{
       for(let i=0;i<obj.charset.length;i++){
            if(charcterSet[obj.charset[i]] == undefined){
                charters+= obj.charset[i];
            }else{
                charters+= charcterSet[obj.charset[i]];
            }
       }
    }
  
    
    let token = '';
    const charactersLength = charters.length;
     let length= obj.length?obj.length:16;
    for (let i = 0; i < length; i++) {
        token += charters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return token;
}

export default randomToken;