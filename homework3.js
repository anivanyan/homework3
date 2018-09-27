const a = function(x, y, z){
	const b = x * y;
	const c = b - z; 
	return c;
};
 
const auaSchedule = function(){
	return 'busy';
};

const regular = function(number1, number2) {
     const e = number1 + number2;
     const u = e%5; 
}; 
 
 const text = function(string0, string1, string2) {
 	if(string0.length > string1.length && string0.length > string2.length) {
 		return string0
 	} else if(string1.length > string0.length && string1.length > string2.length){
 		return string1;
 	} else if(string2.length > string0.length && string2.length >string1.length) {
 		return string2;
 	} else {
 		return 'goodbye';
 	};
 };

  const compareMe = function(a, b) {
        if(a === b) {
        	return 0;
        } else if( a > b) {
        	return 1;
        } else if (a < b) {
        	return -1;
        };
  };

  const multiplyMe = function(r,g) {
  	const multiplication = r * g;
  	return multiplication;
  };

   const divideMe = function(q, h) {
   	const division = q / h;
   	return division;
   };

   const triangleArea = function(base, height){
   	 const area1 = multiplyMe(base,height);
   	 const arealast = divideMe(area1, 2);
   	 return arealast; 
   }; 

   const numLength = function(a) {
   	const c = a + ' ';
   	return c.length - 1;
   };
 // in the following function, s and z are strings and v is a number
   const f = function(s, z, v) {
   	if((s + z).length > v) {
   		return 1;
   	} else if( (s + z).length < v){
   		return -1;
   	};
   }; 
// in the following function t is a string; k and n are numbers
   const runStuff = function(t, k, n){
   	 if(t === 'rectangle'){
   	 	const areaRectangle = k * n;
   	 	return areaRectangle;
   	 }else if(t === 'triangle') {
   	 	return triangleArea(k, n);
   	 } else {
   	 	return -1;
   	 };
   };






