// Form input labels :
const cardholdername_input = document.getElementById('cardholder-name');
const cardnumber_input = document.getElementById('card-number');
const mm_input = document.querySelector('.mm');
const yy_input = document.querySelector('.yy');
const cvc_input = document.querySelector('.cvc');

// Elements inside the cards :
// Front card elements =>
const fc_number = document.querySelector('.c-number');
const fc_name = document.querySelector('.c-name');
const fc_cvc = document.querySelector('.c-cvc');

// Back Card
const bc_cvc = document.querySelector('.cvc-text');

const border = document.querySelector('.card-number');
const btn_hide = document.querySelector('.submit-btn');
const wrapper_cntr = document.querySelector('.wrapper');
const thku = document.querySelector('.thankyou');
const continue_btn = document.querySelector('.contt');

// ---------------------------------------------------------------------------- //
// JS Logic Start now :

// Event listener for name on Front Card:
cardholdername_input.addEventListener('change', () => {
	fc_name.textContent = cardholdername_input.value.toUpperCase();
	if (fc_name.textContent === '') {
		fc_name.textContent = 'JANE APPLESEED';
	}
});

// console.log(cardholdername_input.value);
//Event listener for taking Card number as input:
cardnumber_input.addEventListener('change', () => {
	const card_n = 5;
	fc_number.value = cardnumber_input.value;
	if ((fc_number.value.length = card_n)) {
		fc_number.textContent = fc_number.value;
		border.classList.remove('red_border');
	}

	// Default value of content :
	if (
		fc_number.textContent === '' ||
		fc_number.value.length > card_n ||
		fc_number.value < 0 ||
		fc_number.value.length < card_n
	) {
		fc_number.textContent = '0000 0000 0000 0000';
		border.classList.add('red_border');
	}
});

//Updating CVC text now:
cvc_input.addEventListener('change', () => {
	cvc_input.classList.remove('red_border');
	bc_cvc.textContent = cvc_input.value.slice(0, 3);
	// console.log(bc_cvc.textContent);
	if (cvc_input.value.length > 3) {
		// console.log('Longer than expected string');
		cvc_input.classList.add('red_border');
	}
});

//Taking input of expiration date of the card:
let month, year;
const thisMonth = new Date().getMonth() + 1; // Initially ranges from 0-11 so adding +1 makes the range 1-12
const thisYear = new Date().getFullYear() % 100; //Getting only the year digits

function check_month() {
	month = mm_input.value.slice(0, 2);
	mm_input.classList.remove('red_border');
	if (month > 12 || month <= 0) mm_input.classList.add('red_border');
}
function check_year() {
	year = yy_input.value.slice(0, 2);
	yy_input.classList.remove('red_border');

	// Checking YY
	if (thisYear == year) {
		if (thisMonth >= month) {
			mm_input.classList.add('red_border');
		}
	}
	if (thisYear > year) yy_input.classList.add('red_border');

	// 	Addign date and expiry to Card
	fc_cvc.textContent = `${month} / ${year}`;
}

cvc_input.addEventListener('key', () => {
	btn_hide.classList.remove('hidden');
	if (
		cardnumber_input.classList.contains('red_border') ||
		mm_input.classList.contains('red_border') ||
		yy_input.classList.contains('red_border') ||
		cvc_input.classList.contains('red_border') ||
		cardholdername_input.value === ''
	) {
		btn_hide.classList.add('hidden');
	}
});

// console.log(document.getElementsByClassName('form-container'));
btn_hide.addEventListener('click', () => {
	wrapper_cntr.classList.add('hidden');
	thku.classList.remove('hidden');
	btn_hide.classList.add('hidden');
	setTimeout(function () {
		location.reload();
	}, 5000);
});

continue_btn.addEventListener('click', () => {
	// wrapper_cntr.classList.remove('hidden');
	// btn_hide.classList.remove('hidden');
	// thku.classList.add('hidden');
	location.reload();
});
