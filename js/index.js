$(document).ready(function(){
  
var flag=true;
  var secondflag=true;
  
  $("#search-box").keyup(function (key) {
    if (key.keyCode == 13) {
      

      if(flag){
    $(this).animate({marginLeft: '-=115%'},700);
       
        flag=false;
      }

      var q = $("#search-box").val();
        $.getJSON("https://en.wikipedia.org/w/api.php?callback=?",
        {
          srsearch: q,
          action: "query",
          list: "search",
          format: "json"
        },
        function(data) {
          $("#results").empty();
          
         $.each(data.query.search, function(i,item){  
            $("#results").append("<div class='real'> <a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "' target='_blank'><h2>" +  item.title + "</h2><p>" + item.snippet + "</p></a></div>");
          });
         

     });
    if(secondflag){
       $("#results").animate({marginTop: '-=25%'},1500);
      secondflag=false
    }
      }
    
});
  
});