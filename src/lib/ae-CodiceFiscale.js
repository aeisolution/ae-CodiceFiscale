"use strict"

/* Params */

/* Array Months
   TABELLA A - conversione del mese di nascita
   
 GENNAIO    = A   FEBBRAIO   = B    MARZO      = C
 APRILE     = D   MAGGIO     = E    GIUGNO     = H
 LUGLIO     = L   AGOSTO     = M    SETTEMBRE  = P
 OTTOBRE    = R   NOVEMBRE   = S    DICEMBRE   = T
*/
var arrMese = ['A', 'B', 'C', 'D', 'E', 'H', 'L', 'M', 'P', 'R', 'S', 'T'];
var getMese = function(numMonth) {
  var result = '';
  
  if(typeof(numMonth) !== 'number') {
    console.log('ERROR: numMonth not in number format');
    return result;
  }
  
  if(numMonth < 1 || numMonth > 12) {
    console.log('ERROR: numMonth less than 1 or greater than 12');
    return result;
  }
  
  result = arrMonth[numMonth - 1];
  return result;
};

/* Array omocodia
   TABELLA B - conversione di cifre in numeri per omocodia

  0 = L   1 = M   2 = N   3 = P   4 = Q   
  5 = R   6 = S   7 = T   8 = U   9 = V
*/
var arrOmocodia = ['L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V'];
var getOmocodia = function(num) {
  var result = '';
  
  if(typeof(num) !== 'number') {
    console.log('ERROR: num not in number format');
    return result;
  }
  
  if(num < 0 || num > 9) {
    console.log('ERROR: num less than 0 or greater than 9');
    return result;
  }
  
  result = arrOmocodia[num];
  return result;
  
};


/* Array Code Controll
   TABELLA C - conversione dei caratteri con posizione di ordine pari

  A o 0 = 0   B o 1 = 1   C o 2 = 2   D o 3 = 3   E o 4 = 4
  F o 5 = 5   G o 6 = 6   H o 7 = 7   I o 8 = 8   J o 9 = 9
  K     = 10  L     = 11  M     = 12  N     = 13  O     = 14
  P     = 15  Q     = 16  R     = 17  S     = 18  T     = 19
  U     = 20  V     = 21  W     = 22  X     = 23  Y     = 24
  Z     = 25
*/
var arrCaratterePari = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                          'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                          'U', 'V', 'W', 'X', 'Y', 'Z'];
var arrNumeroPari = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];



/* Array Code Controll
   TABELLA d - conversione dei caratteri con posizione di ordine dispari

  A o 0 = 1   B o 1 = 0   C o 2 = 5   D o 3 = 7   E o 4 = 9
  F o 5 = 13  G o 6 = 15  H o 7 = 17  I o 8 = 19  J o 9 = 21
  K     = 2   L     = 4   M     = 18  N     = 20  O     = 11
  P     = 3   Q     = 6   R     = 8   S     = 12  T     = 14
  U     = 16  V     = 10  W     = 22  X     = 25  Y     = 24
  Z     = 23
*/
var arrCarattereDispari  = ['B', 'A', 'K', 'P', 'L', 'C', 'Q', 'D', 'R', 'E', 'V',
                            'O', 'S', 'F', 'T', 'G', 'U', 'H', 'M', 'I', 'N', 'J',
                            'W', 'Z', 'Y', 'X'];
var arrNumeroDispari = ['1','0','-1','-1','-1','2','-1','3','-1','4','-1','-1',
                        '-1','5','-1','6','-1','7','-1','8','-1','9'];




var getNumeroControllo = function(char, pos) {
  var arr;
  
  if(typeof(char) !== 'string') {
    console.log('ERROR: Carattere must be string');
    return null;
  }
  
  if(char.length !== 1) {
    console.log('ERROR: character length must be 1');
    return null;
  }

  if(isDigit(char)) {
    if(isOdd(pos))  arr = arrNumeroDispari;    
    else            arr = arrNumeroPari;
  
  } else {

    if(isOdd(pos))  arr = arrCarattereDispari;    
    else            arr = arrCaratterePari;
  }

  var result = null;
  result = arr.indexOf(char);
  if(result===-1) {
    console.log('ERROR: %s not found in array', char);
    return null;
  }

  return result;
};

/* Array Check-digit
   TABELLA E - determinazione del check-digit
   valore del resto della divisione della somma dei numeri di controllo dei 15 caratteri per 26
*/
var arrCheckDigit = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                     'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
                     'U', 'V', 'W', 'X', 'Y', 'Z'];
var getCheckDigit = function(resto) {
  console.log('typeof(resto)=%s', typeof(resto));
  
  if(typeof(resto) !== 'number') {
    console.log('ERROR: resto must be a number');
    return '';
  }
  
  if(resto<0 || resto > 25) {
    console.log('ERROR: resto di /26 must be between 0 and 25');
    return '';
  }

  return arrCheckDigit[resto];
};



//*************** Functions  ******************
var isOdd = function(pos) {
  var res = (pos % 2);
  
  return res !== 0;
};

var isDigit = function(item) {
  var reg = /^[0-9]$/;
  
  return reg.test(item);
};

var isCharacter = function(item) {
  var reg = /^[A-Z]$/;
  
  return reg.test(item);
};

//*************** CHECK - MAIN ******************
var check = function(code) {
  //Check code defined
  if(typeof(code)=== 'undefined')
    return console.log('Error: undefined code');
  
  if(code.length!==16)
    return console.log('Error: wrong code for length');
 
  var taxCode = code.toUpperCase();
    

  //Local variables
  var intAppoggio = 0;
  var cdg;
  
  for(var i = 0; i<15; i++) {
    intAppoggio += getNumeroControllo(taxCode.charAt(i), i+1);
    console.log('%d - %s (%d)', i, taxCode.charAt(i), intAppoggio);
  }
  
  var resto = (intAppoggio % 26);
  console.log('resto: %d %s', resto, resto);
  
  var ckdigit = getCheckDigit(resto);
  console.log('intAppoggio: %d -> check-digit: %s', intAppoggio, ckdigit);
  
  if(ckdigit === code.charAt(15))
    console.log('CODICE FISCALE %s valido!', taxCode);
  else
    console.log('CODICE FISCALE %s NON valido!', taxCode);
  
}

exports.check = check;