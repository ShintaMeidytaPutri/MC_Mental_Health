document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-button');
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="questions"]');
    let checkedCount = 0;

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                if (checkedCount >= 2) {
                    this.checked = false;
                } else {
                    checkedCount++;
                }
            } else {
                checkedCount--;
            }
        });
    });

    submitButton.addEventListener('click', function() {
        const interpretation = interpretResult();
        renderResult(interpretation);
    });

    function interpretResult() {
        let totalScore = 0;

        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                totalScore += parseInt(checkbox.value);
            }
        });

        if (totalScore >= 1 && totalScore <= 2) {
            return { text: "Kamu gemar membaca buku.", imageSrc: "hasil-buku2.png" };
        } else if (totalScore >= 3 && totalScore <= 4) {
            return { text: "Kamu gemar seni gambar.", imageSrc: "hasil-gambar.png" };
        } else if (totalScore >= 5 && totalScore <= 6) {
            return { text: "Kamu gemar dalam olahraga.", imageSrc: "hasil-olahraga.png" };
        } else if (totalScore >= 6 && totalScore <= 8) {
            return { text: "Kamu gemar bermain Video Game.", imageSrc: "hasil-game.png" };
        } else if (totalScore >= 9 && totalScore <= 10) {
            return { text: "Kamu gemar merajut pakian.", imageSrc: "hasil-jahit.png" };
        } else if (totalScore >= 11 && totalScore <= 12) {
        return { text: "Kamu gemar dalam seni musik.", imageSrc: "hasil-musik.png" };
        }
    }

    function renderResult(interpretation) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';
        const image = document.createElement('img');
        image.src = interpretation.imageSrc;
        image.alt = 'Hasil';
        resultDiv.appendChild(image);
        const textDiv = document.createElement('div');
        textDiv.textContent = interpretation.text;
        resultDiv.appendChild(textDiv);

        const resultContainer = document.getElementById('result-container');
        resultContainer.style.display = 'block';
    }
});
