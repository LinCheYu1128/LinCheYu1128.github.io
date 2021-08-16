// windows 整個瀏覽器
// document 拿標籤(插入CSS....)
//call back
window.addEventListener('load',function(){
    const p1 = document.getElementById('de')
    console.log(p1)
    p1.innerText = 'fuck you'

    const London = this.document.getElementById('London')
    const b1 = document.getElementById('hide')
    b1.addEventListener('hover', function (){
        console.log('點下去')
        London.innerHTML = '<p> </p>'
    })

    const in1 = this.document.getElementById('input')
    in1.addEventListener('keyup', function(key){
        console.log(key.target.value)
    })

    
    
})