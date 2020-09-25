export default {
    formatNumber: function(num){
        return parseFloat((((num*100)/100)).toFixed(2));
    }
}

export default {
    formatCurrency: function(num){
        return '$' + Number(num.toFixed(2)).toLocaleString() + '';
    }
}