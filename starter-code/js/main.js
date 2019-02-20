/*
    Utilize the date class and also the css property rotate, float or flex
    
*/
$(document).ready(function(){
    setInterval(clock, 1000) //class 

    function clock(){
        var date = new Date()

        let year = date.getFullYear()
        let day = date.getDay()
        let month = date.getMonth()

        let hour = date.getHours()
        let seconds = date.getSeconds()
        let min = date.getMinutes()
          //  "AM" or "PM" 
  var timeOfDay = ( hour < 12 ) ? "AM" : "PM";

  // 12-hour format 
  hour = ( hour > 12 ) ? hour - 12 : hour;

  // Convert an hours component of "0" to "12"
  hour = ( hour == 0 ) ? 12 : hour;

        $(".clock").html(`<i>${hour} : ${min} : ${seconds}  ${timeOfDay}</i>`)
        
   
        $(".digit_clock").html(`<i>${timeOfDay}</i>`)
        
        let hrPosition= hour*360/12+((min*360/60)/12);
        let minPosition=(min*360/60)+(seconds*360/60)/60;
        let secPosition=seconds*360/60;

        $(".hours").html({'transform' : 'rotate('+ hrPosition +'deg)'});
        $(".minutes").html({'transform' : 'rotate('+ minPosition +'deg)'});
        $(".seconds").html({'transform' : 'rotate('+ hrPosition +'deg)'});
    }

    })

    