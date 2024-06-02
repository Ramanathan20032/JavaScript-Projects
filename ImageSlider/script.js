const container = document.querySelector('.container');
const btns = document.querySelectorAll('.btn') // selecting both the right and left buttons

const imageList = ['1', '2', '3', '4']

let index = 0
btns.forEach((button)=>{
    button.addEventListener('click',()=>{
        // console.log('click')
        if(button.classList.contains('btn-left')){
            // console.log('left click')
            index--;
            if(index < 0){
                index = imageList.length-1;
            }
            container.style.background = `url('${imageList[index]}.jpg') center/cover fixed no-repeat`
        }
        else{
            // console.log('right-click')
            index++;
            if(index === imageList.length){
                index = 0
            }
            container.style.background = `url('${imageList[index]}.jpg') center/cover fixed no-repeat`
        }
    })
})