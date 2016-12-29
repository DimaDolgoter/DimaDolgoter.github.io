$(function(){
 $(".element").typed({
          //  strings: ["<!DOCTYPE html>^1000 \n <html ^1000 \n <head> \n"],
            stringsElement: $('#typed-strings'),
             startDelay: 0,
            // backspacing speed
            typeSpeed: 20,
            // time before typing starts
             backSpeed: 0,
             // shuffle the strings
            backDelay: 5000,
            // Delay remove 5 sec 
            loop: false,
            // false = infinite
            //loopCount: 2,
            // show cursor
            contentType: 'text',
       showCursor: true,
            // character for cursor
            cursorChar: "<i class='fa fa-italic'></i>",
            // attribute to type (null == text)
     contentType: 'html'
        });
    });

/*плавный скролл*/
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 500, 'swing', function () {
 window.location.hash = target;
 });
 });
    
    
