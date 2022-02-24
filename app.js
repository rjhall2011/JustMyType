$(document).ready(function () {

    let sentences = [
        'ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot',
        'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat',
        'nee ene ate ite tent tiet ent ine ene ete ene ate'];


    let sentenceIndex = 0;
    let letterIndex = 0;
    let currentSentence = sentences[sentenceIndex];
    let currentLetter = currentSentence[letterIndex]


    $("#keyboard-upper-container").hide();
    $("#yellow-block").hide();


    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();
        };
    });

    $(document).keyup(function (e) {
        if (e.keyCode == 16) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").show();
        };
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            e.preventDefault();
        } else {
            $(`#${e.key.charCodeAt()}`).css('background-color', 'yellow');

        };

    });

    $("#sentence").append(currentSentence)

    $(document).keyup(function (e) {
        $(`#${e.key.charCodeAt()}`).css('background-color', '');
    });



  
    $(document).keypress(function (e) {

        if (currentSentence != 4) {
    $('#'+ e.keyCode).css()
            if (letterIndex == currentSentence.length) {
                // if (currentSentence.charCodeAt(letterIndex) === e.keyCode) {
                letterIndex = 0
                sentenceIndex++
                $("#sentence").text(sentences[sentenceIndex])
                currentSentence = sentences[sentenceIndex]
                currentLetter = currentsentence[letterIndex]
                $('#feedback').text("")
                    ('#yellow-block').css('left', "17.5px")
                $("#target-letter").text(currentLetter)
            }
           


        } else {  
            $('#yellow-block').css('left', "initial")
            alert("win!")

        }


    })
})



        // printSentence();

        // $(document).keypress(function () {

        //     typeLetters();
        //     feedback();

        // });

        // function printSentence() {

        //     sentence = sentences[sentenceIndex];
        //     letters = sentence.split('', sentence.length);
        //     checkLetters = letters;
        //     console.log(sentence);
        //     console.log(letters);
        //     lettersIndex = 0;
        //     do {
        //         $("#sentence").append(`<span id="letters${lettersIndex}">${letters[lettersIndex]}</span>`);
        //         lettersIndex++;
        //     } while (lettersIndex < sentence.length);
        //     lettersIndex = 1;
        //     sentenceIndex++;
        //     $(`#letters${[0]}`).css("background-color", "yellow");
        //     $("#target-letter").append(`<span id="target">${letters[0]}</span>`);

        // };

        // function typeLetters() {

        //     targetLetter();
        //     $(`#letters${lettersIndex}`).css("background-color", "yellow");
        //     console.log(letters[lettersIndex]);
        //     if (lettersIndex > 0) {
        //         $(`#letters${lettersIndex}`).prev().css("background-color", "white");
        //     };

        //     lettersIndex++;
        //     console.log("+++" + lettersIndex);
        //     sentEnd = lettersIndex - 1;

        //     if (sentence.length === lettersIndex - 1) {
        //         $("#sentence").empty();
        //         printSentence();
        //     };
        // };

        // function targetLetter() {

        //     $("#target-letter").empty();
        //     if (letters[lettersIndex] === ' ') {
        //         $("#target-letter").append(`<span id="target">[ SPACE ]</span>`);
        //     } else if (lettersIndex < sentence.length) {
        //         $("#target-letter").append(`<span id="target">${letters[lettersIndex]}</span>`);
        //     };

        // };

        // function feedback() {
        //     $(document).keypress(function () {
        //         if (letters[lettersIndex] == $(`#letters${lettersIndex}`).keypress()) {
        //             $("#feedback").empty();
        //             $("#feedback").append(`<span class="glyphicon glyphicon-ok"></span>`);
        //         } else if (letters[lettersIndex] != e.key.charCodeAt()) {
        //             $("#feedback").empty();
        //             $("#feedback").append(`<span class="glyphicon glyphicon-remove"></span>`);
        //         };
        //     });
        // };
