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

  $("a.fa").click(function(event){
    event.preventDefault()
    event.stopPropagation();
    var href = $(this).attr("href")
    var id = $(this).attr("id")

    $.ajax({
      type: "POST",
      url: href,
      data: id,
      success: function(data){

      }
    })
  })



  // $('.vote-button').click(function(e) {
  //   e.preventDefault()
  //   var aRefClicked = $(this).attr("href")
  //   var id = $(this).data("id")
  //   alert("Your post is being processed : " + aRefClicked)
  //   var postNumber = (aRefClicked.match(/\d+/)[0])
  //   var currentPoints = parseInt($("#" + postNumber + " .points").text())
  //   $("#" + postNumber + " .points").text(currentPoints +1)
  //   $("#" + postNumber + " .points").css("color", "#1F3D99")



})