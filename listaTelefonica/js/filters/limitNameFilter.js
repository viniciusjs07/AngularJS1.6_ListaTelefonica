/**
 * Created by huawei on 17/05/17.
 */
angular.module("listaTelefonica").filter("limitName", function () {
    return function (input, size) {
        if(input.length <= size){
            return input;
        }
        var output = input.substr(0,(size|| 2)) + "...";
        console.log(output);
        return output;
    };
});