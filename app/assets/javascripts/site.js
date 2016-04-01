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
        console.log("error")
      }
    })
  })


})