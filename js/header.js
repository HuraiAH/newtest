const btns= document.querySelectorAll('.qusetion-btn');

btns.forEach( function (btn){
    btn.addEventListener('click', function(e){
        // btns.forEach( function(item){
        //     if(item!==btn){
        //         item.classList.remove('show-text')
        //     }
        // });
        // console.log(e.currentTarget.parentElement);
        const question=e.currentTarget.parentElement
        question.classList.toggle("show-text");
    })
}

)
// function myFunction(){
//     var text= '+953 012 3654 896'
//   document.getElementById('demo').innerHTML= text;
// }



