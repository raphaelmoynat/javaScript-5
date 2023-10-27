const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        if (panel.classList.contains('clicked')) {
            panel.classList.remove('clicked')
        }
        else{
            panel.classList.add('clicked')
        }
        const words = panel.querySelectorAll('.disparition, .disparitionBas')
        words.forEach(word => {
            if (panel.classList.contains('clicked')){
                word.classList.add('clickWord')
            }
            else{
                word.classList.remove('clickWord')
            }
        })
    })
})






