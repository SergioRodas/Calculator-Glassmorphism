const $=document.getElementById.bind(document);let memory;const operators=["+","-","*","/"];function Equal(){calc(),$("res").value=memory,$("result").innerText=memory,$("value").innerText=memory}function backspace(){let e=$("res").value,l=$("value").innerText;if(e.length>1){let r=l.slice(0,e.length-1);$("value").innerText=r,$("res").value=r,calc()}else e.length,reset()}function btnKey(e){let l=$("res").value;return"ERROR!"===l?reset():operators.includes(l[l.length-1])&&operators.includes(e)&&"-"!==l.length?($("value").innerText=l.slice(0,l.length-1)+e,$("res").value=l.slice(0,l.length-1)+e):($("res").value=l+e,$("value").innerText=l+e,void calc())}function calc(){let result=$("res").value,resDisplay;if("ERROR!"===result||operators.includes(result)&&"-"!==result)return reset();if(operators.includes(result.slice(-1))&&"-"!==result){let valueNormalize=result.slice(0,result.length-1);resDisplay=eval(valueNormalize)}else resDisplay=eval(result);void 0===resDisplay||resDisplay===1/0||Number.isNaN(resDisplay)||resDisplay===-1/0?$("result").innerText="ERROR!":($("result").innerText=resDisplay,memory=resDisplay)}function reset(){$("res").value="",$("result").innerText="",$("value").innerText=""}