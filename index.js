const cracklePop = () => {
    let result = [];
    for (let i=1; i<=100; i++) {
        let toPrint = '';
        if (i % 3 === 0) {
            toPrint = 'Crackle';
        }
    
        if (i % 5 === 0) {
            toPrint += 'Pop'
        }
    
        if (!toPrint) {
            toPrint = '' + i;
        }

        result.push(toPrint);
    }
    return result;
}

console.log(cracklePop());