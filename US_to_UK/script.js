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
    document.getElementById('uk_text').innerHTML = uk_text;
}

// Attach event listener to trigger conversion on input change
document.getElementById('us_text').addEventListener('input', convertToUkEnglish);
