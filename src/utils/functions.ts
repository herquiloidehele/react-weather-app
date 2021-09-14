import moment from "moment";


export function getWeekName(timestamp: number): string{
    switch (moment(timestamp).week()){
        case 1: return 'Segunda Feira';
        case 2: return 'Terça Feira';
        case 3: return 'Quarta Feira';
        case 4: return 'Quinta Feira';
        case 5: return 'Sexta Feira';
        case 6: return 'Sábado';
        case 7: return 'Domingo';
        default: return '';
    }
}

