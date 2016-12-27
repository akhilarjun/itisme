var listOfCommands, returnRandomOutput, loggedInUser;

returnRandomOutput = function (arr) {
    'use strict';
    var randomNum = Math.floor(Math.random() * (arr.length));
    return arr[randomNum];
};

listOfCommands = {
    greetUser : {
        returnStatements : [
            'Welcome, ',
            'Hey! That is a cool name. Welcome ',
            'Greetings ',
            'Nice to meet you, '
        ],
        execute : function (user) {
            'use strict';
            loggedInUser = user;
            return returnRandomOutput(this.returnStatements) + user;
        }
    },
    noCommandFound : {
        returnStatements : [
            'Bad Command : ',
            'Guess there is a typo, no command found like ',
            'Hey, I am sorry. I don\'t know what that means : ',
            'Sorry there is no command like '
        ],
        execute : function (wrongCommand) {
            'use strict';
            return returnRandomOutput(this.returnStatements) + wrongCommand + ' <br> Type \' <span style="color:white;font-style:italic;"> help </span> \' to access the list of  supported commands';
        }
    },
    number : {
        returnStatements : [
	        'No, this is my number : ',
	        'I like this : ',
	        'Now since we are shuffling numbers, this is my choice : ',
	        'Here we go : '
	    ],
        execute : function () {
            'use strict';
            var arr = [9, 99, 999, 9999, 99999, 999999, 9999999, 99999999, 999999999],
                maxLimit = arr[Math.floor(Math.random() * (arr.length))];
            return (returnRandomOutput(this.returnStatements) + Math.floor(Math.random() * (maxLimit))).toString();
        }
    },
    userIsBored : {
        returnStatements : [
            'I hope you aren\'t bored!',
	        'Hey, you there ?',
	        'You know, I might sleep off',
	        'Hey, psst! you should type something now'
	    ],
	    execute : function (wrongCommand) {
	        'use strict';
	        return returnRandomOutput(this.returnStatements);
	    }
    },
    loggedInName : {
        keyWords : ['my name', 'logged in', 'who am i'],
        returnStatements : [
            'You are <span style="color:#fff;"> ',
            'I remember you, <span style="color:#fff;"> '
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements) + loggedInUser + ' </span>';
        }
    },
    myName : {
        keyWords : ['name', 'ur name', 'your name', 'akhil', 'akhil arjun'],
        returnStatements : [
            'I am <span style="color:#fff;"> Akhil Arjun </span>',
            '<span style="color:#fff;"> Akhil Arjun </span>',
            '<span style="color:#fff;"> Akhil </span>'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    wellBeing : {
        keyWords : ['how are you'],
        returnStatements : [
            'I am fine',
            'Am Great'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    whereDoILive : {
        keyWords : ['where are you', 'where do you stay', 'where do you live', 'you live'],
        returnStatements : [
            'I am right here. We are talking now, aren\'t we? ;)',
            'Mumbai, India',
            'I am in Mumbai',
            'Ulhasnagar, Mumbai - India'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    indefinitives : {
        keyWords : ['how is', 'how much', 'how are', 'how could', 'how can', 'how would', 'how to', 'how'],
        returnStatements : [
            'I am not sure',
            'No idea'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    questionsWithWhat : {
        keyWords : ['what is', 'what are', 'what should', 'what would'],
        returnStatements : [
            'I am not quite aware of it',
            'I don\'t think I should answer that',
            'I think I am not the right person to comment on it',
            'How about you tell me what you think about it'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    questionsWithWhere : {
        keyWords : ['where is', 'where are', 'where should', 'where would', 'where in'],
        returnStatements : [
            'You really think I would know that ? ',
            'This is absurd! I don\'t know',
            'I can\'t really know. Can you tell me ?'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    salutation : {
        keyWords : ['hello', 'hey', 'hi', 'hola', 'yo'],
        returnStatements : [
            'Hi !! I am Akhil Arjun, How can i help you ?',
            'Heyo!!',
            'Whatsup yo!',
            'Ola!!'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    usercan : {
        keyWords : ['i can', 'i will', 'i would', 'i could'],
        returnStatements : [
            'Good for you!',
            'Really ?',
            'I doubt that'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    strongWords : {
        keyWords : ['hate', 'death', 'love'],
        returnStatements : [
            ' ! that is a strong emotion there',
            ', really ?',
            ' is not permanent. It\'s all about perception',
            ' is not permanent.'
        ],
        execute : function (command) {
            'use strict';
            var theWord, i;
            for (i = 0; i < this.returnStatements.length; i = i + 1) {
                if (command.indexOf(this.keyWords[i]) > -1) {
                    theWord = this.keyWords[i];
                }
            }
            theWord = theWord.charAt(0).toUpperCase() + theWord.slice(1);
            return theWord + returnRandomOutput(this.returnStatements);
        }
    },
    appreciation : {
        keyWords : ['wow', 'is great', 'awesome', 'amazing', 'great'],
        returnStatements : [
            'Glad you liked',
            'That is kind of you',
            'I think so too, LOL ;)'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    funny : {
        keyWords : ['lol', 'rofl', 'hehehe', 'hehe', 'haha', 'hahaha', 'laugh out loud'],
        returnStatements : [
            'I am glad i made you laugh',
            'Was it that funny ?',
            'LOL &#9786; ',
            'Hehehe &#9786; ',
            'I know, right ? &#9787; '
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    coffee : {
        keyWords : ['coffee'],
        returnStatements : [
            'I &hearts; coffee',
            '<div style="font-size:13px; color: orange;"> &nbsp; ) <br> &nbsp; ( <br> [_]} </div>',
            'I like it filtered &#9749; '
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    infoCommand : {
        keyWords : ['info', 'who are you'],
        returnStatements : [
            'I am a front end <span style="color:#fff;"> UI developer </span>, with crazy love for coffee',
            ' &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   \\|||/ <br>'+
            ' &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;(o &nbsp; o ) <br>'+
            ' |~~~~oo0~~(_)~~~~~~~| <br> |  &nbsp; &nbsp; I am a front end &nbsp; &nbsp; &nbsp; | <br>'+
            ' |  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; developer.  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | <br>'+
            ' .~~~~~~~~~~~~~0oo~~~. <br>'+
            ' &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp;   |__| &nbsp;  |__| <br>'+
            ' &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;   || &nbsp; || <br> '+
            ' &nbsp;  &nbsp;  &nbsp;  &nbsp; &nbsp;  &nbsp;  &nbsp; &nbsp; oo0 &nbsp; 0oo'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    aboutMe : {
    	keyWords : ['about yourself', 'yourself', 'you do', 'more about you', 'you actually do'],
        returnStatements : [
            'I like video games and music',
            'I like coffee &#9749; ',
            'I am 5 foot 9 inch tall, if that helps'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    userIsSorry : {
    	keyWords : ['i am sorry', 'am sorry', 'sorry'],
        returnStatements : [
            'I don\'t think anyone should be sorry',
            'Let\'s forget this ever happened',
            'Eeeshhh, things are getting too emotional LOL'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    games : {
    	keyWords : ['game', 'games', 'which game'],
        returnStatements : [
            'Games like Halo, Mario',
            'The ones that has strategy involved',
            'First person shooter',
            'No one can beat Call of Duty'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    quit : {
        keyWords : ['quit'],
        execute : function () {
            'use strict';
            window.location.reload();
        }
    },
    commandList : {
    	keyWords : ['command', 'commands', 'help'],
        returnStatements : [
            '<div style="color:white"> info &nbsp; &nbsp; Prints info about Me <br> quit &nbsp; &nbsp; Quits this chat session </div>'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    definitives : {
        keyWords : ['ok', 'okay', 'k', 'hmm', 'hm', 'hmmm', 'hmmmm'],
        returnStatements : [
            'Okay',
            'Ok',
            'Hmm'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    definitives_positive : {
        keyWords : ['done', 'yeah', 'nice', 'cool', 'yes'],
        returnStatements : [
            'Okay',
            'Cool, that\'s awesome',
            'Nice',
            'Anything more I can help you with ?',
            'Yeah',
            'Great!'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    definitives_negative : {
        keyWords : ['no', 'nope', 'never', 'naa', 'not'],
        returnStatements : [
            'Okay',
            'Sorry about that',
            'Ooh'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    endOfConversation : {
        keyWords : ['bye', 'exit', 'esc', 'stop'],
        returnStatements : [
            'Okay',
            'It was nice knowing you',
            'Till next time',
            'See you later, alligator!',
            'Sayanora Buddy!',
            'Sure.'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    },
    offensive : {
        keyWords : ['fuck', 'shit', 'get lost', 'wtf', 'asshole', 'bitch'],
        returnStatements : [
            'That is rude !',
            'Hey, be cool !',
            'You don\'t want me on your bad side',
            'That is so mean of you to say',
            'That is a bit harsh of you!',
            'You talk like that to a Bot ? LOL real mature!',
            'Calm down buddy'
        ],
        execute : function () {
            'use strict';
            return returnRandomOutput(this.returnStatements);
        }
    }
};