function calculaTaxa(valor){
    if (valor > 500) {
        return valor * 1.05
    }

    return valor 
}

module.exports = calculaTaxa