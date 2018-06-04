
function send() {
    var mon1, clo, resultzp, resultprem, result, resultclock, resultnalog;
        mon1 = document.getElementById('money').value;
        mon1 = parseInt(mon1);
        
        clo = document.getElementById('clock').value;
        clo = parseInt(clo);

        
        resultclock =  mon1*clo;
        resultprem = resultclock * 0.1882;
        result = resultclock + resultprem;
        resultnalog = result * 0.195;
        resultzp =  result - resultnalog;

        document.getElementById('outt').innerHTML = resultzp.toFixed(2) + ' - Без учёта премии(Мес. ТД)';
}

    
