const login = (e) => {
    e.preventDefault()
    const username = getById('floatingUsername').value
    const password = getById('floatingPassword').value

    if(textKosong(username) && textKosong(password)){
        alert('field tidak boleh kosong')
    }
  
}