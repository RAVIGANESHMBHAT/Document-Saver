sap.ui.define([
	"sap/ui/model/json/JSONModel",
], function (JSONModel) {
	"use strict";

	// Firebase-config retrieved from the Firebase-console
	const firebaseConfig = {
    apiKey: "AIzaSyBIx466Lg7of7TsFEdlm2QZVqWMEj6nek4",
    authDomain: "document-saver-backend.firebaseapp.com",
    projectId: "document-saver-backend",
    storageBucket: "document-saver-backend.appspot.com",
    messagingSenderId: "1003136537468",
    appId: "1:1003136537468:web:89d77cfbc8e95bedc78af9",
    measurementId: "G-YM7HDHCXW9"
	};

	return {
		initializeFirebase: function () {
			// Initialize Firebase with the Firebase-config
			firebase.initializeApp(firebaseConfig);

			// Create a Firestore reference
			const firestore = firebase.firestore();

			// Firebase services object
			const oFirebase = {
				firestore: firestore
			};

			// Create a Firebase model out of the oFirebase service object which contains all required Firebase services
			var fbModel = new JSONModel(oFirebase);

			// Return the Firebase Model
			return fbModel;
		}
	};
});