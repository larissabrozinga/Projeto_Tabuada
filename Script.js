function tabuada() {
    let nume = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
        if(nume.value.length == 0) {
            alert('Por favor, digite um numero')    
        } else {
             let n = Number(nume.value)
             let c = 1
             tab.innerHTML = ''
             while(c <= 10){
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++

             }
        }
        
}

