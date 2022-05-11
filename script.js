let button=document.getElementById("in_butn")
button.addEventListener("click",timer)
function timer(){
    count=5
    document.getElementById("distime").style.display="block"
    let set=setInterval(()=>{
        document.getElementById("distime").innerText=count
        count--;
        if(count==0){
            document.getElementById("distime").style.display="none"
            button.style.display="none"
            clearInterval(set)
            document.getElementById("content").focus()
            let data=5;
            let inter=setInterval(decrease,1000)
            function decrease(){
                data--;
                document.getElementById("time").innerText=parseInt(data/60)+":"+data%60;
                if(data==0){
                    clearInterval(inter)
                    document.getElementById("distime").style.display="block"
                    document.getElementById("distime").innerText="S T O P"
                    let str=document.getElementById("content").value
                    let strock=str.length
                    let speed=parseInt(((str.length)/5)/10)
                    document.getElementById("distime").style.display="none"
                    document.getElementById("bodydiv").style.display="none"
                    let div=document.getElementById("result")
                    div.innerText+="Total Strock is "+strock
                    div.innerText+=" Speed is "+speed
                    
                }
            }
        }
    },1000)
}