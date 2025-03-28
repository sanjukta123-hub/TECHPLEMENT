// redirect to enrollpage
document.addEventListener("DOMContentLoaded", function () {
           // Select all enroll buttons
           document.querySelectorAll(".enrollButton").forEach(button => {
               button.addEventListener("click", function () {
                   window.location.href = "enroll.html"; // Redirect to enroll.html
               });
           });
       });

// go back 
 function goBack() {
	               window.location.href = "index.html";
	           }
// hidden the dropdown code
			   document.addEventListener("DOMContentLoaded", function () {
			       let categorySelect = document.getElementById("category");
			       let webDropdown = document.getElementById("webDropdown");
			       let dataDropdown = document.getElementById("dataDropdown");
			       let digiDropdown = document.getElementById("digiDropdown");

			       categorySelect.addEventListener("change", function () {
			           // Hide all dropdowns initially
			           webDropdown.classList.add("hidden");
			           dataDropdown.classList.add("hidden");
			           digiDropdown.classList.add("hidden");

			           // Show only the selected category's dropdown
			           if (this.value === "web") {
			               webDropdown.classList.remove("hidden");
			           } else if (this.value === "data") {
			               dataDropdown.classList.remove("hidden");
			           } else if (this.value === "digital") {
			               digiDropdown.classList.remove("hidden");
			           }
			       });
			   });
// successfull code
    document.addEventListener("DOMContentLoaded", function() {
        const params = new URLSearchParams(window.location.search);
        const name = params.get("name");
        const course = params.get("course");
        
        document.getElementById("enrolledName").textContent = name;
        document.getElementById("enrolledCourse").textContent = course;
        document.getElementById("enrolledNameDetails").textContent = name;
        document.getElementById("enrolledCourseDetails").textContent = course;
    });
    
    function goHome() {
        window.location.href = "index.html";
    }

    function viewCourses() {
        window.location.href = "courses.html";
    }
	
	document.addEventListener("DOMContentLoaded", function () {
	    const form = document.getElementById("enrollmentForm");

	    if (form) {
	        form.addEventListener("submit", function (event) {
	            event.preventDefault(); // Prevent form submission
	            
	            // Get input values
	            const name = document.getElementById("name").value;
	            const email = document.getElementById("email").value;
	            const category = document.getElementById("category").value;
	            
	            let selectedCourse = "";
	            if (category === "web") {
	                selectedCourse = document.getElementById("webBatch").value;
	            } else if (category === "data") {
	                selectedCourse = document.getElementById("dataBatch").value;
	            } else if (category === "digital") {
	                selectedCourse = document.getElementById("digiBatch").value;
	            }

	            // Store in localStorage
	            localStorage.setItem("enrolledName", name);
	            localStorage.setItem("enrolledEmail", email);
	            localStorage.setItem("enrolledCourse", selectedCourse);

	            // Redirect to success page
	            window.location.href = "success.html";
	        });
	    }

	    // Success page: Retrieve stored values and display
	    if (window.location.pathname.includes("success.html")) {
	        const enrolledName = localStorage.getItem("enrolledName");
	        const enrolledEmail = localStorage.getItem("enrolledEmail");
	        const enrolledCourse = localStorage.getItem("enrolledCourse");

	        if (enrolledName && enrolledEmail && enrolledCourse) {
	            document.getElementById("enrolledName").textContent = enrolledName;
	            document.getElementById("enrolledNameDetails").textContent = enrolledName;
	            document.getElementById("enrolledCourse").textContent = enrolledCourse;
	            document.getElementById("enrolledCourseDetails").textContent = enrolledCourse;
	        }
	    }
	});

	// Function to go back
	function goBack() {
	    window.history.back();
	}

	// Function to go home
	function goHome() {
	    window.location.href = "index.html";
	}

	// Function to view courses
	function viewCourses() {
	    window.location.href = "courses.html";
	}
	// redirect to successpage
		   document.getElementById("enrollmentForm").addEventListener("submit", function(event) {
		       event.preventDefault(); // Prevent the default form submission
		       window.location.href = "success.html"; // Redirect to success.html
		   });

		   function goBack() {
		       window.history.back(); // Go back to the previous page
		   }
