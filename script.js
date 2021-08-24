//
const searchClose = document.querySelector(".navigation__close");
const navBtn = document.querySelector(".navigation__icon");
const searchIcon = document.querySelector(".user__search");
const hidden = document.querySelector(".hidden"); 
const hiddenSidebar = document.querySelector(".hidden-sidebar");
const hiddenClose = document.querySelector(".hidden-close");


//sidebar and search bar
searchIcon.addEventListener('click', () =>{
  hidden.style.zIndex = "300"
})

searchClose.addEventListener('click', () =>{
  hidden.style.zIndex = "100"
})

navBtn.addEventListener('click', () => {
  hiddenSidebar.style.display = "block"
})

hiddenClose.addEventListener('click', () => {
  hiddenSidebar.style.display = "none"
})

  
//AUTO COMPLETE

const autoCompleteWrapper = document.querySelector(".auto-complete-wrapper")
const autoCompleteList = document.querySelector(".auto-complete-list")
const search = document.querySelector(".search")
const searchInput = document.querySelector(".search__input")

let suggestions = [
    "Four steps to the ephiphany revised - James McEnroe",
    "Four steps to the ephiphany - James McEnroe",
    "The lean start up - Eric Ress",
    "No excuses - Brain Tracy"
]

    //if user press any key and release
  searchInput.onkeyup = (e) =>{
      //console.log(e.target.value)
     let userData = e.target.value; //user entered a data
     let emptyArray = [];
     if(userData) {
       emptyArray = suggestions.filter((data) =>{
         //Filtering array value and user char to lowercase and return only those
         //word/sentc which starts with user entered word
         return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
       })

       emptyArray = emptyArray.map((data) =>{
        return data = '<li>'+ data + '</li>'
       })
       //console.log(emptyArray);

       autoCompleteWrapper.classList.add("active")// show autocomplete box
       showSuggestions(emptyArray);

       let allList = document.querySelectorAll('li');
       for (let i = 0; i < allList.length; i ++) {
         //adding onclick attbr in all li tags
         allList[i].setAttribute('onclick', 'select(this)')  
       }

     }else{
      autoCompleteWrapper.classList.remove("active")// hide autocomplete box
     }
     
  }

function select(e){
  let selectUserData = e.textContent;
  searchInput.value = selectUserData //passing d user selected list in the search box
  autoCompleteWrapper.classList.remove("active")// hide autocomplete box
}

function showSuggestions(list){
  let listData;
  if(!list.length){
      userValue = searchInput.value;
      listData = '<li>' + userValue + '</li>'
  }else{
    listData = list.join('');
  }

 autoCompleteList.innerHTML = listData;
}


//carousel
var elem = document.querySelector('.grid-slider-wrap');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  groupCells: true,
  wrapAround: true,
});

const showBtn = document.querySelectorAll(".show-btn");
const figure = document.querySelectorAll(".grid-slide__about");
const closeBtn = document.querySelectorAll(".close-btn");
const image = document.querySelectorAll(".grid-slide__image");


  
  

  for (let i = 0; i < showBtn.length; i++) {
   
    showBtn[i].addEventListener("click", () =>{
      showBtn[i].style.display = "none"

      figure[i].style.opacity = "1"

      image[i].style.filter = " blur(2px) brightness(70%)"
  })

}

 
 
for (let i = 0; i < closeBtn.length; i++){

  closeBtn[i].addEventListener("click", () => { 

    
      figure[i].style.opacity = "0"
    

   
      image[i].style.filter = "none"
    

    
      showBtn[i].style.display = "flex"
      
    
  })
}


