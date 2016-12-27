var $, isAlphaNumeric, loggedInBot, $commandLine, generateCommandLine, $outputLine, $caret, checkArrayContains, writeToConsole, jsImporter, listOfCommands, previousKeySpace, typeCallback, typingOutput, processSentence, previousCommands, prevCommandIndex;

/**
 * Importing Commands
 */
jsImporter = new AutoVersion(FileType.JAVASCRIPT, ['js/command.js']);
jsImporter.importAll();

$ = jQuery;

isAlphaNumeric = new RegExp('^[a-zA-Z0-9:*_ ]$');

previousCommands = [];

prevCommandIndex = 0;

loggedInBot = {
    name : undefined,
    getName : function () {
        'use strict';
        return this.name;
    }
};

previousKeySpace = false;
typingOutput = false;

generateCommandLine = function () {
    'use strict';
    $commandLine = '<div class="console_Line fixed-row">' +
        '<div class="ip_Label grid-cell-d-1  grid-cell-t-1  grid-cell-m-2">' + loggedInBot.getName() + ' : </div>' +
        '<div class="ip_Line grid-cell-d-11  grid-cell-t-11  grid-cell-m-10">' +
        '<span class="caret blink">&nbsp;</span>' +
        '</div>' +
        '</div>';
};

$outputLine = '<div class="console_Line fixed-row">' +
    '<div class="op_Label grid-cell-d-1  grid-cell-t-1  grid-cell-m-2">Akhil : </div>' +
    '<div class="op_Line grid-cell-d-11  grid-cell-t-11  grid-cell-m-10">' +
    '</div>' +
    '</div>';

$caret = '<span class="caret blink">&nbsp;</span>';

checkArrayContains = function (listOfCommands, commandName) {
    'use strict';
    var key = undefined, listOfKeyWords, index, commandEntity;
    commandEntity = {
        found : false,
        keyName : undefined
    };
    if (listOfCommands && commandName) {
        for (key in listOfCommands) {
            if (listOfCommands.hasOwnProperty(key)) {
                listOfKeyWords = listOfCommands[key].keyWords;
                for (index = 0; listOfKeyWords && index < listOfKeyWords.length; index = index + 1) {
                    commandName = commandName.trim().replace(/\s/g,' ');
                    if (listOfKeyWords[index].toLowerCase() === commandName) {
                        commandEntity.found = true;
                        commandEntity.keyName = key;
                        return commandEntity;
                    } else if (new RegExp("\\b" + listOfKeyWords[index].toLowerCase() + "\\b").test(commandName)) {
                        commandEntity.found = true;
                        commandEntity.keyName = key;
                        return commandEntity;
                    } else if(Number(commandName)) {
                    	commandEntity.found = true;
                        commandEntity.keyName = 'number';
                        return commandEntity;
                    }
                }
            }
        }
        return commandEntity;
    }
};

typeCallback = function (elem, output) {
    'use strict';
    typingOutput = false;
    $("#terminal").append($commandLine);
    $("html, body").animate({ scrollTop: $(document).height() }, 500);
};

writeToConsole = function (output) {
    'use strict';
    $($(".console_Line")[$(".console_Line").length - 1]).find(".caret").remove();
    if (output) {
        $("html, body").animate({ scrollTop: $(document).height() }, 500);
        $("#terminal").append($outputLine);
        typingOutput = true;
        $($(".op_Line")[$(".op_Line").length - 1]).typed({
            strings : [output],
            showCursor: false,
            callback: typeCallback
        });
    }
};

$('body').on('keydown', function (e) {
    'use strict';
    e.preventDefault();
    var currentCommand, output, commandEntity, textToBeInserted;
    if (e.which === 8 && !typingOutput) {
        $($('.ip_Line')[$('.ip_Line').length - 1])
            .html($($('.ip_Line')[$('.ip_Line').length - 1])
                  .text()
                  .trim()
                  .slice(0, $($('.ip_Line')[$('.ip_Line').length - 1])
                         .text()
                         .trim()
                         .length - 1) + $caret
                 );
    } else if (e.which === 13 && !typingOutput) {
        currentCommand = $($('.ip_Line')[$('.ip_Line').length - 1])
            .text()
            .trim()
            .toLowerCase();
        currentCommand = currentCommand.split(':')[0];
        previousCommands.push(currentCommand);
        prevCommandIndex = previousCommands.length - 1;
        if (!loggedInBot.name) {
            if (currentCommand.trim()) {
                loggedInBot.name = currentCommand.charAt(0).toUpperCase() + currentCommand.slice(1);
                $('.console_Line').hide('slow');
                generateCommandLine();
                output = listOfCommands.greetUser.execute(loggedInBot.name);
                writeToConsole(output);
            }
        } else {
            commandEntity = checkArrayContains(listOfCommands, currentCommand);
            
            if (!commandEntity.found) {
                output = listOfCommands.noCommandFound.execute(currentCommand);
                writeToConsole(output);
            } else {
                output = listOfCommands[commandEntity.keyName].execute(currentCommand);
                writeToConsole(output);
            }
        }
    } else if (e.which === 38) {
    	if (prevCommandIndex > 0){
    		$($('.ip_Line')[$('.ip_Line').length - 1]).html(previousCommands[prevCommandIndex]);
    		prevCommandIndex = prevCommandIndex--;
    	}
    } else if (isAlphaNumeric.test(e.key) && !typingOutput) {
        if (previousKeySpace) {
            textToBeInserted = $($('.ip_Line')[$('.ip_Line').length - 1]).text();
        } else {
            textToBeInserted = $($('.ip_Line')[$('.ip_Line').length - 1]).text().trim();
        }
        
        if (e.key == ' ') {
        	$($('.ip_Line')[$('.ip_Line').length - 1]).html(textToBeInserted + '' + $caret);
        	previousKeySpace = true;
        } else {
        	$($('.ip_Line')[$('.ip_Line').length - 1]).html(textToBeInserted + e.key + $caret);
        	previousKeySpace = false;
        }
    }
});

$('.show-help').on('click', function (event) {
    'use strict';
    $('#terminal-popup-help').show(300);
});

$('.close-menu').on('click', function (event) {
    'use strict';
    $('#terminal-popup-help').hide(300);
});

var inactiveSince = 0, maxInactiveThreshhold = 29;

var checkState = setInterval(function(){ incrementInactiveTimer(); },1000);

function incrementInactiveTimer(){
    if (loggedInBot.name){
    	inactiveSince++;
    }
    if(inactiveSince > maxInactiveThreshhold){
    	$($('.console_Line')[$('.console_Line').length - 1]).remove();
    	writeToConsole(listOfCommands.userIsBored.execute());
    	maxInactiveThreshhold = maxInactiveThreshhold + 29;
        inactiveSince = 0;
    }
};
$(document).mousemove(function(){
    inactiveSince = 0;
});
$(document).keydown(function(){
    inactiveSince = 0;
});