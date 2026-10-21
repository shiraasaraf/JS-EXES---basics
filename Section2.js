/**
 * Section 2: 2D Grid Count
    Goal: Count how many "X" values appear in a 5x5 2D array.
    Twist: Ignore "x" (lowercase) and log coordinates of each "X".

 */


    let grid = [
        ["X", "o", "x", "o", "X"],
        ["o", "o", "X", "o", "o"],
        ["x", "o", "o", "o", "x"],
        ["o", "X", "o", "x", "o"],
        ["o", "o", "o", "o", "X"]
    ]
    
    let count = 0;
    let coordinets = []

    for (let row = 0; row < grid.length; row++) {

        let print = [];
        for (let col = 0; col < grid[0].length; col++) {
            
            if(grid[row][col] == "X"){count += 1; coordinets.push(` ${row}, ${col}`)};
            print.push(grid[row][col])
            
        }
        console.log(print)

        
    }
    console.log("X:", count)
    console.log("coordinets", coordinets)