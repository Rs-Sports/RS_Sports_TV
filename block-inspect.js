document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123 || 
       (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key.toUpperCase())) || 
       (e.ctrlKey && e.key.toUpperCase() === 'U')) {
        return false;
    }
};