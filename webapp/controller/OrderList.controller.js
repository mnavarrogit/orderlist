sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("orderlist.controller.OrderList", {
        onInit: function () {

        },
        onBeforeRendering: function (){
            //alert("Before");
        },
        onAfterRendering:function (){
            //alert("After");
        },
        onExit:function () {
            //alert("Exit");
        },
        onPress: function (){
            alert("Hola Mundo");
        }
    });
});
