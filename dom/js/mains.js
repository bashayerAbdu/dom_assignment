// $(document).ready(function(){ //likned w/Jqouery
//     // $("#list").append("<li> five </li>")

//     // $("#list").prepend("<li> five </li>")
//     // $("#list").before("<li> five </li>")
//     // $("#list").after("<li> five </li>")

//     // $("#list").remove()

//     // $("#add").click(function(){
//     //     var textInput = $("#info").val()
//     //     $("#list").append(`<li>${textInput}</li>`)

//     // })


//     // $("ul").on("click", "li", function(){
//     //     $(this).hide("slow")
//     // })
//     //$(selector).toggle(speed,easing,callback) 
//     setInterval(clock, 1000) //class 

//     function clock(){
//         var date = new Date()

//         let year = date.getFullYear()
//         let day = date.getDay()
//         let month = date.getMonth()

//         let hour = date.getHours()
//         let seconds = date.getSeconds()
//         let min = date.getMinutes()
//           //  "AM" or "PM" 
//   var timeOfDay = ( hour < 12 ) ? "AM" : "PM";

//   // 12-hour format 
//   hour = ( hour > 12 ) ? hour - 12 : hour;

//   // Convert an hours component of "0" to "12"
//   hour = ( hour == 0 ) ? 12 : hour;

//         $(".clock").html(`<i>${hour} : ${min} : ${seconds}  ${timeOfDay}</i>`)
        
//     }
    

    

// })