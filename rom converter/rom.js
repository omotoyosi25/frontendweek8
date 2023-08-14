const input = document.querySelector('input')
const btn = document.querySelector('button')
const para = document.querySelector(`p`)

function roman(){
    const th = ['','m','mm','mmm']
    const hu = ['','c','cc','ccc','cd','d','dc','dcc','dccc','cm']
    const tn = ['','x','xx','xxx','xl','l','lx','lxx','lxxx','lc']
    const un = ['','i','ii','iii','iv','v','vi','vii','viii','ix']

    const data = input.value

    let rf

    data.length === 1 ? rf = un[data] : data.length === 2 ? rf = tn[data[0]] + un[data[1]] : data.length === 3 ? rf = hu[data[0]] + tn[data[1]] + un[data[2]] : data.length === 4 && data[0] > 4 ? rf = th[data[0]] + hu[data[1]] + tn[data[2]] + un[data[3]] : rf = 'not yet'

    // alert(rf)
    para.textContent = rf
}

btn.addEventListener('click', roman)