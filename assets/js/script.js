
const diagnoses = {
    "Common Cold": ["WEAKNESS", "DIARRHEA", "WRIST PAIN"],
    "Influenza": ["fever", "body aches", "fatigue"],
    "Allergies": ["itchy eyes", "sneezing", "nasal congestion"],
    // Add more diagnoses and associated symptoms as needed
  };
  
  // Function to check for a diagnosis based on symptoms
  function checkDiagnosis(symptom1, symptom2, symptom3) {
    for (const [diagnosis, symptoms] of Object.entries(diagnoses)) {
      if (
        symptoms.includes(symptom1) &&
        symptoms.includes(symptom2) &&
        symptoms.includes(symptom3)
      ) {
        return diagnosis;
      }
    }
    return "No diagnosis found.";
  }


// Function to display diagnosis in alert window
function displayDiagnosis() {
    var a = document.getElementById("SP1");
    var b = document.getElementById("SP2");
    
    console.log(a)

//   // Get the selected option value
//   var symptom1 = a.value;
//   var symptom2 = b.value;
//   var symptom3 = c.value;
//   const diagnosis = checkDiagnose(symptoms1,symptom2,symptom3);
//   alert(`This is ${diagnosis}`);

}
displayDiagnosis()

// Add event listener to button
// const button = document.querySelector('#diag');
// button.addEventListener('click', displayDiagnosis);