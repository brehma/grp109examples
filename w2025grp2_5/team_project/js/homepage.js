document.addEventListener("DOMContentLoaded", function () {
    // List of the names
    var names = ["Aatiqa", "Jesse", "Temirlan"];
    var index = 0; 

    // Function to update the displayed name
    function updateNames() {
        document.getElementById("scrolling-names").textContent = names[index]; 
        index = (index + 1) % names.length; 
         setTimeout(updateNames, 2000);
    }
    
    // This will update the names
    updateNames();
    
});
