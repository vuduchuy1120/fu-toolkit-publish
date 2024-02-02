const settingForm = document.querySelector('form');
const rollNum = document.querySelector('#rollnum');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const campusInput = document.querySelector('#campus');
// const autoLoginCheckbox = document.querySelector('#auto-login');

const btn = document.querySelector('#btn');
const radioButtons = document.querySelectorAll('input[name="gen"]');
btn.addEventListener("click", () => {
	let selected;
	for (const radioButton of radioButtons) {
		if (radioButton.checked) {
			selected = radioButton.value;
			break;
		}
	}

	if (selected == "K18") {
		document.getElementById("check").style.display = 'block';
	}
	else {
		output.innerHTML = `Chưa chọn`;
	}
});

settingForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const roll = e.target.rollnum.value;
	const email = e.target.email.value;
	const password = e.target.password.value;
	const campus = e.target.campus.value;
	camp = campus;
	// const autoLogin = e.target.autoLogin.checked;

	setToStorage('STUDENT_ROLL', roll);
	setToStorage('STUDENT_EMAIL', email);
	setToStorage('STUDENT_PASS', password);
	setToStorage('STUDENT_CAMPUS', campus);
	// setToStorage('AUTO_LOGIN', autoLogin);

	alert('Đã lưu');

	// exit
	window.close();
});

// when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
	const roll = await getFromStorage('STUDENT_ROLL', '');
	const email = await getFromStorage('STUDENT_EMAIL', '');
	const password = await getFromStorage('STUDENT_PASS', '');
	const campus = await getFromStorage('STUDENT_CAMPUS', '');
	localStorage.setItem('campus', JSON.stringify(campus));
	emailInput.value = email;
	rollNum.value = roll;
	passwordInput.value = password;
	campusInput.value = campus;
	// const autoLogin = await getFromStorage('AUTO_LOGIN', false);
	// autoLoginCheckbox.checked = autoLogin;
});

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("show").addEventListener("click", myFunction);
});

function myFunction() {
	var x = document.getElementById("password");
	if (x.type === "password") {
		x.type = "text";
	} else {
		x.type = "password";
	}
};

function goToFAP() {
	chrome.tabs.create({
	  active: true,
	  url: "https://fap.fpt.edu.vn",
	});
  }
  
  function goToWT() {
	chrome.tabs.create({
	  active: true,
	  url: "https://fap.fpt.edu.vn/Report/ScheduleOfWeek.aspx",
	});
  }
  
  function goToEdunext() {
	chrome.tabs.create({
	  active: true,
	  url: "https://fu-edunext.fpt.edu.vn",
	});
  }
  
  function goToClassroom() {
	chrome.tabs.create({
	  active: true,
	  url: "https://classroom.google.com/u/0/h",
	});
  }
  function goToCMS() {
	chrome.tabs.create({
	  active: true,
	  url: "https://cmshn.fpt.edu.vn/",
	});
  }
  
  document.getElementById("go_to_fap-weekly").addEventListener("click", goToWT);
  document.getElementById("go_to_fap-button").addEventListener("click", goToFAP);
  document.getElementById("go_to_edunext-button").addEventListener("click", goToEdunext);
  document.getElementById("go_to_ggclassroom-button").addEventListener("click", goToClassroom);
  document.getElementById("go_to_cms-button").addEventListener("click", goToCMS);
  