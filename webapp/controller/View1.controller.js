sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"AAAAAAAA/AAAAAAAA/utils/speechRecognition"
], function (Controller, speechRecognition) {
	"use strict";

	return Controller.extend("AAAAAAAA.AAAAAAAA.controller.View1", {
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
			
			if(speechRecognition.checkAvailability){
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