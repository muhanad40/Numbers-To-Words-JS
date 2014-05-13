describe('Numbers to Words:', function() {

	beforeEach(function() {
		converter = new NumbersToWords();
	});

	describe('When number is <= 10', function() {

		it('should return "1" as "One"', function() {
			expect(converter.convert('1')).toBe('One');
		});

		it('should return "7" as "Seven"', function() {
			expect(converter.convert('7')).toBe('Seven');
		});

		it('should return "10" as "Ten"', function() {
			expect(converter.convert('10')).toBe('Ten');
		});

	});

	describe('When number is > 10 and <= 20', function() {

		it('should return "11" as "Eleven"', function() {
			expect(converter.convert('11')).toBe('Eleven');
		});

		it('should return "15" as "Fifteen"', function() {
			expect(converter.convert('15')).toBe("Fifteen");
		});

		it('should return "019" as "Nineteen"', function() {
			expect(converter.convert('019')).toBe("Nineteen");
		});

		it('should return "20" as "Twenty"', function() {
			expect(converter.convert('20')).toBe("Twenty");
		});

	});

	describe('When number is > 21 and <= 99', function() {

		it('should return "21" as "Twenty-One"', function() {
			expect(converter.convert('21')).toBe("Twenty-One");
		});

		it('should return "45" as "Fourty-Five"', function() {
			expect(converter.convert('45')).toBe("Fourty-Five");
		});

		it('should return "99" as "Ninty-Nine"', function() {
			expect(converter.convert('99')).toBe("Ninty-Nine");
		});

	});

	describe('When number is > 100 and <= 999', function() {

		it('should return "100" as "One Hundred"', function() {
			expect(converter.convert('100')).toBe("One Hundred");
		});

		it('should return "0101" as "One Hundred and One"', function() {
			expect(converter.convert('0101')).toBe("One Hundred and One");
		});

		it('should return "101" as "One Hundred and One"', function() {
			expect(converter.convert('101')).toBe("One Hundred and One");
		});

		it('should return "492" as "Four Hundred and Ninty-Two"', function() {
			expect(converter.convert('492')).toBe("Four Hundred and Ninty-Two");
		});

		it('should return "999" as "Nine Hundred and Ninty-Nine"', function() {
			expect(converter.convert('999')).toBe("Nine Hundred and Ninty-Nine");
		});

	});

	describe('Odd circumstances -', function() {
		
		it('should return "0" as ""', function() {
			expect(converter.convert('0')).toBe('');
		});

		it('should return "00" as ""', function() {
			expect(converter.convert('00')).toBe('');
		});

		it('should return "000" as ""', function() {
			expect(converter.convert('000')).toBe('');
		});

		it('should return "-3" as ""', function() {
			expect(converter.convert('-3')).toBe('');
		});

		it('should return "001" as "One"', function() {
			expect(converter.convert('001')).toBe('One');
		});

	});

	describe('Wne number is > 999', function() {
		
		it('should return "1000" as "One Thousand"', function() {
			expect(converter.convert('1000')).toBe('One Thousand');
		});
		
		it('should return "1234" as "One Thousand, Two Hundred and Thirty-Four"', function() {
			expect(converter.convert('1234')).toBe('One Thousand, Two Hundred and Thirty-Four');
		});
		
		it('should return "1004" as "One Thousand, Four"', function() {
			expect(converter.convert('1004')).toBe('One Thousand, Four');
		});
		
		it('should return "1014" as "One Thousand, Fourteen"', function() {
			expect(converter.convert('1014')).toBe('One Thousand, Fourteen');
		});
		
		it('should return "1037" as "One Thousand, Thirty-Seven"', function() {
			expect(converter.convert('1037')).toBe('One Thousand, Thirty-Seven');
		});
		
		it('should return "1107" as "One Thousand, One Hundred and Seven"', function() {
			expect(converter.convert('1107')).toBe('One Thousand, One Hundred and Seven');
		});
		
		it('should return "1170" as "One Thousand, One Hundred and Seventy"', function() {
			expect(converter.convert('1170')).toBe('One Thousand, One Hundred and Seventy');
		});
		
		it('should return "1100" as "One Thousand, One Hundred"', function() {
			expect(converter.convert('1100')).toBe('One Thousand, One Hundred');
		});
		
		it('should return "10000" as "Ten Thousand"', function() {
			expect(converter.convert('10000')).toBe('Ten Thousand');
		});
		
		it('should return "10100" as "Ten Thousand, One Hundred"', function() {
			expect(converter.convert('10100')).toBe('Ten Thousand, One Hundred');
		});
		
		it('should return "10101" as "Ten Thousand, One Hundred and One"', function() {
			expect(converter.convert('10101')).toBe('Ten Thousand, One Hundred and One');
		});
		
		it('should return "10117" as "Ten Thousand, One Hundred and Seventeen"', function() {
			expect(converter.convert('10117')).toBe('Ten Thousand, One Hundred and Seventeen');
		});
		
		it('should return "101117" as "One Hundred and One Thousand, One Hundred and Seventeen"', function() {
			expect(converter.convert('101117')).toBe('One Hundred and One Thousand, One Hundred and Seventeen');
		});
		
		it('should return "101007" as "One Hundred and One Thousand, Seven"', function() {
			expect(converter.convert('101007')).toBe('One Hundred and One Thousand, Seven');
		});
		
		it('should return "101000" as "One Hundred and One Thousand"', function() {
			expect(converter.convert('101000')).toBe('One Hundred and One Thousand');
		});
		
		it('should return "1101000" as "One Million, One Hundred and One Thousand"', function() {
			expect(converter.convert('1101000')).toBe('One Million, One Hundred and One Thousand');
		});

		it('should return "1354909" as "One Million, Three Hundred and Fifty-Four Thousand, Nine Hundred and Nine"', function() {
			expect(converter.convert('1354909')).toBe('One Million, Three Hundred and Fifty-Four Thousand, Nine Hundred and Nine');
		});

		it('should return "241354909" as "Two Hundred and Fourty-One Million, Three Hundred and Fifty-Four Thousand, Nine Hundred and Nine"', function() {
			expect(converter.convert('241354909')).toBe('Two Hundred and Fourty-One Million, Three Hundred and Fifty-Four Thousand, Nine Hundred and Nine');
		});

		it('should return "7241354909" as "Seven Billion, Two Hundred and Fourty-One Million, Three Hundred and Fifty-Four Thousand, Nine Hundred and Nine"', function() {
			expect(converter.convert('7241354909')).toBe('Seven Billion, Two Hundred and Fourty-One Million, Three Hundred and Fifty-Four Thousand, Nine Hundred and Nine');
		});

	});

});