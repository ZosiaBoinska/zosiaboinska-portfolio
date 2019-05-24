$(document).ready(function() {


  $('.menu-toggle').click(function() {
    $('.menu').toggleClass('menu--open', 500);
    $(this).toggleClass('open')
  })


  const changeSection=function (menuBtn, pageSection){
      $(menuBtn).on('click', function(){
        let scrollPosition = $(pageSection).offset().top - 170;
        $('body, html').animate({
            scrollTop: scrollPosition
        },500)
      })
  };


  $(function(){
    changeSection('.menu-home', '#home');
    changeSection('.menu-about', '#aboutMe');
    changeSection('.menu-why', '#whyProgramming');
    changeSection('.menu-who', '#whoAmI');
    changeSection('.menu-skills', '#skills');
    changeSection('.menu-projects', '#projects');
    changeSection('.menu-contact', '#contact');
    changeSection('.read-more', '#aboutMe');
   });


  if ( !($('.about-header1').hasClass('active')) && ($(this).scrollTop() > $('.about-header1').offset().top + $('.about-header1').outerHeight() - $(window).height()) ) {
    $('.about-programming-div').css('display', 'none');
  }


  const showAboutMeWhyProgramming = function(){
    $(document).on('scroll', function(){
      const screenHeight = $(window).height();
      const scrollValue = $(this).scrollTop();

      const $header1= $('.about-header1');
      const $text1= $('.about-text1');
      const $header2= $('.about-header2');
      const $text2= $('.about-text2');

      const header1FromTop= $header1.offset().top;
      const text1FromTop= $text1.offset().top;
      const header2FromTop= $header2.offset().top;
      const text2FromTop= $text2.offset().top;

      const header1Height= $header1.outerHeight();
      const text1Height= $text1.outerHeight();
      const header2Height= $header2.outerHeight();
      const text2Height= $text2.outerHeight();


      if(scrollValue > header1FromTop + header1Height - screenHeight){
        $header1.addClass('active');
        $('.about-programming-div').css('display', 'block');
      };

      if(scrollValue > (text1FromTop + (text1Height/2.5) - screenHeight)){
        $text1.addClass('active');
      };

      if(scrollValue > header2FromTop + header2Height - screenHeight){
       $header2.addClass('active');
      };

      if(scrollValue> (text2FromTop + (text2Height/2.5) - screenHeight)){
         $text2.addClass('active');
      };

      if(scrollValue<100){
        $header1.removeClass('active');
        $text1.removeClass('active');
        $header2.removeClass('active');
        $text2.removeClass('active');
      };

      if (scrollValue > (screenHeight / 2)) {
        $('.read-more').css('display', 'none');
      } else {
        $('.read-more').css('display', 'block');
      }

    });
  };

  showAboutMeWhyProgramming();


  $("#typed").css('font-size', '1.125em')

  var typed = new Typed("#typed", {
    strings: ["My name is...", "Nazywam się...", "I was born...", "Jestem..."],
    loop: true,
    loopCount: Infinity,
    backDelay: 1000,
    backSpeed: 30,
    typeSpeed: 50
  });


  const myNumbers = [1,2,3,4];

  $.each(myNumbers, function(index, value){
    $('#who-am-i--question'+value).click(function() {
      $('#who-am-i--question'+value).hide();
      $('#who-am-i--answer'+value).show();
      $('#who-am-i--description'+value).css('background-color', '#335c67');
    });
    $('#who-am-i--answer'+value).click(function() {
      $('#who-am-i--question'+value).show();
      $('#who-am-i--answer'+value).hide();
      $('#who-am-i--description'+value).css('background-color', 'inherit');
    });
  });


  const animationSpeed = 3000;
  const pause = 6500;
  let currentSlide = 1;

  const $slider = $('#who-am-i--answer3');
  const $slideContainer = $slider.find('.who-am-i--favorites-slides')
  const $slides = $slideContainer.find('.who-am-i-random');

  let interval;

  function startSlider() {
    interval = setInterval(function() {
      $slideContainer.animate({'margin-left': '-='+$('.who-am-i-random').outerWidth()}, animationSpeed, function() {
        currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', '0');
        }
      });
    }, pause);
  }
  function stopSlider() {
    clearInterval(interval);
  }

  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);



  $(window).resize(function() {
    currentSlide = 1;
    $slideContainer.css('margin-left', '0');
    startSlider;
  });

  startSlider();


  const projectList = ['.project1', '.project2'];
  const projectDescriptionList = ['.project-description1', '.project-description2'];
  const projectTechnologyList = ['.technology-description1', '.technology-description2'];
  const dividingLine = ['.dividing-line1', '.dividing-line2'];

  $.each(projectList, function(index, value) {

    $(value).on('mouseenter', function() {
      $(projectDescriptionList[index]).css("transform", "scale(1)");
      $(projectTechnologyList[index]).css("transform", "scale(1)");
      $(dividingLine[index]).css("transform", "scale(1)")
      $(value).find('img').css("opacity", "0.1");
    });

    $(value).on('mouseleave', function() {
      $(projectDescriptionList[index]).css("transform", "scale(0)");
      $(projectTechnologyList[index]).css("transform", "scale(0)");
      $(dividingLine[index]).css("transform", "scale(0)")
      $(value).find('img').css("opacity", "1");
    });
  });

});
