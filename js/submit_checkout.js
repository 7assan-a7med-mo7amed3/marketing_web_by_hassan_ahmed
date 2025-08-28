const scriptURL='https://sheetdb.io/api/v1/q0yq49qtj3qaz'

let form =document.getElementById('form_contact');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    fetch(scriptURL,{
        method:'POST',
        body: new FormData(form),
    })
    .then((response)=>{
        setTimeout(()=>{
            localStorage.removeItem('cart')
            window.location.reload()
        })
    },3000)
    .catch((error)=> console.error('error!',error.message))
})