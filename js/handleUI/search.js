const btnSearch = document.querySelector('.navBar .search .btnSearch')
const boxSearch = document.querySelector('.navBar .search .boxSearch')
// console.log(boxSearch);

btnSearch.onclick = () => {
    if(boxSearch.value == ""){
        boxSearch.classList.toggle('show')
        btnSearch.classList.toggle('show')
    }else{
        console.log(boxSearch.value);
    }
}