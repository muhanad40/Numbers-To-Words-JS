Array.prototype.each_slice = function (size){
	return_arr = new Array();
  for (var i = 0, l = this.length; i < l; i += size){
    return_arr.push(this.slice(i, i + size));
  }
  return return_arr;
};

function NumbersToWords() {

}

NumbersToWords.prototype.WORDS = 'hundred thousand million billion trillion gazillion'.split(" ");
NumbersToWords.prototype.ONES = 'zero one two three four five six seven eight nine ten'.split(" ");
NumbersToWords.prototype.TENS = 'eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty'.split(" ");
NumbersToWords.prototype.MULTIPLES_OF_TEN = 'ten twenty thirty fourty fifty sixty seventy eighty ninty hundred'.split(" ");

NumbersToWords.prototype.convert = function(number)
{
	var output = "";
	if(typeof(number)!=="string") var number = number.toFixed();
	var number = parseInt(number, 10);
	if(number<0) number=0;
	if(number <= 999)
	{
		output += this.convert_segment(number);
	}
	else
	{
		number_parsed = number.toFixed().split("").reverse().each_slice(3);
		if(this.WORDS.length < number_parsed.length)
		{
			return "Error: number is too large. Largest allowed is: " + this._capitalize(this.WORDS[this.WORDS.length-1]) + "s";
		}
		output_arr = [];
		for(i=0; i<number_parsed.length; i++)
		{
			segment_num = parseInt(number_parsed[i].reverse().join(""), 10);
			if(i==0)
			{
				var phrase = this.convert_segment(segment_num);
				if(phrase)
				{
					output_arr.push(phrase);
				}
			}
			else
			{
				output_arr.push(this.convert_segment(segment_num) + " " + this._capitalize(this.WORDS[i]));
			}
		}
		output += output_arr.reverse().join(", ");
	}
	return output;
};

NumbersToWords.prototype.convert_segment = function(number)
{
	var output = ""
	if(number <= 0 || typeof(number) !== 'number')
	{
		number = 0;
		output += "";
	}
	else if(number <= 10)
	{
		output += this._capitalize(this.ONES[number]);
	}
	else if(number <= 20)
	{
		output += this._capitalize(this.TENS[number-11]);
	}
	else if(number <= 99)
	{
		output += this._capitalize(this.MULTIPLES_OF_TEN[Math.floor(number/10)-1]);
		if(number%10 > 0)
		{
			output += "-";
			output += this._capitalize(this.ONES[Math.floor(number%10)]);
		}
	}
	else if(number <= 999)
	{
		output += this._capitalize(this.ONES[Math.floor(number/100)]);
		output += " ";
		output += this._capitalize(this.WORDS[0]);
		if((number%100) > 0) {
			output += " and ";
			output += this.convert((number%100).toFixed());
		}
	}
	return output;
};

NumbersToWords.prototype._capitalize = function(word)
{
	return word.charAt(0).toUpperCase() + word.slice(1);
};