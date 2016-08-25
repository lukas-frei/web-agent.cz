$(document).ready(function(){

  // Nav to scroll
  $("nav a").click(function(evn){
      evn.preventDefault();
      $('html,body').scrollTo(this.hash, this.hash);
  });

  // CTA to scroll
  $(".btn").click(function(evn){
      evn.preventDefault();
      $('html,body').scrollTo(this.hash, this.hash);
  });

  // a+href array
  var aChildren = $("nav li").children(); // find the a children of the list items
  var aArray = []; // create the empty aArray
  for (var i=0; i < aChildren.length; i++) {
      var aChild = aChildren[i];
      var ahref = $(aChild).attr('href');
      if (ahref.startsWith('#')) {
        aArray.push(ahref);
      }
  };

  //
  $(window).scroll(function(){
      var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
      var windowHeight = $(window).height(); // get the height of the window
      var docHeight = $(document).height();

      for (var i=0; i < aArray.length; i++) {
          var theID = aArray[i];
          var divPos = $(theID).offset().top; // get the offset of the div from the top of page
          var divHeight = $(theID).height(); // get the height of the div in question
          if (windowPos +200 >= divPos && windowPos < (divPos + divHeight -100)) {
              $("a[href='" + theID + "']").addClass("active");
          } else {
              $("a[href='" + theID + "']").removeClass("active");
          }
      }

  });


});
