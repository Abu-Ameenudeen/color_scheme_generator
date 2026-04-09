const colorPicker = document.getElementById("color-picker")
const mode = document.getElementById("scheme-mode")
const button = document.getElementById("get-scheme")

const colors = document.getElementById("colors")
const hexValues = document.getElementById("hex-values")

button.addEventListener("click", function(){

    const hex = colorPicker.value.substring(1)
    const scheme = mode.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${scheme}&count=5`)
        .then(res => res.json())
        .then(data => {

            let colorHTML = ""
            let hexHTML = ""

            data.colors.forEach(color => {

                colorHTML += `
                    <div class="color-block" 
                    style="background:${color.hex.value}">
                    </div>
                `

                hexHTML += `
                    <div class="hex">${color.hex.value}</div>
                `

            })

            colors.innerHTML = colorHTML
            hexValues.innerHTML = hexHTML

        })

})