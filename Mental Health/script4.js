document.addEventListener('DOMContentLoaded', function() {
  const questions = [
      "Saya suka membaca buku",
      "Saya suka menggambar",
      "Saya suka bernyanyi",
      "Saya suka bermain piano",
      "Saya suka bermain bola",
      "Saya suka bermain basket",
      "Saya suka melukis",
      "Saya suka bermain Video Game",
      "Saya suka menjahit"
  ];

  // Nilai-nilai yang terkait dengan setiap pertanyaan
  const questionValues = [2, 3, 4, 5, 1, 2, 3, 4, 5];

  const questionContainer = document.getElementById('question-container');
  const resultContainer = document.getElementById('result-container');
  const resultDiv = document.getElementById('result');
  const submitButton = document.getElementById('submit-button');

  //Render pertanyaan
  questions.forEach(function(question, index) {
      const label = document.createElement('label');
      label.textContent = question;
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('id', `question${index}`);
      // Setiap checkbox bernilai sesuai dengan nilai yang terkait
      checkbox.setAttribute('value', questionValues[index]);
      const br = document.createElement('br');
      questionContainer.appendChild(label);
      questionContainer.appendChild(checkbox);
      questionContainer.appendChild(br);
  });

  //Kirim jawaban
  submitButton.addEventListener('click', function() {
      const interpretation = interpretResult();
      renderResult(interpretation);
  });

  //Ketentuan hasil
  function interpretResult() {
      let totalScore = 0;
      questions.forEach(function(_, index) {
          const checkbox = document.getElementById(`question${index}`);
          if (checkbox.checked) {
              totalScore += parseInt(checkbox.value); // Tambahkan nilai checkbox yang dicentang
          }
      });

      if (totalScore >= 5 && totalScore <= 10) {
          return { text: "Kamu gemar bermain.", imageSrc: "hasil-buku2.png" };
      } else if (totalScore >= 11 && totalScore <= 15) {
          return { text: "Kamu gemar mendengarkan musik.", imageSrc: "hasil-buku2.png" };
      } else if (totalScore >= 16 && totalScore <= 20) {
          return { text: "Kamu gemar melukis.", imageSrc: "hasil-buku2.png" };
      } else if (totalScore >= 21 && totalScore <= 25) {
          return { text: "Kamu memiliki minat dalam membaca buku.", imageSrc: "hasil-buku2.png" };
      } else if (totalScore >= 26 && totalScore <= 30) {
          return { text: "Kamu gemar menyanyi.", imageSrc: "hasil-buku2.png" };
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
