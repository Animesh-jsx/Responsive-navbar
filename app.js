const toggleBtn = document.getElementsByClassName('toggle-btn')
const sidebar = document.getElementById('sidebar')
const dropdown =Array.from( document.querySelectorAll('.dropdown-btn'));

function closeAllSubmenus(){
    Array.from( sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

function toggleSidebar(){
    sidebar.classList.toggle('close') 
    closeAllSubmenus()
}

function toggleSubmenu(button){

    if(!button.nextElementSibling.classList.contains('show')){
        closeAllSubmenus()  
    }

    // closeAllSubmenus()

    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle("rotate");
    
    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close')
        
    }
}
