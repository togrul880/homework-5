  window.onload = function () {
    var today = new Date();
    date = moment().format('LL');
    // get a current day
//$("#currentDay").text(moment().format("dddd, MMMM Do"));
    $('#currentDay').html(date);
 }
 // create a  time blocks
 //var hour = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]


 var workHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];
 var $container = $(".container");
 //hour.forEach(function(time){
   // var text = $("<textarea>").attr("dataStorage", time);
   // var btn = $("<button>").addClass("saveBtn fas fa-save");
   // var row = $("<div>").addClass("row");
   // var hours = $("<div>").addClass("hour");
   // let any = parseInt(time);

    //row.append(hours, text, btn);
  // setting AM and PM
  //$(".container").append(row);
   // if(any < 12){
       // hours.text(time + "am");
    
   // }else if(any > 12){
        //hours.text(time - 12 + "pm");

   // }else{
        
   // hours.text(time + "pm");

   // }

 //});
 $.each(workHours, function (index, value) {
    var backgroundColor = getTime(value)
    var $newRow = $('<div>').addClass('row');
    var $newCol1 = $('<div>' + value + '</div>').addClass('col-sm-1 hour time');
    var $newCol2 = $('<div></div>').addClass('col-sm-10 past description '+backgroundColor+' time-' + value);
    var $newCol3 = $('<button></button>').addClass('col-sm-1 saveBtn');
    var textarea = $('<textarea></textarea>').addClass('col-sm-12 input');
    var icon = $('<i class="far fa-save fa-3x" style="margin: auto; padding: 10px;"></i>');
    
    
    $newRow.append($newCol1);
    $newRow.append($newCol2);
    $newCol2.append(textarea);
    $newRow.append($newCol3);
    $newCol3.append(icon);
    $container.append($newRow);
 })
  // fn for button to save to local storage
  //$(".saveBtn").on("click", function(){
   // localStorage.setItem($(this).prev("textarea").attr("dataStorage"),$(this).prev("textarea").val());
//});


//$("*[dataStorage]").each(function(){
    //$(this).val(localStorage.getItem($(this).attr("dataStorage"))
//)});

//});

 $('.saveBtn').click(function () {
    var time = $(this).siblings('div.time').text();
    console.log(time);
    var input = $(this).siblings('div.description').children("textarea").val();
    console.log(input);
    localStorage.setItem(time, input);
 })

 
// variable for new date and new hour

//var newDate = new Date()
//var newHour = newDate.getHours();
//console.log(newHour);
 
function getTime(current) {
   var date = new Date();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   
 
   var newformat = hours >= 12 ? 'PM' : 'AM';  
   
 
   hours = hours % 12;  
   
   hours = hours ? hours : 12;  
   minutes = minutes < 10 ? '0' + minutes : minutes;
   var currentTime = hours + newformat;

   //$("*[dataStorage").each(function(){
   // if (parseInt($(this).attr("dataStorage")) === newHour){

       // $(this).addClass("present").removeClass("past future");

   // }else if(parseInt($(this).attr("dataStorage")) < newHour){
        //$(this).addClass("past").removeClass("present future");

    //}else{
       // $(this).addClass("future").removeClass("past present");
   // };
    
 //});
   $.each(workHours, function (index, value) {
    console.log(value)
    $('.time-'+value+' .input').val(localStorage.getItem(value))
 })
   
   if(currentTime == current){
     
      return 'red'
   }
   if(hours == 12 && hours > parseInt(current) && current.includes('PM')){
      return 'green'
   }
   if(current.includes('AM') && newformat == 'PM'){

      return 'gray'
   } else if(newformat == 'AM' && current.includes('PM')){
      return 'green'
   }
   
   if(current.includes(newformat)){
      var currentNumber = parseInt(current.replace(newformat, ''))
      if(currentNumber <= hours){
         return 'gray'
      } else if(currentNumber == 12){
         return 'gray'
      } else {
         return 'green'
      }
   }
   console.log(hours + newformat);
   return ''
}