// windows 整個瀏覽器
// document 拿標籤(插入CSS....)
//call back
function openNav() {
    document.getElementById("sidebar_nav").style.width = "180px";
    document.getElementById("openbtn").style.visibility = "hidden";
    document.getElementById("closebtn").style.visibility = "visible";
    // document.getElementById("openbtn").style.fontSize = "0px";
    // document.getElementById("closebtn").style.fontSize = "40px";
}

function closeNav() {
    document.getElementById("sidebar_nav").style.width = "0";
    document.getElementById("openbtn").style.visibility = "visible";
    document.getElementById("closebtn").style.visibility = "hidden";
    // document.getElementById("openbtn").style.fontSize = "25px";
    // document.getElementById("closebtn").style.fontSize = "0px";
}

$(function(){
    $.get("./header.html", function(data){
        $("#header").html(data);
    });
    $.get("./footer.html", function(data){
        $("#footer").html(data);
    });
});
// window.addEventListener('load', function () {
//     const p1 = document.getElementById('de')
//     console.log(p1)
//     p1.innerText = 'fuck you'

//     const London = this.document.getElementById('London')
//     const b1 = document.getElementById('hide')
//     b1.addEventListener('hover', function () {
//         console.log('點下去')
//         London.innerHTML = '<p> </p>'
//     })

//     const in1 = this.document.getElementById('input')
//     in1.addEventListener('keyup', function (key) {
//         console.log(key.target.value)
//     })
// })