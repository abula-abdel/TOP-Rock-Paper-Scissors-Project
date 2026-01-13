Psuedocode for writing a function that randomly returns rock, paper, scissors


Step 1: Write a function named getCompterChoice - Done
1. Doesn't need an input since its by the comptuer
2. Function needs to return randomly "rock", "paper", "scissors"
3. Can do this with Math.random. Make an array containing the three strings
4. Will use math.random to randomly select an index from the array
5. Return the result of math.random (maybe in a variable)

Step 2: Write logic to get human choice - Done
1. Function needs to take input of user
2. The only thing in this is that we get the input of player (no comparisons are needed here)
3. Use "prompt" the get the input of the user
4. Function does not need parameters. Take user input on function call and return input

Step 3: Declare the players score variable - Done
1. Create two global variables, one called humanScore and another called computerScore
2. Initialize those variables to 0

Step 5: Write logic to play a single round - Done
1. Create a function called playRound - this should take input from human and computer choice
2. Input will be using ignorecase or will make everything lower case 
3. Hard code using if else statements. Statements will include 4 conditions
    - if player = rock and computer = scissors
    - if player = scissors and computer = paper
    - if player = paper and computer = rock
    - if player and computer are equal
    - everything else is a loss for the player
4. Return string statement with outcome, either stating win or lose
5. increment global variable by 1, either for the player or for the computer depending on who win the match

Step 6: Write the logic to play the entire game - In Progress
1. Create a function called playGame. It takes no parameters when called
2. Implements a for loop going up to 5 times. Each time calling the playRound function to play a new round and increment the score
3. A comparison of the global variables will be done after the loop is run
