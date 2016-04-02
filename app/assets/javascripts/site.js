// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
GREEN = "#8Bc34a"
RED = "#F44336"
YELLOW = "#ffeb3b"
PURPLE = "#673ab7"




$(function() {
  return $("#fonts").imagesLoaded(function() {
    return $("#fonts").masonry({
      itemSelector: ".box",
      isFitWidth: true
    });
  });
});


$(document).ready(function(){

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
      var id = $(this).attr("id")
      var headerTitle = $("h1" + "#" + id)

      if ($(this).hasClass("red-square")) {
        redSquare(headerTitle)
      }else if ($(this).hasClass("green-square")) {
        greenSquare(headerTitle)
      }else if ($(this).hasClass("purple-square")) {
        purpleSquare(headerTitle)
      }else if ($(this).hasClass("yellow-square")) {
        yellowSquare(headerTitle)
      }
    },function(){
      $(".red-square").css({"background-color": RED})
      $(".green-square").css({"background-color": GREEN})
      $(".purple-square").css({"background-color": PURPLE})
      $(".yellow-square").css({"background-color": YELLOW})
      $(".box>h1").css({"color": "#111"})
    })
  }

  function redSquare(headerTitle){
    headerTitle.css({"color": RED})
    $(".red-square").css({"background-color": "#D32F2F"})
  }

  function greenSquare(headerTitle){
    headerTitle.css({"color": GREEN})
    $(".green-square").css({"background-color": "#689F38"})
  }

  function purpleSquare(headerTitle){
    headerTitle.css({"color": PURPLE})
    $(".purple-square").css({"background-color": "#7B1FA2"})
  }

  function yellowSquare(headerTitle){
    headerTitle.css({"color": YELLOW})
    $(".yellow-square").css({"background-color": "#FBC02D"})
  }

  hoverColors()
})
