
function addTask(){
    var task = $("#task").val();
    if(!isNaN(task)){
        alert('Enter Task Details !!');
    }else{
        $("#taskList").append('<li>'+ task +'</li>');
    }
}