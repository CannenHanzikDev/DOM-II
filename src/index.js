import './less/index.less'



// 1 - load event
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)

    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!!'

    // 2 - copy
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text;
            })
    })

    // 3 - click event
    document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror');
    })
}

