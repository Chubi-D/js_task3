let myNumber = []; // Assigning a variable myNumber to an Empty Array

// creating a function myFigure with a single parameter myInterger
function myFigure(myInteger){
        
    for (let number=1; number<=myInteger; number++){
            let myArray=''; // assigning an empty string to a variable myArray

            //stating the conditions using if--else statement
        if(number%5===0 || number%3===0 || number%2===0){
            if(number%2===0){
                if(myArray!='')
                    myArray +='-yu';
                else{
                    myArray = 'yu';
                }
            }

            if (number%3===0){
                if (myArray != '')
                    myArray +='-gi';
                else{
                    myArray = 'gi'
                }
            }
            if (number%5===0){
                if(myArray != '')
                    myArray +='-oh';
                else{
                    myArray = 'oh'
                }
            }

        }  

        else{
            myArray = number // if- else statement condition terminated
        }

        myNumber.push(myArray); // pusing the new Arrays/figures into my variable myNumber
}

    console.log(myNumber);


}

myFigure(100); //call the function and pass 100 as argument


myFigure(20); // call the function and pass any random number of your choice
