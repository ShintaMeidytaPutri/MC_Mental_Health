document.addEventListener('DOMContentLoaded', function() {
    const questions = [
      "Saya suka membaca buku",
      "Saya suka menggambar",
      "Saya suka bernyanyi",
      "Saya suka bermain piano",
      "Saya suka bermain bola",
      "Saya suka bermain voli",
      "Saya suka melukis",
      "Saya suka menjahit"
    ];
  
    const questionContainer = document.getElementById('question-container');
    const resultContainer = document.getElementById('result-container');
    const resultDiv = document.getElementById('result');
    const submitButton = document.getElementById('submit-button');
  
    //Render pertanyaan
    questions.forEach(function(question, index) {
      const label = document.createElement('label');
      label.textContent = question;
      const input = document.createElement('input');
      input.setAttribute('type', 'range');
      input.setAttribute('min', '1');
      input.setAttribute('max', '5');
      input.setAttribute('value', '3');
      input.setAttribute('id', `question${index}`);
      const valueSpan = document.createElement('span');
      valueSpan.setAttribute('id', `value${index}`);
      valueSpan.textContent = '3';
      const br = document.createElement('br');
      questionContainer.appendChild(label);
      questionContainer.appendChild(input);
      questionContainer.appendChild(valueSpan);
      questionContainer.appendChild(br);
  
      input.addEventListener('input', function() {
        valueSpan.textContent = input.value;
      });
    });
  
    //Perhitungan hasil
    function calculateResult() {
      let totalScore = 0;
      questions.forEach(function(_, index) {
        const input = document.getElementById(`question${index}`);
        totalScore += parseInt(input.value);
      });
      return totalScore;
    }
  
    //Kirim jawaban
    submitButton.addEventListener('click', function() {
      const interpretation = interpretResult(calculateResult());
      renderResult(interpretation);
    });
  
    //Ketentuan hasil
    function interpretResult(score) {
      if (score >= 5 && score <= 10) {
        return {text:"Kamu gemar bermain.", imageSrc:"hasil-buku2.png"};
      } else if (score >= 11 && score <= 15) {
        return {text:"Kamu gemar mendengarkan musik.", imageSrc:"hasil-buku2.png"};
      } else if (score >= 16 && score <= 20) {
        return {text:"Kamu gemar melukis.", imageSrc:"hasil-buku2.png"};
      } else if (score >= 21 && score <= 25) {
        return {text:"Kamu memiliki minat dalam membaca buku.", imageSrc:"hasil-buku2.png"};
      } else if (score >= 26 && score <= 30) {
        return {text: "Kamu gemar menyanyi.", imageSrc:"hasil-buku2.png"};
      }
    }
  
    //Render hasil
   
  
function renderResult(interpretation) {
   resultDiv.innerHTML = '';
   const image = document.createElement('img');
   image.src = interpretation.imageSrc; 
   image.alt = 'Hasil'; 
   resultDiv.appendChild(image);
   const textDiv = document.createElement('div');
   textDiv.textContent = interpretation.text; 
   resultDiv.appendChild(textDiv);

  
   resultContainer.style.display = 'block';
}
});
