const btnSearch = document.querySelectorAll('.navBar .search .btnSearch')
const boxSearch = document.querySelectorAll('.navBar .search .boxSearch')
// console.log(boxSearch);

btnSearch.forEach((e,i) => {
    e.onclick = () => {
        if(boxSearch[i].value == ""){
            boxSearch[i].classList.toggle('show')
            btnSearch[i].classList.toggle('show')
        }else{
            console.log(boxSearch[i].value);
        }
    }

})