function createCustomHTML(t){
var tag=document.createElement(t)
const html={
appendToBody:function(){document.body.appendChild(tag)},
appendToElementById:function(id){document.getElementById(id).appendChild(tag)},
id:function(id){tag.id=id},
assignClass:function(c){tag.class=c }
}
return html
}
function select(e){
var tag=document.querySelector(e)
const html={
removeFromBody:()=>document.body.removeChild(tag),
removeFromElementById:(id)=>document.getElementById(id).removeChild(tag),
makeInvisible:()=>tag.style.display="none",
getText:()=>tag.innerText, 
placeText:(text)=>tag.innerText=text
}
return html
}