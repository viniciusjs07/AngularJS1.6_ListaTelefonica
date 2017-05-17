/**
 * Created by Vinicius Silva on 10/05/2017.
 */
angular.module("listaTelefonica").provider("serialGeneratorContato", function (configValue) {
    console.log(configValue);
    var _length = 10;
    this.getLength = function () {
        return _length;
    };
    this.setLength = function (length) {
        _length = length;
    };
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