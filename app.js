$.ajax("data.json").then(function(response){
    for(var i=0; i<response.length; i++){
        var $content = '';
        var id = response[i].id;
        var gender = response[i].gender;
        var first_name = response[i].first_name;
        var last_name = response[i].last_name;
        var email = response[i].email;

        $content = 'ID: ' + id + '<br/>' + 'Gender: ' + gender + '<br/>' + 'First Name: ' + first_name + '<br/>' + 'Last Name: ' + last_name + '<br/>' + 'Email: '+ email + '<br/>' + '<br/>';

        $("#container").append($content);
    }
});