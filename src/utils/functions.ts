
export function getWeekName(weekNumber: number| undefined): string{
    switch (weekNumber){
        case 0: return 'Domingo';
        case 1: return 'Segunda Feira';
        case 2: return 'Terça Feira';
        case 3: return 'Quarta Feira';
        case 4: return 'Quinta Feira';
        case 5: return 'Sexta Feira';
        case 6: return 'Sábado';
        default: return '';
    }
}


export function getShortWeekName(weekNumber: number| undefined){
    return getWeekName(weekNumber).substr(0,3);
}

