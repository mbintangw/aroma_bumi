const content = document.querySelectorAll('.content');

window.addEventListener('scroll', checkContents);

checkContents()

function checkContents(){

  const triggerBottom = window.innerHeight / 5 * 4;

  content.forEach((content) => {
    const conTop = content.getBoundingClientRect().top;

    if(conTop < triggerBottom){
      content.classList.add('show-animate');
    } else{
      content.classList.remove('show-animate');
    }
    
  });
}

const content2 = document.querySelectorAll('.content2');

window.addEventListener('scroll', checkContents2);

checkContents2()

function checkContents2(){

  const triggerBottom = window.innerHeight / 5 * 4;

  content2.forEach((content) => {
    const conTop = content.getBoundingClientRect().top;

    if(conTop < triggerBottom){
      content.classList.add('show-animate');
    } else{
      content.classList.remove('show-animate');
    }
    
  });
}

