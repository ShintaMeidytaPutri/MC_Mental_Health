document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function() {
        const interpretation = interpretResult();
        renderResult(interpretation);
    });

    function interpretResult() {
        const questions = document.querySelectorAll('input[type="checkbox"][name="questions"]');
        let totalScore = 0;

        questions.forEach(function(checkbox) {
            if (checkbox.checked) {
                totalScore += parseInt(checkbox.value);
            }
        });

        if (totalScore >= 5 && totalScore <= 10) {
            return { text: "Kamu gemar bermain.", imageSrc: "hasil-buku2.png" };
        } else if (totalScore >= 11 && totalScore <= 15) {
            return { text: "Kamu gemar bermusik.", imageSrc: "hasil-buku2.png" };
        } else if (totalScore >= 16 && totalScore <= 20) {
            return { text: "Kamu gemar melukis.", imageSrc: "hasil-buku2.png" };
        } else if (totalScore >= 21 && totalScore <= 25) {
            return { text: "Kamu gemar membaca buku.", imageSrc: "hasil-buku2.png" };
        } else if (totalScore >= 26 && totalScore <= 30) {
            return { text: "Kamu gemar bernyanyi.", imageSrc: "hasil-buku2.png" };
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