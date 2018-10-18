$(".messages").animate({ scrollTop: $(document).height() }, "fast");

$("#profile-img").click(function() {
    $("#status-options").toggleClass("active");
});


message = $(".message-input input").val();

function newMessage() {
    message = $(".message-input input").val();
    if($.trim(message) == '') {
        return false;
    }
    $('<li class="replies"><img src="image/husky.jpg" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
    $('.message-input input').val(null);
    $('.contact.active .preview').html('<span>You: </span>' + message);
    $(".messages").animate({ scrollTop: $(document).height() }, "fast");


var apigClient = apigClientFactory.newClient({
    apiKey: 'CpuFubN73m9xxbUtZvGl23wTp3McJXOV1EgDy7B9'
});

function chatbotResponse() {

        var params = {
                //This is where any header, path, or querystring request params go. The key is the parameter named as defined in the API
                // 'bookid' : $('input[name=bookid]').val()
        };
        var body = {
                // This is where you define the body of the request
            /* Schema:*/
            messages: [
                {
                    type: "string",
                    unstructured: {
                        id: ((messages.length - 1) / 2).toString(),
                        text: $(".message-input input").val(),
                        timestamp: new Date().getTime().toString()
                    }

                }
            ]           
        };
        var additionalParams = {
                //If there are any unmodeled query parameters or headers that need to be sent with the request you can add them 
        };
    
        apigClient.chatbotPost(params, body, additionalParams)
                .then(function(result){
                        response_body = JSON.parse(result.data.body)
                        botMessage = response_body.messages[0].unstructured.text;
                        // if ($(".message-input input").val() === 'hi' || $(".message-input input").val() =='hello') {
                        //     botMessage='Hi';
                        // }
                        message= $(".message-input input").val();
                        $('<li class="sent"><img src="image/corgi.jpg" alt="" /><p>' + botMessage + '</p></li>').appendTo($('.messages ul'));
                        $('.message-input input').val(null);
                        $('.contact.active .preview').html('<span>You: </span>' + botMessage);
                        $(".messages").animate({ scrollTop: $(document).height() }, "fast");

                }).catch( function(result){
                        console.log(result);
                }); 
            }


$('.submit').click(function() {
  newMessage();
  chatbotResponse();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    newMessage();
    chatbotResponse();
    return false;
  }
});
