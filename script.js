
    const scrColor = document.getElementById("scrColor");
    const screen = document.getElementById("screen");
    const addButton = document.getElementById("add");
    const buttonContainer =document.getElementById("containerbtn")

    let colors = [
        "#10dc91"
        
    ];
    


    scrColor.addEventListener("input", function () {
        screen.style.backgroundColor = scrColor.value;
    });
    function createButton(color) {
        let newBtn = document.createElement("button");
        newBtn.className = "color-btn";
        buttonContainer.appendChild(newBtn);
    }


    function updateColors(...newColors) {
        if(colors.length>=5){
            if(colors.includes(...newColors)){
                alert("color already exist ")
                return;
            }
            colors = [
            ...colors.slice(1),
            ...newColors
        ];
        }
        else {
            if(colors.includes(...newColors)){
                alert("color already exist ")
                return;
            }
            colors.push(...newColors);
        createButton();

        }

        

        updateButtons();
    }


    function updateButtons() {

        let buttons = document.querySelectorAll(".color-btn");

        buttons.forEach(function (button, index) {

            button.style.backgroundColor = colors[index];
            button.ariaLabel = `change the screen color to ${colors[index]}`;            

            button.onclick = function () {
                screen.style.backgroundColor = colors[index];
            };

        });
    }


    addButton.addEventListener("click", function () {
        updateColors(scrColor.value);
    });


    updateButtons();

