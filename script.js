const questions = [
    {
      question: "What does HTML stand for?",
      options: ["HyperLink Markup Language","HyperText Markup Language", "HomeTool Markup Language", "HyperText Main Language"],
      correctAnswer: "HyperText Markup Language"
    },
    {
      question: "Which of these is a JavaScript framework?",
      options: ["React", "Django", "Laravel", "Spring"],
      correctAnswer: "React"
    },
    {
      question: "What is used to style HTML elements?",
      options: ["HTML", "JavaScript", "CSS", "PHP"],
      correctAnswer: "CSS"
    },
    {
      question: "What does CSS stand for?",
      options: [ "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets","Cascading Style Sheets"],
      correctAnswer: "Cascading Style Sheets"
    },
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlink Text Managing Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      question: "What does HTTP stand for?",
      options: [ "Hyper Transfer Text Protocol","HyperText Transfer Protocol", "HighText Transfer Protocol", "Hyperlink Text Transfer Protocol"],
      correctAnswer: "HyperText Transfer Protocol"
    },
    {
      question: "Which tag is used to define a hyperlink in HTML?",
      options: ["<link>", "<a>", "<href>", "<hyper>"],
      correctAnswer: "<a>"
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["text-style", "text-size","font-size", "font-style"],
      correctAnswer: "font-size"
    },
    {
      question: "What does SQL stand for?",
      options: ["Structured Query Language", "Stylish Question Language", "Statement Question Language", "Stylesheet Query Language"],
      correctAnswer: "Structured Query Language"
    },
    {
      question: "What is the default alignment of text in HTML?",
      options: [ "Right", "Center", "Left","Justify"],
      correctAnswer: "Left"
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: [ "class", "font", "style","styles"],
      correctAnswer: "style"
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Microsoft", "Sun Microsystems", "Oracle"],
      correctAnswer: "Netscape"
    },
    {
      question: "What does API stand for?",
      options: [ "Applied Programming Interface", "Application Programming Interface","Application Program Interface", "Advanced Programming Interface"],
      correctAnswer: "Application Programming Interface"
    },
    {
      question: "Which tag is used to define an image in HTML?",
      options: ["<img>", "<image>", "<pic>", "<src>"],
      correctAnswer: "<img>"
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: [ "<script>", "<css>", "<link>","<style>"],
      correctAnswer: "<style>"
    },
    {
      question: "What does XML stand for?",
      options: ["eXtensible Markup Language", "eXtra Modern Language", "Example Markup Language", "Excellent Markup Language"],
      correctAnswer: "eXtensible Markup Language"
    },
    {
      question: "Which property is used to change the background color in CSS?",
      options: ["background-color", "color", "bgcolor", "background"],
      correctAnswer: "background-color"
    },
    {
      question: "Which HTML tag is used to make text bold?",
      options: [ "<strong>", "<bold>", "<b>","<em>"],
      correctAnswer: "<b>"
    },
    {
      question: "What does DOM stand for?",
      options: [ "Data Object Model","Document Object Model", "Document Order Model", "Digital Object Model"],
      correctAnswer: "Document Object Model"
    },
    {
      question: "How do you write a comment in CSS?",
      options: [ "// comment", "<!-- comment -->", "# comment","/* comment */",],
      correctAnswer: "/* comment */"
    },
    {
      question: "Which method is used to write something in the browser using JavaScript?",
      options: [ "console.log()", "window.alert()","document.write()", "document.log()"],
      correctAnswer: "document.write()"
    },
    {
      question: "Which CSS property is used to make text italic?",
      options: [ "text-style", "style", "font-style","font-type"],
      correctAnswer: "font-style"
    },
    {
      question: "What is the correct HTML tag for inserting a line break?",
      options: ["<br>", "<lb>", "<break>", "<newline>"],
      correctAnswer: "<br>"
    },
    {
      question: "Which HTML attribute specifies an alternate text for an image?",
      options: ["title", "alt","name", "src"],
      correctAnswer: "alt"
    }
  ];
  
  
  function getRandomQuestions() {
    let shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  }
  
  let selectedQuestions = getRandomQuestions();
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question-container");
  const nextBtn = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreText = document.getElementById("score-text");
  const restartBtn = document.getElementById("restart-btn");
  
  function loadQuestion() {
    const questionObj = selectedQuestions[currentQuestionIndex];
    questionContainer.innerHTML = `
      <h2 class="text-2xl font-semibold text-indigo-700">${questionObj.question}</h2>
      <div class="mt-4 space-y-4">
        ${questionObj.options.map(option => {
          const escapedOption = option.replace(/</g, "&lt;").replace(/>/g, "&gt;");
          return `
            <button class="answer-option w-full bg-indigo-100 hover:bg-indigo-200 text-gray-700 py-2 rounded-lg border-2 border-indigo-300" 
              onclick="checkAnswer('${option.replace(/'/g, "\\'")}', this)">
              ${escapedOption}
            </button>`;
        }).join('')}
      </div>
    `;
    nextBtn.classList.add("hidden");
  }
  
  function checkAnswer(selectedOption, buttonElement) {
    const correctAnswer = selectedQuestions[currentQuestionIndex].correctAnswer;
  
    // Disable all options after selection
    const allButtons = document.querySelectorAll(".answer-option");
    allButtons.forEach(button => button.disabled = true);
  
    // Add feedback to the selected option
    if (selectedOption === correctAnswer) {
      buttonElement.classList.add("bg-green-500", "text-white", "border-green-600");
      buttonElement.innerHTML += ' <span class="text-white">✔️</span>';
      score++; // Correct answer, increment score
    } else {
      buttonElement.classList.add("bg-red-500", "text-white", "border-red-600");
      buttonElement.innerHTML += ' <span class="text-white">❌</span>';
    }
  
   
    nextBtn.classList.remove("hidden");
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    questionContainer.classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreText.innerHTML = `Your Score: ${score} / ${selectedQuestions.length}`;
  }
  
  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    selectedQuestions = getRandomQuestions(); 
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    loadQuestion();
  });
  
  // Initialize quiz
  loadQuestion();
  