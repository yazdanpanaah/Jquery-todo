$(document).ready(function(){
    function removeAllFromLocalStorage(taskItem) {
        let tasks;
        if (localStorage.getItem('tasks') === null) {
            tasks = [];
        } else {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        $.each(tasks,function (index, value) {
            if (taskItem.textContent === value ) {
                tasks.splice(index,1)
            }
        })
        localStorage.setItem('tasks', JSON.stringify(tasks))  
    }}
//         $(".list-group").click(function removeAllFromLocalStorage(event){
//             if( event.target.className.search("delete-item" && confirm('Are You Sure?' ) != -1)){
//                 tasks.splice(event, 1)}
//                 localStorage.setItem('tasks', JSON.stringify(tasks))
//                 event.target.closest('li').remove()
// })



    tasks = localStorage.tasks 
    if(localStorage.getItem('tasks') !== null){
        tasks = JSON.parse(tasks)
        $.each(tasks, function(i){
            if (tasks[i] !== ""){ 
            let liTag = $("<li class='list-group-item d-flex justify-content-between'></li>")
            let ITag = $("<i class='fas fa-times text-danger mr-auto delete-item'></i>")
            $('.list-group').append($(liTag).append(tasks[i]).append(ITag))}
            
        })
        
        $('.list-group').click(function removeTask(event) {
            if (event.target.parentElement.classList.contains('list-group-item')) {
                if (confirm('Are You Sure?')) {
                    event.target.parentElement.remove()
                    removeAllFromLocalStorage(event.target.parentElement) }}})
           }



    $('#task-form').on('submit', function(event){
        event.preventDefault();
        inputTask = $('#task2').val().trim()
    
        if($.trim(inputTask)==''){
            alert('The Task field can not be empty!  please enter somthing')
        }else{
           
                
                    const li_tag = $("<li class='list-group-item d-flex justify-content-between'></li>")
                    const i_tag = $("<i class='fas fa-times text-danger mr-auto delete-item'></i>")
                    $('.list-group').append($(li_tag).append(inputTask).append(i_tag))
                
           
            
        }
  
        $('.list-group').click(function removeTask(event) {
            if (event.target.parentElement.classList.contains('list-group-item')) {
               event.target.parentElement.remove()
                removeAllFromLocalStorage(event.target.parentElement)}
                   
          })
    
        
         
        tasks = []
        if(localStorage.getItem('tasks') === null){
            tasks= []
        }else{
            tasks =JSON.parse(localStorage.getItem('tasks'))
            
        }
        tasks.push(inputTask);
        localStorage.setItem('tasks', JSON.stringify(tasks))})

        $('.clear-tasks').click(function(){
        if(confirm('Are you sure?')){
            $('.list-group').empty()
           localStorage.removeItem('tasks')
        }
        })
    })