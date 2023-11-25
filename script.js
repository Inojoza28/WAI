 // Obtém a URL atual da página
 var currentPage = window.location.href;

 // Obtém todos os elementos de âncora com a classe "nav-link"
 var navLinks = document.querySelectorAll('.nav-link');

 // Itera sobre os links e adiciona/remova a classe "active" com base na URL atual
 navLinks.forEach(function(link) {
     if (link.href === currentPage) {
         link.classList.add('active'); // Adiciona a classe "active" se a URL corresponder
     } else {
         link.classList.remove('active'); // Remove a classe "active" se a URL não corresponder
     }
 });


// QUIZ 

const questions = [
    "<strong>1) De acordo com o Foco em Telas ou Dados:</strong><br><br> a) Eu acho mais interessante criar páginas da web e aplicativos visualmente atrativos. <br><br> b) Eu me interesso mais em garantir que os dados sejam processados de maneira eficiente nos sistemas.",
  "<strong>2) De acordo com Bancos de Dados e Informações:</strong> <br><br> a) Eu aprecio a organização de informações web e gosto de entender como elas são apresentadas visualmente. <br><br> b) Eu me interesso em garantir que os dados sejam armazenados e acessados de maneira segura e eficiente.",
  "<strong>3) De acordo em Resolver Problemas Visuais ou Lógicos:</strong> <br><br> a) Eu gosto da ideia de resolver problemas relacionados à aparência e ao comportamento dos sites.<br><br> b)  Eu acho mais interessante resolver problemas mais profundos relacionados à eficiência e segurança dos sistemas.",
  "<strong>4) De acordo com a Colaboração ou Independência:</strong> <br><br>a) Eu gosto de colaborar em equipe, compartilhando ideias e trabalhando em projetos conjuntos. <br><br> b) Eu prefiro trabalhar de forma independente, concentrando-me em resolver problemas de maneira autônoma.",
  "<strong>5) De acordo em Resolução de Desafios:</strong> <br><br>a) Eu me sinto motivado a resolver desafios visuais e interativos. <br><br> b) Eu me sinto motivado a resolver desafios relacionados à lógica e à eficiência do código.",
  "<strong>6) Em relação a Resistência a Bugs e Erros:</strong> <br><br>a) Eu sou paciente e persistente ao corrigir pequenos bugs e problemas de interface.<br><br> b) Eu tenho habilidades analíticas fortes e gosto de resolver problemas mais complexos relacionados à lógica do código.",
  "<strong>7) Em relação a Versatilidade no Desenvolvimento:</strong> <br><br>a) Eu prefiro me especializar em uma área específica, seja frontend ou backend, e aprimorar minhas habilidades nessa área. <br><br>b) Eu gosto de ter uma visão completa do desenvolvimento, trabalhando tanto na interface do usuário quanto na lógica do servidor.",
  "<strong>8) Em relação a Coordenação de Equipe:</strong> <br><br>a) Eu gosto de coordenar e colaborar com diferentes membros da equipe em todas as etapas do desenvolvimento.<br><br> b) Eu prefiro ter um papel mais específico na equipe, focando em aspectos lógicos ou visuais."
];

let currentQuestion = 0;
let userAnswers = [];

const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const answerForm = document.getElementById('answer-form');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');
const errorMessage = document.getElementById('error-message');
const percentageContainer = document.getElementById('percentage-container');
const startButton = document.getElementById('start-button');

function showQuestion() {
    document.getElementById('question-container').style.display = 'block';
    if (currentQuestion < questions.length) {
        questionNumber.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
        questionText.innerHTML = questions[currentQuestion];
        questionText.style.fontSize = '18px'; // Ajuste o valor conforme necessário para aumentar ou diminuir o tamanho da fonte
        questionText.style.marginBottom = '40px'; // Adiciona um espaçamento de 20 pixels entre a pergunta e as alternativas
    } else {
        showResult();
    }
}

function startQuiz() {
    startButton.style.display = 'none';
    showQuestion();
}

function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        userAnswers.push(selectedAnswer.value);
        currentQuestion++;

        if (currentQuestion === questions.length) {
            showResult();
        } else {
            showQuestion();
            answerForm.reset();
            errorMessage.textContent = '';
        }
    } else {
        errorMessage.textContent = " Por favor, selecione uma resposta. ";
    }
}

function restartQuiz() {
    // Reinicializa as variáveis e exibe a primeira pergunta
    currentQuestion = 0;
    userAnswers = [];
    resultContainer.style.display = 'none';
    document.getElementById('question-container').style.display = 'block';
    showQuestion();
}

function showResult() {
    const frontendCount = userAnswers.filter(answer => answer === 'frontend').length;
    const backendCount = userAnswers.filter(answer => answer === 'backend').length;

    const totalQuestions = questions.length;
    const frontendPercentage = (frontendCount / totalQuestions) * 100;
    const backendPercentage = (backendCount / totalQuestions) * 100;

    resultText.innerHTML = `<p><strong>Porcentagem Frontend:</strong> ${frontendPercentage.toFixed(2)}%</p><p><strong>Porcentagem Backend:</strong> ${backendPercentage.toFixed(2)}%</p>`;

    if (frontendPercentage === 50 && backendPercentage === 50) {
        resultText.innerHTML += `<p>Seu perfil se encaixa melhor como <strong> Dev.Fullstack!</strong></p>`;
    } else if (backendPercentage > frontendPercentage) {
        resultText.innerHTML += `<p>Seu perfil se encaixa melhor como <strong>Dev.Backend!</strong></p>`;
    } else {
        resultText.innerHTML += `<p>Seu perfil se encaixa melhor como <strong>Dev.Frontend!</strong></p>`;
    }

    resultContainer.style.display = 'block';
    document.getElementById('question-container').style.display = 'none';
}


 
//  feito por Carlos Gabriel J. I. Santos