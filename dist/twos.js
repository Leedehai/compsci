var columnize=function(a,b){a=a.toString();for(var c=a.split("").reverse(),d=[],e=0;e<c.length;e++)d.push(c[e]),(e+1)%b===0&&d.push(" ");return d.reverse().join("").trim()},bin2dec=function(a){var b=0;a=a.replace(/\s/g,""),a=a.split("").reverse().join("");for(var c=a.length-1;c>=0;--c)"1"==a[c]&&(b+=Math.pow(2,c));return b},dec2bin=function(a){var b=[];if(a=parseInt(a),0===a)return 0;for(var c=Math.floor(Math.log(a)/Math.log(2));c>=0;)a-Math.pow(2,c)>=0?(a-=Math.pow(2,c),b[c]="1"):b[c]="0",--c;return b.reverse().join("")},twoscomp=function(a){a=a.split("").reverse();for(var b=[],c=a.length,d=0;c>d&&"1"!=a[d];)b[d]=a[d],++d;for(b[d]="1",++d;c>d;)"1"==a[d]?b[d]="0":"0"==a[d]?b[d]="1":b[d]=a[d],++d;return b.reverse().join("")},input_bin_a=document.querySelector("[name=bin_one]"),input_bin_b=document.querySelector("[name=bin_two]"),input_dec_a=document.querySelector("[name=dec_one]"),input_dec_b=document.querySelector("[name=dec_two]");input_bin_a.oninput=function(){var a=this.value.replace(/\s/g,""),b=twoscomp(a);input_bin_a.value=columnize(a,4),input_bin_b.value=columnize(b,4),input_dec_a.value=bin2dec(a),input_dec_b.value=-1*bin2dec(a)},input_dec_a.oninput=function(){var a=parseInt(this.value),b=dec2bin(a);input_bin_a.value=columnize(b,4),input_bin_b.value=columnize(twoscomp(b),4),input_dec_b.value=-1*a};