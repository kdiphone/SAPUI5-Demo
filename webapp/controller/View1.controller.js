sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"AAAAAAAA/AAAAAAAA/utils/speechRecognition"
], function (Controller, speechRecognition) {
	"use strict";

	return Controller.extend("AAAAAAAA.AAAAAAAA.controller.View1", {

		fnSingleOpearation: function () {
			var promise = new Promise(function(resolved, rejected){
				var test = true;
				if(test){
					setTimeout(function(){
						resolved("I have resolved");
						console.log("1");
					},200);
					
				}else{
					rejected(Error(["Rejected"]));
				}
			});	
			var promise11 = new Promise(function(resolved, rejected){
				var test = true;
				if(test){
					setTimeout(function(){
						resolved("I have resolved11");
						console.log("2");
					},100);
				}else{
					rejected(Error(["Rejected11"]));
				}
			});
			var promise12 = new Promise(function(resolved, rejected){
				var test = true;
				if(test){
					setTimeout(function(){
						resolved("I have resolved12");
						console.log("3");
					}
					);
				}else{
					rejected(Error(["Rejected12"]));
				}
				
			});
			/* Now you might need to perform some business operation when all of the three are resolved. In order to handle this 
			asynchronous operation we use the promise.all function. */
			Promise.race([promise,promise11,promise12]).then(function(param){
					console.log(param);  //Traggers When promise completed
				},function(param){
					console.log("param_111111"); ////Traggers When promise Rejected
				
				});
				
				
			/*var promise = new Promise(function(resolved, rejected){
				var test = true;
				if(test){
					resolved("I have resolved");
				}else{
					rejected(Error(["Rejected"]));
				}
				promise.then(function(param){
					console.log("param");  //Traggers When promise completed
				}, function(param){
					console.log("param_111111"); ////Traggers When promise Rejected
				
				});
			});*/
				
		},

		onInit: function () {
			var oList = this.getView().byId("table1");
			var oJsonModel = new sap.ui.model.json.JSONModel();
			// oList.setModel(oModel);

			var oModel = this.getView().getModel("ES5Model");
			oModel.read("/Suppliers", {
				"method": "GET",
				"success": function (data) {
					console.log(data);
					oJsonModel.setData(data);
					oList.setModel(oJsonModel, "JSONMODEL");
				}
			});

			if (speechRecognition.checkAvailability) {
				console.log(speechRecognition.checkAvailability);
			}

			// cordova.plugins.nfc.scanTag(
			// 	function () {
			// 		console.log("Tag detected");
			// 	},
			// 	function () {
			// 		console.log("listener registered");
			// 	},
			// 	function (e) {
			// 		console.error("Error registering listener: " + e);
			// 	}
			// );

			// phonegap.nfc.addNdefListener(
			// //sap.ndc.BarcodeScanner.scan(
			// 	function (mResult) {
			// 		// alert("We got a bar code\n" +
			// 		// 	"Result: " + mResult.text + "\n" +
			// 		// 	"Format: " + mResult.format + "\n" +
			// 		// 	"Cancelled: " + mResult.cancelled);
			// 	//	serachField.setValue(mResult.text);
			// 		//that.doFilter(mResult.text);
			// 	},
			// 	function (Error) {
			// 		alert("Scanning failed: " + Error);
			// 	}
			// );

		}
	});
});