
hamClick=()=>{
const list=document.getElementById("hamLogo").classList
list.add("hide")
document.body.classList.add='bc';
hx()
}
hx=()=>{
    var list2=document.getElementById("hamMenue").classList
    list2.add("show")

}
hxx=()=>{
    var list3=document.getElementById("hamMenue").classList
    list3.remove("show")
    var list1=document.getElementById("hamLogo").classList
    list1.remove("hide")
    document.body.removeAttribute('class');
}


const links = document.querySelectorAll('.navlink');
const sections = document.querySelectorAll('.main');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active'));
  links[index].classList.add('active');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);
