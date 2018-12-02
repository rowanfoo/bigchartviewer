

var mainserverurl='http://localhost:8070';
var algoserverurl='http://localhost:8050';



function setconfig($rootScope){
console.log('----setconfig-----');

    $rootScope.config={
        wishlist : mainserverurl + '/stock/wishlist',
        downfour : algoserverurl + '/fallfour',
        data : mainserverurl + '/data',
        codetech:  algoserverurl + '/codetech'
    };


}

