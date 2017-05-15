/**
 * Created by Vinicius Silva on 10/05/2017.
 */
angular.module("listaTelefonica").provider("serialGeneratorContato", function () {
    var _length = 100;

   this.$get = function () {
     return{
         generatorSerial: function () {
             var serial = ""
             while(serial.length < _length){
                 serial += String.fromCharCode(Math.floor(Math.random()*64)+32);
             }
             return serial;
         }
     };
   };
});