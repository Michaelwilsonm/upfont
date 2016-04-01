// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
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

  $(".red-square").hover(function(){
    var id = $(this).attr("id")
    var headerTitle = $("h1" + "#" + id)
    headerTitle.css({"color": "#F44336"})
    $(this).css({"background-color": "#D32F2F"})
  },function(){
    var id = $(this).attr("id")
    var headerTitle = $("h1" + "#" + id)
    headerTitle.css({"color": "#111"})
    $(this).css({"background-color": "#F44336"})
  })

  $(".green-square").hover(function(){
    var id = $(this).attr("id")
    var headerTitle = $("h1" + "#" + id)
    headerTitle.css({"color": "#8Bc34a"})
    $(this).css({"background-color": "#8BC34A"})
  },function(){
    var id = $(this).attr("id")
    var headerTitle = $("h1" + "#" + id)
    headerTitle.css({"color": "#111"})
    $(this).css({"background-color": "#689F38"})
  })

  $(".yellow-square").hover(function(){
    var id = $(this).attr("id")
    var headerTitle = $("h1" + "#" + id)
    headerTitle.css({"color": "#ffeb3b"})
    $(this).css({"background-color": "#FBC02D"})
  },function(){
    var id = $(this).attr("id")
    var headerTitle = $("h1" + "#" + id)
    headerTitle.css({"color": "#111"})
    $(this).css({"background-color": "#ffeb3b"})
  })

  $(".purple-square").hover(function(){
    var id = $(this).attr("id")
    var headerTitle = $("h1" + "#" + id)
    headerTitle.css({"color": "#673ab7"})
    $(this).css({"background-color": "#7B1FA2"})
  },function(){
    var id = $(this).attr("id")
    var headerTitle = $("h1" + "#" + id)
    headerTitle.css({"color": "#111"})
    $(this).css({"background-color": "#673ab7"})
  })
})
