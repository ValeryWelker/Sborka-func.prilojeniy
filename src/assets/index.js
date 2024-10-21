export const sliderImages = [
	require('./slider/giay01.jpeg'),
	require('./slider/giay02.jpeg'),
	require('./slider/giay03.jpeg'),
	require('./slider/giay04.jpeg'),
	require('./slider/giay05.jpeg'),
	require('./slider/giay06.jpeg'),
];

const reverseStr = (str) => {
	let newStr = '';
	for (let i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
};

const newReverseStr = (str) => {
	str = str.toLowerCase();

	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] !== str[str.length - i - 1]) {
			return false;
		}
		return true;
	}
};

const isPalindrom = (str) => {
	str = str.toLowerCase();
	return str === str.split().reverse().join();
};

const fibonachi = (n) => {
	if (n < 0) {
		return 0;
	}

	if (n <= 2) {
		return 1;
	}
	return fibonachi(n - 1) + fibonachi(n - 2);
};

const bind = (context, ...bindArgs) => {
	let fn = this;

	return (...args) => {
		return fn.apply(context, [...bindArgs, ...args]);
	};
};
