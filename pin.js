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

            // Only for turm.md: Replace duck_turm.jpeg with duck_party.jpeg if present
            var turmImg = document.querySelector('img[src="images/duck_turm.jpeg"]');
            if (turmImg) {
                turmImg.src = "images/duck_party.jpeg";
                turmImg.alt = "Ente feiert";
            }
            // Always show confetti on correct PIN
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
