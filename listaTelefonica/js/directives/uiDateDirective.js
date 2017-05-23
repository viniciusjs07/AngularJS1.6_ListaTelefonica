angular.module("listaTelefonica").directive("uiDate", function () {
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
        }
    }
});