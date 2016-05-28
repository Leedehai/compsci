var format_dec=function(a){var b="";if(a+="",a=a.replace(/\s/g,""),-1!==a.indexOf(".")){var c=a.split(".");b+="."+c[1],a=c[0]}a=a.replace(/^0+([1-9])/,"$1");var d=3-a.length%3;return 3==d&&(d=0),a=" ".repeat(d)+a,a=a.replace(/(.{3})/g,"$1 ").trim(),a+b},format_bin=function(a,b){var c="";if(a+="",a=a.replace(/\s/g,""),-1!==a.indexOf(".")){var d=a.split(".");console.log(d),c="."+d[1],a=d[0]}a=a.replace(/^0+([^0])/,"$1");var e=0;return b?e=b-a.length:(e=4-a.length%4,4==e&&(e=0)),a="0".repeat(e)+a,a=a.replace(/(.{4})/g,"$1 ").trim(),a+c},bin2dec=function(a){var b=0;if(a=a.replace(/\s/g,""),-1!==a.indexOf(".")){var c=a.split("."),d=c[1];a=c[0];for(var e=0;e<d.length;++e)"1"==d[e]&&(b+=1/Math.pow(2,e+1))}a=a.split("").reverse().join("");for(var f=a.length-1;f>=0;--f)"1"==a[f]&&(b+=Math.pow(2,f));return b},dec2bin=function(a){var b=[];if(a*=1,0===a)return"0";if(Math.floor(a)!==a){for(var c=".",d=a%1,e=0;0!==d;++e)d*=2,c+=Math.floor(d),d%=1;return dec2bin(Math.floor(a))+c}for(var f=Math.floor(Math.log(a)/Math.log(2));f>=0;)a-Math.pow(2,f)>=0?(a-=Math.pow(2,f),b[f]="1"):b[f]="0",--f;return b.reverse().join("")},dec2hex=function(a){var b="0123456789ABCDEF",c=[];if(a=Math.floor(a),0===a)return"0";for(var d=Math.floor(Math.log(a)/Math.log(16));d>=0;)c[d]=Math.floor(a/Math.pow(16,d)),c[d]=b.charAt(c[d]),a%=Math.pow(16,d),--d;return c.reverse().join("")},hex2dec=function(a){var b="0123456789ABCDEF",c=0;a=a.toUpperCase(),a=a.split("").reverse().join("");for(var d=a.length-1;d>=0;--d){var e=b.indexOf(a[d]);c+=Math.pow(16,d)*e}return c},hex_input=document.getElementById("hex"),dec_input=document.getElementById("dec"),bin_input=document.getElementById("bin"),update=function(a){dec_input.value=format_dec(a),hex_input.value=dec2hex(a),bin_input.value=format_bin(dec2bin(a))};update("0"),hex_input.oninput=function(){var a=this.value.replace(/[^0-9a-fA-F]/g,""),b=hex2dec(a);update(b)},dec_input.oninput=function(){var a=this.value.replace(/[^\d.]/g,"");update(a)},bin_input.oninput=function(){var a=this.value.replace(/[^01.]/,""),b=bin2dec(a);update(b)};
//# sourceMappingURL=hexconv.js.map