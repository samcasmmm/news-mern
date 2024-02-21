function createLine(num?: number) {
    return '-'.repeat(num || 50);
}

function createBoxLine(content: string, extra = '') {
    return `| ${content.padEnd(46 - extra.length)}${extra} |`;
}

export function Print(message: string, width?: number) {
    console.log(createLine());
    console.log(createBoxLine(message));
    console.log(createLine());
}
