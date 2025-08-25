// Script.js

// Correct Pin Value

let btns =
    document.getElementsByClassName(
        "pinpad-btn"
    );
let pinInput = document.getElementById(
    "pinpad-input"
);


// Add click event listeners for pinpad buttons
for (let i = 0; i < btns.length; i++) {
    let btn = btns.item(i);
    if (
        btn.id &&
        (btn.id === "submit-btn" ||
            btn.id === "delete-btn")
    )
        continue;
    btn.addEventListener(
        "click",
        (e) => {
            pinInput.value += e.target.value;
            pinInput.focus();
        }
    );
}

// Only allow numbers to be typed in the input field
pinInput.addEventListener("input", function (e) {
    this.value = this.value.replace(/[^0-9]/g, "");
});

// Allow pressing Enter to submit the PIN
pinInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        submitBtn.click();
    }
});

let submitBtn = document.getElementById(
    "submit-btn"
);
let delBtn = document.getElementById(
    "delete-btn"
);
let modal =
    document.getElementById("modal");
let result =
    document.getElementById("result");
let closeBtn =
    document.getElementById("close");

submitBtn.addEventListener(
    "click",
    () => {
        if (
            !pinInput ||
            !pinInput.value ||
            pinInput.value === ""
        ) {
            alert(
                "Bitte gib zuerst eine PIN ein"
            );
        } else if (
            pinInput.value ===
            correctPin
        ) {
            // show the div coordinates
            document.getElementById("coordinates").style.display = "block";
            document.getElementById("pinpad").style.display = "none";

            // Hide the div "duck1" and show the div "duck2" if they exist
            const duck1 = document.getElementById("duck1");
            const duck2 = document.getElementById("duck2");
            if (duck1) duck1.style.display = "none";
            if (duck2) duck2.style.display = "block";

            // Show confetti on correct PIN
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 150,
                });
            }
        } else {
            alert("Falsche PIN");
        }
        // Reset the input
        pinInput.value = "";
    }
);

delBtn.addEventListener("click", () => {
    if (pinInput.value)
        pinInput.value =
            pinInput.value.substr(
                0,
                pinInput.value.length -
                1
            );
});
