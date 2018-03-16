var registerToBlockChain = function(candidate) {
  request();
}

var request = function() {
  var myName = $('.name input').val();
  var myFBNumber = $('.fbNumber input').val();
  // The passphrase used to repeatably generate this RSA key.
var PassPhrase = "The Moon is a Harsh Mistress."; 

// The length of the RSA key, in bits.
var Bits = 1024; 

var decryptingKey = cryptico.generateRSAKey(PassPhrase, Bits);
var encryptingKey = cryptico.publicKeyString(decryptingKey);
const payload =  {
  url: "https://naivechain-196808.appspot.com/users/register",
  //url: "http://localhost:3000/users/register",
  method: "POST",
  data: {
    "name": myName,
    "flyingBlueNumber": myFBNumber
  },
 // contentType: "application/json; charset=utf-8",
  dataType: "json"
};
console.log(payload);
const plainText =  JSON.stringify(payload);
const cipherText = cryptico.encrypt(plainText, encryptingKey);
console.log(cipherText);
var res = $.ajax(payload);
res.done(function(data){
  console.log('Response is',data)
  $('#registration').addClass('hidden');
  $('#qrcode').removeClass('hidden');
  $('#qrcodesuccess').removeClass('hidden');
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: data.id,
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
});
// $.ajax(cipherText);

};
