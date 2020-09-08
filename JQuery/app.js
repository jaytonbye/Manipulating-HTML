$( document ).ready(()=>{
    let $btn = $('<button id >I\'m a button!</button>')
    $($btn).appendTo('body')
    $($btn).on('click',()=>{
        alert ('and I work (for the man [sad face])')
    })

    $('#htmlBtn').on('click',()=>{
        alert($('#theInputBox').val())
    })

    $('#colorDiv').on('mouseenter',()=>{
        $('#colorDiv').css('backgroundColor','red')
    })

    $('#colorDiv').on('mouseleave',()=>{
        $('#colorDiv').css('backgroundColor','green')
    })

    $('#para').on('click',()=>{
        let x = Math.floor(Math.random()*255)
        let y = Math.floor(Math.random()*255)
        let z = Math.floor(Math.random()*255)
        let randomColor = `rgb(${x},${y},${z})`
        $('#para').css('color',randomColor)
    })

    $('#emptyDivButton').on('click',()=>{
        let $span = '<span>Jason<span>'
        $($span).appendTo($('#emptyDiv'))
    })

    let friendArray = ['wayneCarl','Ian','Rob','Kenbo','Branden','Kenny','Dave','Alex','Jess','Harry']
    let friendIndex = 0

    $('#friendButton').on('click',()=>{
        let $friendLi = `<li>${friendArray[friendIndex]}</li>`
        friendIndex++
        $($friendLi).appendTo($('#friendList'))
    })
})