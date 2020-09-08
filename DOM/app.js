document.addEventListener('DOMContentLoaded',()=>{
    
    let btn = document.createElement('button')
    let btnText = document.createTextNode("i'm a button!")
    document.body.appendChild(btn)
    btn.appendChild(btnText)
    btn.addEventListener('click',()=>{
        alert('and I work (hard for my money)!')
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
        let x = Math.floor(Math.random()*255)
        let y = Math.floor(Math.random()*255)
        let z = Math.floor(Math.random()*255)
        let randomColor = `rgb(${x},${y},${z})`
        document.getElementById('para').style.color = randomColor
    })

    document.getElementById('spanButton').addEventListener('click',()=>{
        let span = document.createElement('span')
        let spanText = document.createTextNode('Jason')
        document.getElementById('htmlDiv').appendChild(span)
        span.appendChild(spanText)
    })

    let friendArray = ['wayneCarl','Ian','Rob','Kenbo','Branden','Kenny','Dave','Alex','Jess','Harry']
    let friendIndex = 0

    document.getElementById('friendButton').addEventListener('click',()=>{
        let friend = document.createElement('li')
        let friendText = document.createTextNode(friendArray[friendIndex])
        friendIndex++
        document.getElementById('friendList').appendChild(friend)
        friend.appendChild(friendText)
    })
})