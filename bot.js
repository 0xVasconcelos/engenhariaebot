var telegram = require('telegram-bot-api');
var api = new telegram({
    token: 'token',
    updates: {
        enabled: true,
        get_interval: 50
    }
});

api.on('message', function(message) {
    var chat_id = message.chat.id;
    if(message.new_chat_participant){
        var newMember = message.new_chat_participant;
        sendMessages("Seja bem-vindo(a) " + newMember.first_name + "! Para conhecer as regras digite /regras :)",chat_id);
    }
    if(message.text == "/regras"){
        sendMessages("Regras estão sendo elaboradas! Aguarde ;)", chat_id);
    }
    console.log(message);

});

function sendMessages(msg, chat_id) {
    api.sendMessage({
        chat_id: chat_id,
        text: msg
    }, function(err, message) {
        if (err)
            console.log(err);
    });
}
