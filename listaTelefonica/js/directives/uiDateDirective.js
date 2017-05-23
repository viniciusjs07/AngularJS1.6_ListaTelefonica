angular.module("listaTelefonica").directive("uiDate", function ($filter) {
    /**
     * Diretiva para formatar a data no input.
     */
    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatDate = function (date) {
                /**
                 *
                 * date.replace(/[^0-9]+/g, "") substitui tudo que nao for digito por string vazia
                 */
                date = date.replace(/[^0-9]+/g, "");
                if(date.length > 2){

                    date = date.substring(0,2) + "/" + date.substring(2);
                }
                if(date.length > 5){

                    /**
                     *
                     * coloca / após o quinto digito inserido por ex: 12/05/...
                     */
                    date = date.substring(0,5) + "/" + date.substring(5,9);
                }
                return date;
            };

            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });

            ctrl.$parsers.push(function (value) {
               if(value.length === 10){
                   var dateArray = value.split("/");
                   console.log(dateArray);
                   return new Date(dateArray[2], dateArray[1]-1, dateArray[0]).getTime();
               }
            });
            
            ctrl.$formatters.push(function (value) {
               return $filter("date")(value,"dd/MM/yyyy");
            });
        }
    }
});