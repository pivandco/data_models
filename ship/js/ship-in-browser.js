(() => {
    const Direction = Object.freeze({
        NORTH: 0,
        EAST: 1,
        SOUTH: 2,
        WEST: 3,
    })
    
    const Command = Object.freeze({
        BACK: -2,
        LEFT: -1,
        RIGHT: 1,
    })
    
    function inputEnumMember(promptText, anEnum) {
        let value
        while (value === undefined) {
            value = anEnum[prompt(promptText).toUpperCase()]
        }
        return value
    }
    
    function getDirectionName(value) {
        return Object.keys(Direction).find(k => Direction[k] === value).toLowerCase()
    }
    
    function changeDirection(oldDirection, command) {
        return (oldDirection + command + 4) % 4
    }
    
    function main() {
        const oldDirection = inputEnumMember('Введите текущее направление корабля: ', Direction)
        const command = inputEnumMember('Введите команду: ', Command)
        const newDirection = changeDirection(oldDirection, command)
        alert(`Новое направление: ${getDirectionName(newDirection)}`)
    }
    
    main()
})()
