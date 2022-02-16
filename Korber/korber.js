$(document).ready(function(){
  $("#btn").click(function(){
  var firstName=$("#firstName").val();
  var lastName = $("#lastName").val();
  var company = $("#company").val();
  var email = $("#email").val();
  var country = $("#country").val();
  var language = $("#language").val();
  $('#tableBody').append(
    "<tr><td>"+firstName+"</td>"+
    "<td>"+lastName+"</td>"+"<td>"+company+"</td>"+"<td>"+email+"</td>"+"<td>"+country+"</td>"+"<td>"+language+"</td>"+"</tr>"
  )
  return false;
  });
});