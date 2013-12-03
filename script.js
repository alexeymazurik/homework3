// main function

window.onload = function() {

    // ИЗБАВИТСЯ ОТ ЛИШНЕГО (ПОВТОРЯЮЩЕГОСЯ) КОДА !!!



    // Добавим кнопку для добавления вопроса
    addQuestion();

    var adding = document.querySelector('#addQuest');
    var buttonQuestion = document.createElement('button');
    buttonQuestion.className = 'button_styled';
    buttonQuestion.style.display = 'block';
    buttonQuestion.innerHTML = 'Добавить вопрос';

    buttonQuestion.addEventListener('click', addQuestion, false);

    adding.appendChild(buttonQuestion);

    // Добавим кнопку экспорта и генерирования JSON

    var exportTest = document.createElement('button');
    exportTest.className = 'button_styled';
    exportTest.style.display = 'block';
    exportTest.innerHTML = 'Экспорт теста';
    exportTest.addEventListener('click', exportingTest,false);

    adding.appendChild(exportTest);

    json = document.createElement('textarea');
    json.placeholder = 'Здесь будет необходимый JSON, который можно будет скопировать...';
    json.style.width = '600px';
    json.style.height = '200px';
    json.readOnly = 'true';
    json.style.fontSize = '20px';
    document.querySelector('#JSON').appendChild(json);

};


function exportingTest() {

    // Объект теста!

    var course = {
        questions : [],
        add_question : function(needquestion) {
            course.questions.push(needquestion);
        },
        remove_question : function(index) {
            course.questions.splice(index,1);
        }
    };

    var questionBlocks = document.querySelectorAll('.questionBlock'); // получаем все блоки вопросов
    // пробегаем по всем блокам в поисках нужной информации

    for (var i = 0 ; i < questionBlocks.length; i++) {

        // Объект вопроса

        var question = {
            title : '',
            answers : [],
            add_answer : function(needanswer) {
                this.answers.push(needanswer);
            },
            remove_answer : function (index) {
                this.answers.splice(index,1);
            }

        };

       var title = questionBlocks[i].querySelector('input.questionTitle');

        question.title = title.value;

        var answersTitles = questionBlocks[i].querySelectorAll('input.answerTitle');
        var answerCheckBoxes = questionBlocks[i].querySelectorAll('input.answerCheckBox');


        for (var j = 0; j < answersTitles.length; j++) {

            // Объект ответа

            var answer = {
                title : '',
                isCorrect : false

            };

            answer.title = answersTitles[j].value;

            answer.isCorrect = answerCheckBoxes[j].checked;


            question.add_answer(answer);
        }

        course.add_question(question);
    }



    json.value = '';
    json.value = JSON.stringify(course);



}


// Функция добавления блока с вопросом

function addQuestion() {
    var heightBlock = 150;
    var content = document.getElementById('content');
    var question_block = document.createElement('div');
    question_block.style.height =  heightBlock + 'px';
    question_block.className = 'questionBlock'; //повесили класс на блок вопроса
    content.appendChild(question_block);

    var close_button = document.createElement('button');
    close_button.innerHTML = 'X';
    close_button.className = 'closeButton';
    close_button.style.position = 'relative';
    close_button.style.float = 'right';
    question_block.appendChild(close_button);

    var questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.className = 'questionTitle'; //повесили класс на сам вопрос
    questionInput.placeholder = 'Введите вопрос...';
    question_block.appendChild(questionInput);

    close_button.addEventListener('click', function(){
        document.getElementById('content').removeChild(this.parentNode);
    },false);

    var addAnswerButton = document.createElement('button');
    addAnswerButton.innerHTML = 'Добавить ответ';
    addAnswerButton.style.display = 'block';
    addAnswerButton.className = 'addAnswerButton';
    question_block.appendChild(addAnswerButton);

    addAnswerButton.addEventListener('click',addAnswer,false);

// Функция добавления ответа

    function addAnswer() {

        heightBlock += 80;
        question_block.style.height = heightBlock + 'px';

        var answerBlock = document.createElement('div');
        answerBlock.className = 'answerBlock';// повесили класс на блок ответа

        question_block.appendChild(answerBlock);


        var answerRight = document.createElement('input');
        answerRight.type = 'checkbox';
        answerRight.className = 'answerCheckBox'; // повесили класс на правильность ответа
        answerRight.style.display = 'inline-block';

        answerBlock.appendChild(answerRight);

        var answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.className = 'answerTitle'; // повесили класс на текст ответа
        answerInput.style.display = 'inline-block';
        answerInput.placeholder = 'Введите ответ...';

        answerBlock.appendChild(answerInput);

        var answerCloseButton = document.createElement('button');
        answerCloseButton.innerHTML = 'X';
        answerCloseButton.className = 'closeButton';
        answerBlock.appendChild(answerCloseButton);

        answerCloseButton.addEventListener('click', function(){
            question_block.removeChild(answerBlock);
            heightBlock -= 80;
            question_block.style.height = heightBlock + 'px';
        },false);



    }

}



