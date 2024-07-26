        let boxes = document.querySelectorAll(".box");
        const info = document.querySelector("#info");
        const resetBtn = document.querySelector("#btn2");

        const pattern = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        let turnO = true;
        let count = 0;

        const enableBoxes = () => {
            for (let box of boxes) {
                box.disabled = false;
                box.innerText = "";
                box.classList.add("box");
            }
        };

        const resetGame = () => {
            turnO = true;
            count = 0;
            enableBoxes();
            info.innerText = "O's Turn";
            info.style.backgroundColor = "transparent";
        };

        const checkWinner = () => {
            for (let win of pattern) {
                let val1 = boxes[win[0]].innerText;
                let val2 = boxes[win[1]].innerText;
                let val3 = boxes[win[2]].innerText;
                if (val1 === val2 && val2 === val3 && val1 !== "" && val2 !== "" && val3 !== "") {
                    info.innerText = "Winner is: " + val1;
                    info.style.backgroundColor = "green";
                    for (let box of boxes) {
                        box.disabled = true;
                    }
                    return;
                }
            }
            count++;
            if (count === 9) {
                info.innerText = "Match Draw";
                info.style.backgroundColor = "red";
                for (let box of boxes) {
                    box.disabled = true;
                }
            }
        };

        boxes.forEach((box) => {
            const id = box.getAttribute("id");
            box.addEventListener("click", () => {
                if (turnO) {
                    box.innerText = "O";
                    box.style.color = "green";
                    box.style.fontSize = "8vh";
                    info.innerText = "X's Turn";
                } else {
                    box.innerText = "X";
                    box.style.color = "red";
                    box.style.fontSize = "8vh";
                    info.innerText = "O's Turn";
                }
                box.disabled = true;
                turnO = !turnO;
                checkWinner();
            });
        });

        resetBtn.addEventListener("click", resetGame);