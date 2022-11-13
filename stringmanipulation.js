

/*
                  BASIC PROGRAMMING TECHNIQUES
                    string manipulation
we have a string
Print the whole string everytime with one less character till
it only has a single character
afterwards immediately print back the characters one by one
until the whole string comes again
ME
M
ME
-------------
to solve this we require the below information
the string itself
the length of the string
a loop for this scenario
a condition to check the length 

*/


function prntstr () {
    let str = prompt("type a word: ");
    let strlen = str.length;

    if (strlen == 1) {  
        console.log(str);
    } 
    else {
        console.log(str); 

        while (strlen > 1) {  
                let cuttedstring = str.substring(str, strlen - 1); 
                console.log(cuttedstring);
                strlen -= 1;
        }

        while (strlen => 1) {  //and this works
                let cuttedstring = str.substring(str, strlen + 1);
                console.log(cuttedstring);
                strlen += 1;

                if (strlen === str.length) 
                    break;
        }
    }
}

prntstr();

