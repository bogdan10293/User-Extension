let setData = document.getElementById('setData');
let showData = document.getElementById('showData');



setData.onclick = function () {
    
    var basicInfo = {
        'FirstName': document.getElementById('firstName').value,
        'LastName': document.getElementById('lastName').value,
        'Email': document.getElementById('email').value
    };
    
 
    chrome.storage.sync.set({"Data": basicInfo}, function() {
          console.log('Your data has been saved!');
         
        })
    
    
}; 


showData.onclick = function(){
    chrome.storage.sync.get("Data", function (data) {
    alert("First name: " + data.Data.FirstName + ", last name: " + data.Data.LastName + ", email: " + data.Data.Email);
});
}



    
    



  