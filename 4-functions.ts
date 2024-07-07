function add(a: number, b: number): number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

interface MyPosition {
    x: number | undefined,
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default: string;
}

// Перегрузки функции
function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

// Реализация функции
function position(a?: number, b?: number): MyPosition | MyPositionWithDefault {
    if (a === undefined && b === undefined) {
        return { x: undefined, y: undefined };
    }
    if (a !== undefined && b === undefined) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}