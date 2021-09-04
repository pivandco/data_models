const readline = require('readline')

interface ParsableMemberEnum<T> {
    [member: string]: T
}

type Parser<T> = (inString: string) => (T | undefined)

function createEnumMemberParser<T>(anEnum: Record<string, T>): Parser<Exclude<T, string>> {
    return ((inString: string) => anEnum[inString.toUpperCase()]) as Parser<Exclude<T, string>>
}

enum Direction {
    NORTH,
    EAST,
    SOUTH,
    WEST,
}

enum Command {
    BACK = -2,
    LEFT,
    RIGHT = 1,
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

async function input<T>(prompt: string, parse: Parser<T>): Promise<T> {
    let value: T | undefined
    function get(): Promise<string> {
        return new Promise(resolve => {
            rl.question(prompt, resolve)
        })
    }
    while (value === undefined) {
        value = parse(await get())
    }
    return value
}

function changeDirection(oldDirection: Direction, command: Command): Direction {
    return (oldDirection + command + 4) % 4
}

async function main() {
    const oldDirection = await input('Введите текущее направление корабля: ', createEnumMemberParser(Direction))
    const command = await input('Введите команду: ', createEnumMemberParser(Command))
    const newDirection = changeDirection(oldDirection, command)
    console.log(`Новое направление: ${Direction[newDirection].toLowerCase()}`)
}

main().then(() => process.exit())