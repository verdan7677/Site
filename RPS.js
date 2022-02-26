let result = document.getElementById("Result")
let HasReset = true;

function opt(input) {
    UserChoise = 0
    result.textContent = "Your Result is : "
    let Won = 0
    let CompOption = Math.floor((Math.random() * 3) + 1);
    console.log(CompOption)
    gameLogic(input, CompOption)
}

function gameLogic(input, CompOption) {
    if (input != CompOption) {
        if (input == 1) {
            if (CompOption == 2) {
                result.textContent += "You lose!"
            } else if (CompOption == 3) {
                result.textContent += "You Win!"
            }
        }

        if (input == 2) {
            if (CompOption == 3) {
                result.textContent += "You lose!"
            } else if (CompOption == 1) {
                result.textContent += "You Win!"
            }
        }

        if (input == 3) {
            if (CompOption == 1) {
                result.textContent += "You lose!"
            } else if (CompOption == 2) {
                result.textContent += "You Win!"
            }
        }
    } else {
        result.textContent += "It's a draw"
    }
}