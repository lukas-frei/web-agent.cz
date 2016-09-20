$(document).ready(function(){


  // Nav to scroll
  $("#nav-index a").click(function(evn){
      evn.preventDefault();
      $('html,body').scrollTo(this.hash, this.hash);
  });

  // CTA to scroll
  $(".btn").click(function(evn){
      evn.preventDefault();
      $('html,body').scrollTo(this.hash, this.hash);
  });
  $(".btn-ghost").click(function(evn){
      evn.preventDefault();
      $('html,body').scrollTo(this.hash, this.hash);
  });
  $(".btn-kontakt").click(function(evn){
      evn.preventDefault();
      $('html,body').scrollTo(this.hash, this.hash);
  });
  $(".btn-omne").click(function(evn){
      evn.preventDefault();
      $('html,body').scrollTo(this.hash, this.hash);
  });

  $(".cenik-sprava").click(function(evn){
    evn.preventDefault();
    $('.polozka2').toggle();
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


  // horizontal nav offset
  if (matchMedia) {
  var mq = window.matchMedia("(min-width: 651px) and (max-width: 860px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
  }

  function WidthChange(mq) {
    if (mq.matches) {
      $.extend($.scrollTo.defaults, {
        offset: -100,
      });
    } else {
      $.extend($.scrollTo.defaults, {
        offset: 0,
      });
    }
  }


  // nav-sec
  $(".btn-uvod").click(function(evn){
    evn.preventDefault();
    $('.box').css("display", "none");
    $('#sluzby-uvod').css("display", "block");
    $('.nav-sec').css("display", "none");

    $('.nav-sec > a').removeClass("active-sec");
    $(".nav-sec > .btn-uvod").addClass("active-sec");

    $('html,body').scrollTo('#sluzby')
  });

  $(".btn-spoluprace").click(function(evn){
    evn.preventDefault();
    $('.box').css("display", "none");
    $('#sluzby-spoluprace').css("display", "block");
    $('.nav-sec').css("display", "block");

    $('.nav-sec > a').removeClass("active-sec");
    $('.nav-sec > .btn-spoluprace').addClass("active-sec");

    $('html,body').scrollTo('#sluzby')
  });

  $(".btn-tech").click(function(evn){
    evn.preventDefault();
    $('.box').css("display", "none");
    $('#sluzby-tech').css("display", "block");
    $('.nav-sec').css("display", "block");

    $('.nav-sec > a').removeClass("active-sec");
    $(".nav-sec > .btn-tech").addClass("active-sec");

    $('html,body').scrollTo('#sluzby')
  });

  $(".btn-navstevnost").click(function(evn){
    evn.preventDefault();
    $('.box').css("display", "none");
    $('#sluzby-navstevnost').css("display", "block");
    $('.nav-sec').css("display", "block");

    $('.nav-sec > a').removeClass("active-sec");
    $(".nav-sec > .btn-navstevnost").addClass("active-sec");

    $('html,body').scrollTo('#sluzby')
  });


  // scrolldepth tracking
  jQuery(function() {
    jQuery.scrollDepth({
      elements: ['#sluzby', '#projekty', '#konzultace', '#cenik', '#kontakt', '#omne', 'footer'],
      percentage: false,
      pixelDepth: false,
      nonInteraction: false
    });
  });


});
