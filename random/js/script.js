
// Vars
var data = [
    ["Name", "Surname", "Email", "Phone"]
];
var newData = data;


// Validate Phone
$(function validatePhone() {
    $("#phone").mask("+38(099) 999-9999");
});


// Create Table
$(function createTable() {
    $('#table').flextabledit({
        content: data
    });
});


// User typing watcher
function saveEdits() {
    $('table input').keyup(function(){
    newData = $('#table').flextabledit('getData');
    });
}


// Add Data to table
$(function fillTable(){
        $('#main-form').on('submit', function (event) {
            // Receive form's data
            event.preventDefault();
            var info = $(this).serializeArray();

            // Push form's data to new array
            var newuser = [];

            for (var i = 0; i < info.length; i++) {
                newuser.push(info[i]['value']);
            }

            // Push NewUser's info to table data
            newData.push(newuser);
//
            // Destroy table and build new one with updated data
            $('#table').flextabledit('destroy');
            $('#table').flextabledit({
                content: newData
            });

            // Save user edits
            saveEdits();

            // Reset form fields
            document.getElementById('main-form').reset();

        });
});


// Select Winner
$(function selectWinner(){
    $('.new-winner').on('click', function(){
        var id = Math.floor((Math.random() * (newData.length-1))+1);
        console.log(newData[id]);
        var winner = '<li>'+newData[id][0]+' '+newData[id][1]+'</li>';
        $('.winners-list').append(winner);
    });
});