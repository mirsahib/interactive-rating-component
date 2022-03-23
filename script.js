

function main(){
    if(window.location.pathname=='/index.html'){
        localStorage.setItem('selectedbtn',0)
    }
}

function getValue(obj){
    const val = obj.innerHTML
    localStorage.setItem('selectedbtn',Number(val))
}

function insertVal(){
    const val = localStorage.getItem('selectedbtn')
    document.getElementById('value').innerHTML = `You selected ${val} out of 5`
}
function redirect(){
    const val = localStorage.getItem('selectedbtn')
    if(val===null || Number(val)===0){
        alert('Please give us a rating')
    }else{
        window.location.href='/thankyou.html'
    }
}
main()
insertVal()
