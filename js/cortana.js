'use strict';

if (typeof Windows !== 'undefined') {
	console.log('Windows namespace is available');
	// Subscribe to the Windows Activation Event
	Windows.UI.WebUI.WebUIApplication.addEventListener('activated', function (args) {
		var activation = Windows.ApplicationModel.Activation;
		// Check to see if the app was activated by a voice command
		if (args.kind === activation.ActivationKind.voiceCommand) {
			console.log('Activated by a voice command');

			// for testing only
			var speechRecognitionResult = args.result;
			var textSpoken = speechRecognitionResult.text;
			var command = speechRecognitionResult.rulePath[0];
			var property = speechRecognitionResult.semanticInterpretation.properties;
			console.log('The command is: ' + command);
			document.getElementById('command').innerHTML = command;
			document.getElementById('text').innerHTML = textSpoken;


			// Determine the command type {play} defined in vcd
			if (command === 'showDefinitionOfAcronym') {
				// Determine the stream name specified
				var acronym = property["acronym"][0];
				document.getElementById('acr').innerHTML = acronym;
				lookupAcronym(acronym);			
			}
			else {
				// No valid command specified
				console.log('No valid command specified');
			}
		} else {
			console.log('Not activated by a voice command');
		}
	});
} else {
	console.log('Windows namespace is unavaiable');
}
