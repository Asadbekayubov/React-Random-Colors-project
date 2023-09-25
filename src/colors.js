const hexCodes = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
]


function getRandomColors(){
    const colors = []
    let color1 = '#'
    let color2 = '#'
    let color3 = '#'
    let color4 = '#'
    for (let i = 0; i < 6; i++) {
        const randomNumber1 = Math.trunc(Math.random()* hexCodes.length)
        const randomNumber2 = Math.trunc(Math.random()* hexCodes.length)
        const randomNumber3 = Math.trunc(Math.random()* hexCodes.length)
        const randomNumber4 = Math.trunc(Math.random()* hexCodes.length)
        color1+=hexCodes[randomNumber1]
        color2+=hexCodes[randomNumber2]
        color3+=hexCodes[randomNumber3]
        color4+=hexCodes[randomNumber4]
    }
    colors.push(color1)
    colors.push(color2)
    colors.push(color3)
    colors.push(color4)
    return colors   
}
export  {getRandomColors}
