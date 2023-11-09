// Define the regular expression pattern for valid LinkedIn profile URLs
const linkedinProfilePattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{1,30}[a-zA-Z0-9]$/;

// Function to validate a LinkedIn profile URL
function validateLinkedinProfileURL(url) {
  if (linkedinProfilePattern.test(url)) {
    console.log(`${url} is a valid LinkedIn profile URL.`);
  } else {
    console.log(`${url} is not a valid LinkedIn profile URL.`);
  }
}

// Test the program with some example LinkedIn profile URLs
validateLinkedinProfileURL("https://www.linkedin.com/in/johndoe");
validateLinkedinProfileURL("https://www.linkedin.com/in/jane_smith");
validateLinkedinProfileURL("https://www.linkedin.com/in/jack_123");
validateLinkedinProfileURL("https://www.linkedin.com/in/user-with-long-name-and-numbers-123456");
validateLinkedinProfileURL("https://www.linkedin.com/in/invalid@profile");
