const mainContainer   = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submitbutton    = document.getElementById("submit")
const rating  = document.getElementById("spann")
const rates = document.querySelectorAll(".btn") 

submitbutton.addEventListener (
    "click",
    () => {
        thanksContainer.classList.remove("hidden")
        mainContainer.style.display = "none";
    }
)

rates.forEach(
    (rate) => {
        rate.addEventListener( "click", () =>{
                console.log(rate.innerHTML);
                rating.innerHTML = rate.innerHTML
            }
        )
    }
)