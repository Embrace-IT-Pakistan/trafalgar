// $(document).ready(function () {
//   $('#user-form').submit(function (e) {
//     e.preventDefault()
//     const firstName = $(this).find('input[name="firstName"]').val()
//     const lastName = $(this).find('input[name="lastName"]').val()
//     const company = $(this).find('input[name="company"]').val()
//     const email = $(this).find('input[name="email"]').val()
//     const country = $(this).find('select[name="country"]').val()
//     const language = $(this).find('select[name="language"]').val()
//     const selectedCountry = $(this)
//       .find('select[name="country"]')
//       .find(`option[value="${country}"]`)
//       .text()
//     const selectedLanguage = $(this)
//       .find('select[name="language"]')
//       .find(`option[value="${language}"]`)
//       .text()
//     $('#tableBody').append(
//       `<tr>
//         <td>${firstName}</td>
//         <td>${lastName}</td>
//         <td>${company}</td>
//         <td>${email}</td>
//         <td>${selectedCountry}</td>
//         <td>${selectedLanguage}</td>
//         <td> <i class="fa fa-trash"></i>
//       </tr>`
//     )
//   })
//   $(document).on('click', '.fa-trash', function () {
//     $(this).parent().parent().remove()
//   })
// })
const form = document.getElementById('user-form')
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const firstName = form.elements['firstName'].value
  const lastName = form.elements['lastName'].value
  const company = form.elements['company'].value
  const email = form.elements['email'].value
  const country = form.elements['country']
  const selectedCountry = country.options[country.selectedIndex].text
  const language = form.elements['language']
  const selectedLanguage = language.options[language.selectedIndex].text

  const table = document.getElementById('recordTable')
  var html =
    '<tr><td>' +
    firstName +
    '</td><td>' +
    lastName +
    '</td><td>' +
    company +
    '</td><td>' +
    email +
    '</td><td>' +
    selectedCountry +
    '</td><td>' +
    selectedLanguage +
    '<td id="delete"></td></tr>'

  document.getElementById('tableBody').innerHTML += html
  document.getElementById('delete').innerHTML = '<i class="fa fa-trash">'
})
