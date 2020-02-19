function check(){
    
    var input = document.getElementById("word").value;
    var clean, reverse, split, reverse, join;
    
    clean = input.toLowerCase().replace(/[\W_]/g,'');
    
    splitWord = clean.split("");
    reverseWord = splitWord.reverse();
    finalReversed = reverseWord.join("");
    
    if(clean.localeCompare(finalReversed)==0) document.getElementById("display").innerHTML = input + " is a palindrome.";
    else document.getElementById("display").innerHTML = input + "is not a palindrome.";

    
}