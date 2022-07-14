module.exports = function toReadable (num) {
	const toNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

	const toNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


	const toNinety = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

	const toNinety2 = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

	const bigInt = ['hundred', 'thousand']

	let twoDigit;
	let fourDigit = 0;

	if (num >= 0 && num < 100) {
		twoDigit = String(num);
	} else if (num < 1000 && num >= 100) {
		twoDigit = String(num).slice(1, 3);
		fourDigit = String(num)[0];
	} else if (num < 10000 && num >= 1000) {
		twoDigit = String(num).slice(2, 4);
		fourDigit = String(num).slice(0, 2);
	} else {
		return 'ERROR!'
	}

	let small = '';
	let big = '';

	if (twoDigit == 0 && fourDigit == 0) {
		small = 'zero';
	} else if (twoDigit == 0 && fourDigit != 0) {
		small = '';
	} else if (twoDigit > 0 && twoDigit < 10) {
		small = toNine[Number(twoDigit)];
	} else if ((twoDigit > 10 && twoDigit < 20 )) {
		small =  toNineteen[Number(twoDigit[1])];
	} else if (twoDigit % 10 === 0) {
		small =  toNinety[Number(twoDigit[0])];
	} else if (twoDigit % 10 !== 0 && twoDigit > 20) {
		small = `${toNinety[Number(twoDigit[0])]} ${toNine[Number(twoDigit[1])]}`;
	}

	if (fourDigit == 0) {
		big = '';
	} else if (fourDigit > 0 && fourDigit < 10) {
		big = `${toNine[fourDigit]} ${bigInt[0]}`;
	} else if (fourDigit >= 10 && fourDigit < 100 && fourDigit % 10 === 0) {
		big = `${toNine[fourDigit[0]]} ${bigInt[1]}`;
	} else if (fourDigit >= 10 && fourDigit < 100 && fourDigit % 10 !== 0) {
		big = `${toNine[fourDigit[0]]} ${bigInt[1]} ${toNine[fourDigit[1]]} ${bigInt[0]}`;
	}

	let result = `${big} ${small}`;

	if (result[result.length - 1] === ' ') {
		return result.slice(0, result.length - 1);
	} else if (result[0] === ' ') {
		return result.slice(1, result.length);
	} else {
		return result;
	}
}
