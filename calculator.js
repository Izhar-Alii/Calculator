function calculator(){

    let screen=document.getElementById('screen')
    let button=document.querySelectorAll('.btn')
    let equal=document.getElementById('equal')
    let cut=document.getElementById('cut')


    button.forEach(element => {
        element.addEventListener('click',function(e){
            let getValue=e.target.value
            screen.value+=getValue
        })
    });

    equal.addEventListener('click',function(e){
       if(screen.value===''){
        screen.value='please enter value'
       }
       else{
        let answer=eval(screen.value)
        // answer=Math.round(answer);
        screen.value=answer
       }
    });
    cut.addEventListener('click',function(){
        screen.value=''
})
}

calculator()
