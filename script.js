window.onload = function() {

    // ИЗБАВИТСЯ ОТ ЛИШНЕГО (ПОВТОРЯЮЩЕГОСЯ) КОДА !!!



    // Добавим кнопку для добавления вопроса


    var adding = document.querySelector('#addQuest');
    var buttonQuestion = document.createElement('button');
    buttonQuestion.innerHTML = 'Добавить вопрос';
    buttonQuestion.addEventListener('click', addQuestion, false);

    adding.appendChild(buttonQuestion);

    // Добавим кнопку экспорта и генерирования JSON

    var exportTest = document.createElement('button');
    exportTest.innerHTML = 'Экспорт теста';
    exportTest.addEventListener('click', exportingTest,false);

    adding.appendChild(exportTest);

    json = document.createElement('textarea');
    document.querySelector('#JSON').appendChild(json);

};

function exportingTest() {

    // Объект теста!

    var course = {
        questions : [],
        add_question : function(needquestion) {
            course.questions.push(needquestion);
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
            remove_answer : {}

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

    console.log(course);

    json.value = '';
    json.value = 'course = { \n ';



}


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
    question_block.className = 'questionBlock'; //повесили класс на блок вопроса
    content.appendChild(question_block);

    var close_button = document.createElement('button');
    close_button.innerHTML = 'X';
    close_button.style.position = 'relative';
    close_button.style.float = 'right';
    question_block.appendChild(close_button);

    var questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.className = 'questionTitle'; //повесили класс на сам вопрос
    question_block.appendChild(questionInput);

    close_button.addEventListener('click', function(){
        document.getElementById('content').removeChild(this.parentNode);
    },false);

    var addAnswerButton = document.createElement('button');
    addAnswerButton.innerHTML = 'Добавить ответ';
    addAnswerButton.style.display = 'block';

    question_block.appendChild(addAnswerButton);

    addAnswerButton.addEventListener('click',addAnswer,false);

// Функция добавления ответа

    function addAnswer() {

        heightBlock += 50;
        question_block.style.height = heightBlock + 'px';

        var answerBlock = document.createElement('div');
        answerBlock.className = 'answerBlock';// повесили класс на блок ответа
        answerBlock.style.width = '250px';
        answerBlock.style.height = '50px';

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


