export const parseDate = (str) => {
	var ymd = str.split("-");
    
	return new Date(ymd[0], ymd[1] - 1, ymd[2]);
};

export const datediff = (first, second) => {
	// Take the difference between the dates and divide by milliseconds per day.
	// Round to nearest whole number to deal with DST.
	return Math.round((second - first) / (1000 * 60 * 60 * 24));
};

export const getDaysBetween = (firsDate, secondDate) =>
	datediff(parseDate(firsDate), parseDate(secondDate));
