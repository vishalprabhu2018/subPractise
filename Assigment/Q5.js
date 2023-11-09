// Define the regular expression pattern for valid URLs
const urlPattern = /^(https?:\/\/)[\w\d\-._]+[a-zA-Z]+$/;

// Function to validate a URL
function validateURL(url) {
  if (urlPattern.test(url)) {
    console.log(`${url} is a valid URL.`);
  } else {
    console.log(`${url} is not a valid URL.`);
  }
}

// Test the program with some example URLs
validateURL("http://www.example.com");
validateURL("https://www.example.com");
validateURL("ftp://www.example.com");
validateURL("https://sub.domain123-xyz.com");
validateURL("http://localhost");
