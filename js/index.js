// Iteration 1: Names and Input

const hacker1 = "Clément1";
const hacker2 = "Clément2";

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

function printLongestName(s1, s2) {
    if (s1.length > s2.length)
        console.log(`The driver has the longest name, it has ${s1.length} characters.`);
    else if (s1.length < s2.length)
        console.log(`It seems that the navigator has the longest name, it has ${s2.length} characters.`);
    else 
        console.log(`Wow, you both have equally long names, ${s1.length} characters!`);
}

printLongestName(hacker1, hacker2);

// Iteration 3: Loops

console.log(hacker1.split('').join(' ').toUpperCase());
console.log(hacker2.split('').reverse().join(''));

function printLexicographic(s1, s2) {
    if (s1 < s2)
        console.log("The driver's name goes first.");
    else if (s1 > s2)
        console.log("Yo, the navigator goes first definitely.");
    else 
        console.log("What?! You both have the same name?");
}

printLexicographic(hacker1, hacker2);

// Bonus 1:

let str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis orci eu molestie placerat. Cras interdum metus sit amet ex dignissim gravida. Pellentesque pharetra ultrices enim id luctus. Donec aliquet lacinia purus, eu tincidunt justo pellentesque non. Donec ac lacus tortor. Sed dictum scelerisque urna vel fermentum. Suspendisse feugiat a neque vitae fringilla. Fusce venenatis sit amet diam in rutrum. Nulla facilisi. Sed posuere libero finibus arcu faucibus, at commodo enim facilisis. Nulla faucibus velit elit, vitae auctor velit efficitur nec. Sed tempor felis sit amet vulputate condimentum. Morbi rhoncus quis libero id lacinia.  Ut porttitor purus urna, ac efficitur dolor tempus quis. Donec leo ligula, tincidunt eget lectus sed, dapibus consequat dui. Mauris commodo pulvinar risus ac malesuada. Maecenas eu ultricies sapien. In at massa leo. Integer ut vehicula enim. Nam condimentum venenatis nunc vel porta. Vivamus vel tellus suscipit, efficitur purus non, pharetra tortor. Aliquam id dapibus elit, quis laoreet sapien. Vestibulum volutpat risus ut leo interdum pretium sed vitae elit. Phasellus turpis purus, finibus a imperdiet sed, aliquet et quam. Vestibulum pulvinar sed urna ut ornare.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris venenatis quam augue, vel tincidunt lorem tincidunt vitae. Vivamus lacinia sagittis aliquam. Phasellus quis tortor rhoncus, finibus ante at, molestie justo. Cras nec orci ut leo faucibus iaculis nec et lorem. Etiam non lobortis arcu. Proin ac pulvinar leo, quis dictum orci. Fusce est tortor, maximus a quam et, commodo dignissim purus. Curabitur massa odio, viverra vel enim a, molestie tincidunt erat. Maecenas id commodo dui. Sed luctus hendrerit ante vel feugiat. Praesent gravida ex ut massa aliquam, non facilisis lectus fermentum."

console.log(str.split(' ').length);
console.log(str.split(' et ').length);

// Bonus 2 

let phraseToCheck = "step on no pets";

function isPalindrome(str) {
    let len = str.length;
    str = str.toLowerCase();
    for (let i = 0; i < len - 1; i++) {
        if (str[i] !== str[--len])
            return false;
        }
    return true;
}

console.log(isPalindrome(phraseToCheck));

//to do: deal with non alphanumeric
