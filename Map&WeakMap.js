const assert = require('assert')

const objectMap = new Map()

// declarar uma chave e valor dentro do Map
// pode ter qualquer tipo como chave
objectMap
    .set(1, {nome: 'lucas'})
// Map(1) { '1' => { nome: 'lucas' } }

// declarando chave e valor usando o construtor
const objectMapConstructor = new Map([
    [1, {nome: 'lucas'}],
])
// Map(1) { '1' => { nome: 'lucas' } }

for (const item of objectMap) {
    assert.deepStrictEqual(item[0], '1')
    assert.deepStrictEqual(item[1], {nome: 'lucas'})
}

// pegar todas chaves do objeto
objectMap.keys()
// pegar todos valores do objeto
objectMap.values()

// verificar se existe a propriedade dentro do objeto
assert.ok(objectMap.has('1'))

// excluir uma propriedade a partir da chave
objectMap.delete('1')

// limpar o objeto Map
objectMap.clear()

////////////////////////////////////////// --------WeakMap-------- //////////////////////////////////////////

// só objetos como chave -> referência de endereço
// MAS não é iterável

// é mais leve

const weakMap = new WeakMap()
const hero = {name: 'flash'}

weakMap.set(hero)
weakMap.has(hero)
weakMap.get(hero)
weakMap.delete(hero)



