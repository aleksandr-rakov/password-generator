function genpw(id){
    obj=document.getElementById(id);
    obj.value=GeneratePassword();
}

function GeneratePassword() {
    var length=20;
    var res = '';
    var noPunction = true;

    for (i=0; i < length; i++) {
        j = getRandomNum();
        if (noPunction) {
    	     while (checkPunc(j)) {
    	        j = getRandomNum(); 
    	     }
	 }
        res = res + String.fromCharCode(j);
    }
    return res;
}

function getRandomNum() {
    // between 0 - 1
    var rndNum = Math.random()
    // rndNum from 0 - 1000
    rndNum = parseInt(rndNum * 1000);
    // rndNum from 33 - 127
    rndNum = (rndNum % 94) + 33;
    return rndNum;
}

function checkPunc(num) {

    if ((num >=33) && (num <=47)) { return true; }
    if ((num >=58) && (num <=64)) { return true; }
    if ((num >=91) && (num <=96)) { return true; }
    if ((num >=123) && (num <=126)) { return true; }
    return false;
}
