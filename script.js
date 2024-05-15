let n = document.getElementById('txtn')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isNumero(n.value) && !inLista(n.value, valores)) {
        valores.push(Number(n.value))
        let item = document.createElement('option')
        item.text = `Valor ${n.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor já adicionado ou inválido')
    }
    n.value = ''
    n.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior) {
                maior = valores[pos]
                if(valores[pos] < menor) {
                    menor = valores[pos]
                }
            }
        }
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, obtemos: ${soma}`
    }
}