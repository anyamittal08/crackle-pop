const cracklePop = () => {
    for (let i=1; i<=100; i++) {
        let toPrint = '';
        if (i % 3 === 0) {
            toPrint = 'Crackle';
        }
    
        if (i % 5 === 0) {
            toPrint += 'Pop';
        }
    
        if (!toPrint) {
            toPrint += i;
        }
        console.log(toPrint);
    }
}

cracklePop();