let hex = window.prompt(`What's your emoji of choose`).toString(16)
console.log(hex.length)
if(hex.length <= 4){
    alert("Your emoji is too short")
} else{
    console.log('perfect')
    var passLen = window.prompt("What's your password length?");
}




console.log(hex);


const randomStringMake = (count)=> {
    const letter = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz${hex}@#$%&`;
    let randomString = "";
    for (let i = 0; i < count; i++) {
        const randomStringNumber = Math.floor(1 + Math.random() * (letter.length - 1));
        randomString += letter.substring(randomStringNumber, randomStringNumber + 1);
    }
    return randomString
}
 
console.log(randomStringMake(passLen));