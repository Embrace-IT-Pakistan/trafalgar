var count = 0
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

  const html = `<tr class="table-row" data-id="">
  <td>
  ${firstName}
  </td>
  <td>
  ${lastName}
  </td>
  <td>
  ${company}
  </td>
  <td>
  ${email}
  </td>
  <td>
  ${selectedCountry}
  </td>
  <td>
  ${selectedLanguage}
  </td>
  <td class="delete"><i class="fa fa-trash"></i></td></tr>
  `

  document.getElementById('tableBody').innerHTML += html
  initEvents()
  updateIndex()
})

function initEvents() {
  const elements = document.querySelectorAll('.table-row')
  elements.forEach((_child, _index) => {
    const deleteButton = _child.querySelector('.delete')
    deleteButton.dataset.index = _index
    deleteButton.addEventListener('click', () => {
      const index = Number(deleteButton.dataset.index)
      const deletedElement = document.querySelector(
        `#tableBody tr:nth-child(${index + 1})`
      )
      if (deletedElement) deletedElement.remove()
      updateIndex()
    })
  })
}

function updateIndex() {
  const elements = document.querySelectorAll('.table-row')
  elements.forEach((_child, _index) => {
    const deleteButton = _child.querySelector('.delete')
    deleteButton.dataset.index = _index
  })
}
