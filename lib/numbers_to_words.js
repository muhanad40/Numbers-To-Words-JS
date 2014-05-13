Array.prototype.each_slice = function (size){
	return_arr = new Array();
  for (var i = 0, l = this.length; i < l; i += size){
    return_arr.push(this.slice(i, i + size));
  }
  return return_arr;
};

function NumbersToWords(){

}

NumbersToWords.prototype.WORDS = 'hundred thousand million billion trillion gazillion'.split(" ");
NumbersToWords.prototype.ONES = 'zero one two three four five six seven eight nine ten'.split(" ");
NumbersToWords.prototype.TENS = 'eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty'.split(" ");
NumbersToWords.prototype.MULTIPLES_OF_TEN = 'ten twenty thirty fourty fifty sixty seventy eighty ninty hundred'.split(" ");

NumbersToWords.prototype.convert = function(number)
{
	if(typeof(number)!=="string") return null;
	var number = parseInt(number, 10);
	if(number<0) number=0;

	if(number <= 999)
	{
		return this.convert_segment(number);
	}
	else
	{
		var output = [];
		number_parsed = number.toFixed().split("").reverse().each_slice(3);
		console.log('--------------');
		for(i=0; i<number_parsed.length; i++){
			num = parseInt(number_parsed[i].reverse().join(""), 10);
			output.push(this.WORDS[i]);
			output.push(this.convert_segment(num));
			// console.log(this.convert_segment(number_parsed[i]));
			// console.log(this.WORDS[i]);
		}
		return output.reverse().join(" ");


		// var output = [];
		// var segments = number.toFixed().split("").reverse().each_slice(3);
		// for(i=0;i<segments.length;i++){
		// 	if(parseInt(segments[i], 10) === 0)
		// 	{
		// 		output.push("");
		// 	}
		// 	else
		// 	{
		// 		output.push(this.convert_segment(segments[i].join("")));
		// 	}
		// }
		// var result = "";
		// for(i=0; i<output.length; i++)
		// {
		// 	if(i == 0)
		// 	{
		// 		result += output[i];
		// 	}
		// 	else
		// 	{
		// 		result += output[i] + " " + this._capitalize(this.WORDS[i]) + ",";
		// 	}
		// }
		// return result;
	}
};

NumbersToWords.prototype.convert_segment = function(number)
{
	if(number <= 0)
	{
		number = 0;
		return "";
	}
	if(number <= 10)
	{
		return this._capitalize(this.ONES[number]);
	}
	else if(number <= 20)
	{
		return this._capitalize(this.TENS[number-11]);
	}
	else if(number <= 99)
	{
		return this._capitalize(this.MULTIPLES_OF_TEN[Math.floor(number/10)-1])
		+ "-"
		+ this._capitalize(this.ONES[Math.floor(number%10)]);
	}
	else if(number <= 999)
	{
		var output = ""
		output += this._capitalize(this.ONES[Math.floor(number/100)])
		output += " "
		output += this._capitalize(this.WORDS[0])
		if((number%100) > 0) {
			output += " and "
			output += this.convert((number%100).toFixed());
		}
		return output
	}
};

NumbersToWords.prototype._capitalize = function(word)
{
	return word.charAt(0).toUpperCase() + word.slice(1);
};