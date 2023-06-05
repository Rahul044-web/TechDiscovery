function check(){
    const str1 = document.getElementById("input").value;
    let rev = "";
    let res;
    let len = str1.length;
    for(let i=len - 1;i>=0;i--)
        rev = rev+str1.charAt(i);
    if(str1===rev)
        res = "Palindrome";
    else
        res="Not Palindrome";
    let result = document.querySelector('#result');
    result.innerHTML = res;
}