const typer = document.getElementById("typer");
const hist = document.getElementById("history");
const body = document.querySelector("body");

body.addEventListener("keydown", (e) => {
    for (let index = 0; index <= 10; index++) {
        if (e.code == "Numpad" + index || e.code == "Digit" + index) {
            typer.innerText += index
        }
    }

    if (e.code == "NumpadAdd") {
        setInto("+")
    }

    if (e.code == "NumpadSubtract") {
        setInto("-")
    }
    if (e.code == "NumpadMultiply") {
        setInto("*")
    }
    if (e.code == "NumpadDivide") {
        setInto("/")
    }
    if (e.code == "NumpadEnter") {
        getEqual()
    }
    if (e.code == "NumpadDecimal") {
        setInto('.')
    }
    if (e.code == "Backspace") {
        eraseBack()
    }
})

function setInto(item) {
    if (item == "+" || item == "-" || item == "*" || item == "/") {
        if (hist.textContent.includes(item)) {
            return getEqual(item)
        }
        if (hist.textContent.substring(0) != item) {   
            hist.innerText = typer.textContent + item
            return setEmpty(0)
        }
    }
    typer.innerText += item
}

function getEqual(item) {
    if (typer.textContent != "") {
        if (((hist.textContent + typer.textContent).includes('/0') == false)) {
            if (typer.textContent.includes(item)) {
                typer.innerText = eval(hist.textContent + typer.textContent.substring(0, (typer.textContent.length) - 1))
            } else {
                typer.innerText = eval(hist.textContent + typer.textContent)
            }
        
            setEmpty(1)
        } else {
            typer.innerText = "E!"
        }
    }
}

function setEmpty(deletHist) {
    if (deletHist == 0) {
        return typer.innerText = ""
    } else if (deletHist == 1) {
        return hist.innerText = ""
    }

    typer.innerText = ""
    hist.innerText = ""
}

function eraseBack() {
    return typer.innerText = typer.textContent.substring(0, (typer.textContent.length)-1)
}