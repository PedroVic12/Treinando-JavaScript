const btnAjuda = document.querySelector('#btn-ajuda')
const divAjuda = document.querySelector('#ajuda-container')

btnAjuda.addEventListener('click', e => {

  if (divAjuda.style.display == 'none') {
    divAjuda.style.display = 'block'
    btnAjuda.innerHTML = 'Ajuda ▼'
  } else {
    divAjuda.style.display = 'none'
    btnAjuda.innerHTML = 'Ajuda ▲'
  }

})