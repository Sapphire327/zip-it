function countSymbols(str){
    let zipStr='';
    let map = new Map()
    for(let symbol of str){
        if(!map.has(symbol)){
            map.set(symbol, 1)
        }else{
            map.set(symbol, map.get(symbol)+1)
        }
    }
    for(let symbol of map){
        zipStr+=symbol[0]+symbol[1]
    }
    return zipStr
}

console.log(countSymbols("AAAABBCCCDDD"))
