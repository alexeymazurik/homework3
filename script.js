window.onload = function() {

    // ИЗБАВИТСЯ ОТ ЛИШНЕГО (ПОВТОРЯЮЩЕГОСЯ) КОДА !!!

    var question = {}; // будущий JSON

    // Добавим кнопку для добавления вопроса


    var adding = document.querySelector('#addQuest');
    var buttonQuestion = document.createElement('button');
    buttonQuestion.innerHTML = 'Добавить вопрос';
    buttonQuestion.addEventListener('click', addQuestion, false);

    adding.appendChild(buttonQuestion);

};

// Функция добавления блока с вопросом

function addQuestion() {
    var heightBlock = 200;
    var content = document.getElementById('content');
    var question_block = document.createElement('div');
    question_block.style.width = '400px';
    question_block.style.margin = '10px';
    question_block.style.height =  heightBlock + 'px';
    question_block.style.background = 'lightskyblue';
    question_block.style.border = '1px solid black';
    content.appendChild(question_block);

    var close_button = document.createElement('button');
    close_button.innerHTML = 'X';
    close_button.style.position = 'relative';
    close_button.style.float = 'right';
    question_block.appendChild(close_button);

    var questionInput = document.createElement('input');
    questionInput.type = 'text';
    question_block.appendChild(questionInput);

    close_button.addEventListener('click', function(){
        document.getElementById('content').removeChild(this.parentNode);
    },false);

    var addAnswerButton = document.createElement('button');
    addAnswerButton.innerHTML = 'Добавить ответ';
    addAnswerButton.style.display = 'block';

    question_block.appendChild(addAnswerButton);

    addAnswerButton.addEventListener('click',addAnswer,false);


    function addAnswer() {

        heightBlock += 50;
        question_block.style.height = heightBlock + 'px';

        var answerBlock = document.createElement('div');
        answerBlock.style.width = '250px';
        answerBlock.style.height = '50px';

        question_block.appendChild(answerBlock);


        var answerRight = document.createElement('input');
        answerRight.type = 'checkbox';
        answerRight.style.display = 'inline-block';

        answerBlock.appendChild(answerRight);

        var answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.style.display = 'inline-block';

        answerBlock.appendChild(answerInput);

        var answerCloseButton = document.createElement('button');
        answerCloseButton.innerHTML = 'X';
        answerBlock.appendChild(answerCloseButton);

        answerCloseButton.addEventListener('click', function(){
            question_block.removeChild(answerBlock);
            heightBlock -=50;
            question_block.style.height = heightBlock + 'px';
        },false);

    }

}

// Функция добавления ответа

function addAnswer() {

    heightBlock += 50;
    question_block.style.height = heightBlock + 'px';

    var answerBlock = document.createElement('div');
    answerBlock.style.width = '250px';
    answerBlock.style.height = '50px';

    this.parentNode.appendChild(answerBlock);


    var answerRight = document.createElement('input');
    answerRight.type = 'checkbox';
    answerRight.style.display = 'inline-block';

    answerBlock.appendChild(answerRight);

    var answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.style.display = 'inline-block';

    answerBlock.appendChild(answerInput);

    var answerCloseButton = document.createElement('button');
    answerCloseButton.innerHTML = 'X';
    answerBlock.appendChild(answerCloseButton);

    answerCloseButton.addEventListener('click', function(){
        question_block.removeChild(answerBlock);
        heightBlock -=50;
        question_block.style.height = heightBlock + 'px';
    },false);

}


