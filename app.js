const fmt=n=>isFinite(n)?n.toLocaleString('fr-FR',{style:'currency',currency:'EUR'}):'-';
const f=document.getElementById('f'),out=document.getElementById('out');
f.innerHTML=TOOL.fields.map(a=>`<label for="${a.id}">${a.l}</label>`+(a.o?`<select id="${a.id}">${a.o.map(o=>`<option value="${o[1]}"${o[1]==a.v?' selected':''}>${o[0]}</option>`).join('')}</select>`:`<input id="${a.id}" type="number" inputmode="decimal" step="any" value="${a.v}">`)).join('');
function run(){const v={};TOOL.fields.forEach(a=>v[a.id]=parseFloat(document.getElementById(a.id).value)||0);
out.innerHTML=TOOL.calc(v).map(r=>`<div><span>${r[0]}</span><strong>${r[1]}</strong></div>`).join('')}
f.addEventListener('input',run);run();
