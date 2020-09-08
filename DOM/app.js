document.addEventListener('DOMContentLoaded',()=>{
    
    let btn = document.createElement('button')
    let btnText = document.createTextNode("i'm a button!")
    document.body.appendChild(btn)
    btn.appendChild(btnText)
    btn.addEventListener('click',()=>{
        alert('works')
    })

    document.getElementById('htmlBtn').addEventListener('click',()=>{
        alert(document.getElementById('theInputBox').value)
    })

    let div = document.createElement('div')
    document.body.appendChild(div)
    
    div.addEventListener('mouseenter',()=>{
        div.style.backgroundColor = 'red'
    })
    
    div.addEventListener('mouseleave',()=>{
        div.style.backgroundColor = 'green'
    })

    document.getElementById('para').addEventListener('click',()=>{
        document.getElementById('para').style.backgroundColor = 'red'
    })
})