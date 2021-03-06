// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
GREEN = "#8Bc34a"
RED = "#F44336"
YELLOW = "#ffeb3b"
PURPLE = "#673ab7"

$(document).ready(function(){

  $(function() {
    return $("#fonts").imagesLoaded(function() {
      return $("#fonts").masonry({
        itemSelector: ".box",
        isFitWidth: true
      });
    });
  });

  $(".fa.fa-arrow-circle-o-up.fa-2x.non-clicked").click(function(event){
    event.preventDefault()
    event.stopPropagation();
    var href = $(this).attr("href")
    var id = $(this).attr("id")
    var voteCount = parseInt($(this).next(".votes").html().split(" ")[0])
    $(this).removeClass("non-clicked").addClass("liked")
    $(this).next(".votes").css({"color": "#E91E63"})

    if ($(this).attr("href") == "/" + id + "/upvote" ) {
      $(this).next(".votes").text(voteCount + 1 + " votes")
    }

    $(this).attr("href", "javascript: void(0)")

    $.ajax({
      type: "POST",
      url: href,
      data: id,
      success: function(data){
      },
      error: function(error){
        console.log("error, already voted")
      }
    })
  })

  function hoverColors(){
    $(".squares>li>div").hover(function(){
      var id = $(this).closest("ul").attr("id")
      var headerTitle = $("h1" + "#" + id)
      headerTitle.css({"color": "red"})
      var divEle = $(this)

      if ($(this).hasClass("red-square")) {
        redSquare(headerTitle, divEle)
        $(this).next(".red").show(100)
      }else if ($(this).hasClass("green-square")) {
        greenSquare(headerTitle, divEle)
        $(this).next(".green").show(100)
      }else if ($(this).hasClass("purple-square")) {
        purpleSquare(headerTitle, divEle)
        $(this).next(".purple").show(100)
      }else if ($(this).hasClass("yellow-square")) {
        yellowSquare(headerTitle, divEle)
        $(this).next(".yellow").show(100)
      }
    },function(){
      $(".red-square").css({"background-color": RED})
      $(".green-square").css({"background-color": GREEN})
      $(".purple-square").css({"background-color": PURPLE})
      $(".yellow-square").css({"background-color": YELLOW})
      $(".box>h1").css({"color": "#111"})
      $(".hex").hide()
    })
  }

  function redSquare(headerTitle, divelement){
    headerTitle.css({"color": RED})
    divelement.css({"background-color": "#D32F2F"})
  }

  function greenSquare(headerTitle, divelement){
    headerTitle.css({"color": GREEN})
    divelement.css({"background-color": "#689F38"})
  }

  function purpleSquare(headerTitle, divelement){
    headerTitle.css({"color": PURPLE})
    divelement.css({"background-color": "#7B1FA2"})
  }

  function yellowSquare(headerTitle, divelement){
    headerTitle.css({"color": YELLOW})
    divelement.css({"background-color": "#FBC02D"})
  }
  hoverColors()

  function curatorClick(){
    var click = 0
    $(".left li:eq(2)").click(function(e){
      console.log(this)
      click ++
      e.preventDefault()
      if (click % 2 == 1) {
        $(this).children().css( "color", "#F48FB1" )
        $("#modal").stop().animate({
          left: "35px",
          opacity: "1"
        }, 300)
      }else{
        $(this).children().css( "color", "#000" )
        $("#modal").stop().animate({
          left: "-150px",
          opacity: "0"
        }, 300)
      }
    })
  }

  curatorClick()

})










