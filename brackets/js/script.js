let baseString = prompt("Enter string", "");
let upperString = [];
let bracket = ['[', ']', '(', ')', '{', '}'];
let rightBrackets=['()','[]','{}']
for (let i = 0; i < baseString.length; i++) {
    if (bracket.indexOf(baseString[i]) !== -1) {
        upperString.push(baseString[i]);
    }
}
let next = true;
upperString=upperString.join('');
while (next) {
    next = false;
    rightBrackets.forEach(key =>{
        if (upperString.indexOf(key) !== -1) {
            upperString=upperString.replaceAll(key, '')
            next = true;
            console.log(upperString);
        }

    })
}
if (upperString.length===0){
    alert("Скобки корректны")
}
else alert("Скобки не корректны")