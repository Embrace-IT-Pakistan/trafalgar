$(document).ready(function () {
  $('#user-form').submit(function (e) {
    e.preventDefault()
    const firstName = $(this).find('input[name="firstName"]').val()
    const lastName = $(this).find('input[name="lastName"]').val()
    const company = $(this).find('input[name="company"]').val()
    const email = $(this).find('input[name="email"]').val()
    const country = $(this).find('select[name="country"]').val()
    const language = $(this).find('select[name="language"]').val()
    const selectedCountry = $(this)
      .find('select[name="country"]')
      .find(`option[value="${country}"]`)
      .text()
    const selectedLanguage = $(this)
      .find('select[name="language"]')
      .find(`option[value="${language}"]`)
      .text()
    $('#tableBody').append(
      `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${company}</td>
        <td>${email}</td>
        <td>${selectedCountry}</td>
        <td>${selectedLanguage}</td>
        <td class ="delete"> <i class="fa fa-trash"></i>
      </tr>`
    )
  })
  $('.delete').on('click', function () {
    alert('hello')
    $(this).closest('tr').remove()
  })
})
