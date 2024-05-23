let btn=document.getElementById('btn');
let inp=document.getElementById('inp');
let boxs=document.querySelectorAll('.box');
let drag=null;
btn.onclick=function(){
    if(inp.value != ''){
        boxs[0].innerHTML+='<p class="items" draggable="true">'+inp.value+'</p>';
        inp.value='';
    }
    dragItem();
}
function dragItem(){
    let item=document.querySelectorAll('.items');
    item.forEach(itm=>{
        itm.addEventListener('dragstart',function(){
            console.log('start')
            drag=itm;
            itm.style.opacity='0.5';
        })
        itm.addEventListener('dragend',function(){
            console.log('end')
            drag=null;
            itm.style.opacity='1';
        })
    })

    boxs.forEach(box =>{
        box.addEventListener('dragover' ,function(e){
            console.log('over')
            e.preventDefault()
            box.style.background='#090';
            box.style.color='#fff';
        })
        box.addEventListener('dragleave' ,function(){
            box.style.background='#fff';
            box.style.color='#000';
        })
        box.addEventListener('drop' ,function(){
            box.append(drag)
            box.style.background='#fff';
            box.style.color='#000';
        })
    })
}