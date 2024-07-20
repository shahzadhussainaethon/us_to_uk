// Define an associative array mapping US words to UK words
var us_to_uk = {
    // Basic word replacements
    'color': 'colour',
    'center': 'centre',
    'defense': 'defence',
    'favor': 'favour',
    'honor': 'honour',
    'organize': 'organise',
    'program': 'programme',
    'optimiz': 'optimis',
    'fag' : 'gay',
    'mosq' : 'mosque',
    'apologize':'apologise',
    'analyze':'analyse',
    'organize':'organise',
    'recognize':'recognise',
    'realize':'realise',
    'specialize':'specialise',
    'authorize':'authorise',
    'civilize':'civilise',
    'criticize':'criticise',
    'utilize':'utilise',
    'maximize':'maximise',
    'summarize':'summarise',
    'advertize':'advertise',
    'harmonize':'harmonise',
    'emphasize':'emphasise',
    'stabilize':'stabilise',
    'modernize':'modernise',
    'characterize':'characterise',
    'mobilize':'mobilise',
    'prioritize':'prioritise',
    'capitaliz' : 'capitalis',
    // Specific cases
    'check': 'cheque', // check (US) vs cheque (UK)
  
    'apartment': 'flat', // apartment (US) vs flat (UK)
  
    // Add more as needed
    
};
var usinput = Object.keys(us_to_uk).join('|').toLowerCase();

// Function to convert US English to UK English
function convertToUkEnglish() {
    // Get the input US English text from the textarea
    var us_text = document.getElementById('us_text').value;

    // Replace all occurrences of US words with UK words
    var uk_text = us_text.replace(new RegExp(`"\\b"+${usinput}`,'ig'), function(matched) {
    // var uk_text = us_text.replace(us_text, function(matched) {
        return us_to_uk[matched.toLowerCase()];
    });

    // Display the converted UK English text
    document.getElementById('uk_text').innerHTML = uk_text.toLowerCase();
}

// Attach event listener to trigger conversion on input change
document.getElementById('us_text').addEventListener('input', convertToUkEnglish);

function copyText(uk_text, successCallback = null, errorCallback = null) {
    // Get the element with the specified ID
    const element = document.getElementById(uk_text);
  
    // Check if the element exists
    if (uk_text) {
      // Create a temporary element to hold the text
      const tempElement = document.createElement('textarea');
      tempElement.value = element.textContent;
  
      // Append the temporary element to the body (off-screen)
      document.body.appendChild(tempElement);
  
      // Select the text content
      tempElement.select();
  
      try {
        // Use the Clipboard API to copy the text
        const successful = navigator.clipboard.writeText(tempElement.value);
  
        if (successful && successCallback) {
          successCallback(); // Call the success callback function (if provided)
        } else if (!successful && errorCallback) {
          errorCallback(); // Call the error callback function (if provided)
        } else if (successful) {
          console.log('Text copied successfully!'); // Default success message
        }
      } catch (err) {
        console.error('Failed to copy text:', err);
        if (errorCallback) {
          errorCallback(err); // Call the error callback function with error (if provided)
        } else {
          alert('Failed to copy text!'); // Default error message
        }
      }
  
      // Remove the temporary element
      document.body.removeChild(tempElement);
    } else {
      console.error('Element with id "' + uk_text + '" not found.');
    }
  }
  