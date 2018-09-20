var links = ["https://media.giphy.com/media/LuWMkeuoOo5Bm/200.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/8/enhanced/webdr08/anigif_enhanced-buzz-8915-1405685252-4.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/8/enhanced/webdr09/anigif_enhanced-buzz-32587-1405685331-4.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/8/enhanced/webdr10/anigif_enhanced-buzz-31768-1405685443-14.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/8/enhanced/webdr02/anigif_enhanced-buzz-21069-1405685596-7.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/8/enhanced/webdr04/anigif_enhanced-buzz-21129-1405685676-5.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/8/enhanced/webdr02/anigif_enhanced-buzz-21073-1405685355-4.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/8/enhanced/webdr02/anigif_enhanced-buzz-21072-1405685728-11.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/8/enhanced/webdr02/anigif_enhanced-buzz-21071-1405685749-4.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/10/enhanced/webdr07/anigif_enhanced-buzz-30093-1405693795-29.gif",
            "http://s.mlv-cdn.com/img/1b68c2e95633d32b1df686e11f4a61d7.600x.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/11/enhanced/webdr10/anigif_enhanced-buzz-32706-1405698595-7.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/10/enhanced/webdr02/anigif_enhanced-buzz-22122-1405694288-10.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/10/enhanced/webdr06/anigif_enhanced-buzz-26841-1405694334-4.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/10/enhanced/webdr04/anigif_enhanced-buzz-28641-1405694432-7.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/10/enhanced/webdr04/anigif_enhanced-buzz-31256-1405694481-17.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/10/enhanced/webdr02/anigif_enhanced-buzz-20891-1405694642-12.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/10/enhanced/webdr08/anigif_enhanced-buzz-29975-1405694372-11.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/10/enhanced/webdr11/anigif_enhanced-buzz-22965-1405694448-4.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/10/enhanced/webdr11/anigif_enhanced-buzz-23057-1405694463-6.gif",
            "https://img.buzzfeed.com/buzzfeed-static/static/2014-07/18/10/enhanced/webdr04/anigif_enhanced-buzz-32136-1405694697-10.gif",
            "http://www.pbh2.com/wordpress/wp-content/uploads/2013/06/funny-gif-clown-prank.gif",
            "http://www.pbh2.com/wordpress/wp-content/uploads/2013/06/funny-gif-game-show-fail.gif",
            "http://www.pbh2.com/wordpress/wp-content/uploads/2013/06/funny-gif-strip-tease-prank.gif",
            "https://media.giphy.com/media/d2Z8bNPZsbz0PmIU/giphy.gif"];

$(document).ready(function () {
  var node = "";
  var date = new Date();
    
  for (i = 1; i <= links.length-1; i++) {
    if(date.getMonth() == 11) {
      
      if(i <= date.getDate()) {
        
        if(i == 24) {
          node += '<div class="view extra"><a href="' + links[i] + '">' + i + '</a></div>';
        }
        else
          node += '<div class="view"><a href="' + links[i] + '">' + i + '</a></div>';
        }
      else 
        node += '<div class="view disabled"><a>' + i + '</a></div>';
    }
    else {
      node += '<br><div class="no-winter"><p>You shall wait until winter comes again!</p></div>';
      break;
    }
  }

  $("#title").append(node);
});