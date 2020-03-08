module.exports = function toReadable (number) {
	function getN(n) {
		switch(n) {
			case 0: return "zero";
			case 1: return "one";
			case 2: return "two";
			case 3: return "three";
			case 4: return "four";
			case 5: return "five";
			case 6: return "six";
			case 7: return "seven";
			case 8: return "eight";
			case 9: return "nine";
		}	
	}

	function getD(n) {
		function getNBelow20(n) {
			if (n >= 10) {
				switch(n) {
					case 10: return "ten";
					case 11: return "eleven";
					case 12: return "twelve";
					case 13: return "thirteen";
					case 14: return "fourteen";
					case 15: return "fifteen";
					case 16: return "sixteen";
					case 17: return "seventeen";
					case 18: return "eighteen";
					case 19: return "nineteen";
				}	
			} else {
				return getN(n);
			}
		}

		function getNAbove20(n) {
			switch(n) {
				case 90: return "ninety";
				case 80: return "eighty";
				case 70: return "seventy";
				case 60: return "sixty";
				case 50: return "fifty";
				case 40: return "forty";
				case 30: return "thirty";
				case 20: return "twenty";
			}	
		}

		const r = n % 10;
		if (n < 20) {
			return getNBelow20(n);
		} else {
			return getNAbove20(n - r) + ((r > 0) ? (" " + getN(r)) : "");
		}
	}

	const r = number % 100;
  if (number >= 100) {
		return getN((number - r) / 100) + " hundred" + ((r > 0) ? " " + getD(r) : "");
	} else {
		return getD(r);
	}
}

//console.log(toReadable(8));
