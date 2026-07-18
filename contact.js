// ==========================
// Firebase Configuration
// ==========================

const firebaseConfig = {
  apiKey: "AIzaSyAFhgnyyS5NwKef7rQA5ryAWXQmKMSrMuU",
  authDomain: "contactform-f89bb.firebaseapp.com",
  databaseURL: "https://contactform-f89bb-default-rtdb.firebaseio.com",
  projectId: "contactform-f89bb",
  storageBucket: "contactform-f89bb.firebasestorage.app",
  messagingSenderId: "953414593828",
  appId: "1:953414593828:web:e52057d55e7774cada97b1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();


// ==========================
// Contact Form
// ==========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const contactData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      address: document.getElementById("address").value,
      message: document.getElementById("message").value,
      createdAt: new Date().toLocaleString()
    };

    database.ref("ContactForm").push(contactData)
      .then(() => {

        const successMessage =
          document.getElementById("successMessage");

        if (successMessage) {
          successMessage.style.display = "block";

          setTimeout(() => {
            successMessage.style.display = "none";
          }, 3000);
        }

        contactForm.reset();

      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to submit inquiry.");
      });

  });

}


// ==========================
// Career Form
// ==========================

const careerForm = document.getElementById("careerForm");

if (careerForm) {

  careerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const careerData = {
      name: document.getElementById("careerName").value,
      number: document.getElementById("careerNumber").value,
      email: document.getElementById("careerEmail").value,
      address: document.getElementById("careerAddress").value,
      department: document.getElementById("careerDepartment").value,
      experience: document.getElementById("careerExperience").value,
      message: document.getElementById("careerMessage").value,
      createdAt: new Date().toLocaleString()
    };

    database.ref("CareerForm").push(careerData)
      .then(() => {

        const successMessage =
          document.getElementById("careerSuccessMessage");

        if (successMessage) {
          successMessage.style.display = "block";

          setTimeout(() => {
            successMessage.style.display = "none";
          }, 3000);
        }

        careerForm.reset();

      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to submit application.");
      });

  });

}