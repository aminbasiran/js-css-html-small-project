// const myCanvas= document.getElementById('canvas')
// const ctx=myCanvas.getContext('2d')
// console.log(ctx)
window.addEventListener('load', function() {
    var myCanvas = document.getElementById("canvas");
    var ctx = myCanvas.getContext("2d");
    let painting = false
    let startX
    let startY

    myCanvas.addEventListener('mousedown',function(e){
        painting=true
        // startX = e.clientX
        // startY = e.clientY
    })

    myCanvas.addEventListener('mouseup',function(e){
        painting=false
        // ctx.lineWidth = "5"
        // ctx.strokeStyle = "green"
        // ctx.moveTo(0, 75);
        // ctx.lineTo(250, 75);
        ctx.beginPath()
    })

function draw(e){
    if (painting){
        ctx.lineWidth = "5"
        ctx.strokeStyle = "green"
        ctx.lineTo(e.clientX, e.clientY)
        ctx.stroke()
    }
}

    myCanvas.addEventListener('mousemove',draw)










    // function down(){
    //     painting = true
        
    // }

    // function up(){
    //     painting = false
    //     ctx.beginPath()
    // }

    // function draw(e){
    //     if(painting) {
    //     ctx.lineWidth = "5"
    //     ctx.strokeStyle = "green"
    //     ctx.lineTo(e.clientX, e.clientY)
    //     ctx.stroke()
    //     ctx.beginPath()
    //     ctx.moveTo(e.clientX, e.clientY)
    //     }
    //     else{return}
        
    // }

    // myCanvas.addEventListener('mousedown', down)

    // myCanvas.addEventListener('mouseup', up)
    
    // myCanvas.addEventListener('mousemove', draw)
})