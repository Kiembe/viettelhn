import { combo, month, inCall, outCall } from '../data/db.js'
import { handleRender } from '../render/handle.js'



const btnSearch = document.querySelectorAll('.navBar .search .btnSearch')
const boxSearch = document.querySelectorAll('.navBar .search .boxSearch')

const btnHome = document.querySelectorAll('.btnHome')
const boxHome = document.querySelectorAll('.boxHome')

const btnSearchMobile = document.querySelector('.mobileMenuShow .container .menu .btnSearch')
const boxSearchMobile = document.querySelector('.mobileMenuShow .container .menu .boxSearch')

const btnHomeMobile = document.querySelector('.mobileMenuShow .container .menu .btnHome')
const boxHomeMobile = document.querySelector('.mobileMenuShow .container .menu .boxHome')

// console.log(btnSearchMobile.length);

const rootSearch = document.querySelector('.rootSearch')

// console.log(boxSearch);
if(btnSearch.length > 0){
    btnSearch.forEach((e,i) => {
        e.onclick = () => {
            if(boxSearch[i].value == ""){
                boxSearch[i].classList.toggle('show')
                btnSearch[i].classList.toggle('show')
            }else{
                const searchContent = boxSearch[i].value.toUpperCase()
                localStorage.setItem('searchContent',searchContent)
                window.location = "../../tim_kiem.html"
            }
        }
    })
}if(btnHome.length > 0 ){
    btnHome.forEach((e,i) => {
        e.onclick = () => {
            if(boxHome[i].value == ""){
                btnHome[i].classList.toggle('show')
                boxHome[i].classList.toggle('show')
            }else{
                const searchContent = boxHome[i].value.toUpperCase()
                localStorage.setItem('searchContent',searchContent)
                window.location = "../../tim_kiem.html"
            }
        }
    })
}

if(btnSearchMobile){
    btnSearchMobile.onclick = () => {
        if(boxSearchMobile.value == ""){
            boxSearchMobile.classList.toggle('show')
            btnSearch.classList.toggle('show')
        }else{
            const searchContent = boxSearchMobile.value.toUpperCase()
            localStorage.setItem('searchContent',searchContent)
            window.location = "../../tim_kiem.html"
        }
    } 
}if(btnHomeMobile){
    btnHomeMobile.onclick = () => {
            const searchContent = boxHomeMobile.value.toUpperCase()
            localStorage.setItem('searchContent',searchContent)
            window.location = "../../tim_kiem.html"
    } 
}




const searchVa = localStorage.getItem('searchContent')

const comboPrice = combo
.map((combo) => combo.proV.concat(combo.proF).concat(combo.proN).concat(combo.proMXH).concat(combo.proVN))
.flat()
.filter((product) => product.name.toUpperCase().includes(searchVa));

const monthPrice = month
.map((month) => month.proST.concat(month.proSD).concat(month.otherPro))
.flat()
.filter((product) => product.name.toUpperCase().includes(searchVa));

const inCallPrice = inCall
.map((inCall) => inCall.proMP.concat(inCall.proMPX))
.flat()
.filter((product) => product.name.toUpperCase().includes(searchVa));

const outCallPrice = outCall
.flat()
.filter((product) => product.name.toUpperCase().includes(searchVa));

const allPro = comboPrice.concat(monthPrice).concat(inCallPrice).concat(outCallPrice)


const header = `
            <tr>
                <th>Gói Cước</th>
                <th>ưu đãi</th>
                <th>cú pháp</th>
            </tr>
            `

const title = `
    <div class="title">
        <h5>Kết quả tìm kiếm của : " ${searchVa} "</h5>
    </div>
`

if (rootSearch) {
rootSearch.innerHTML =  title+ "<table>" + header + handleRender(allPro).join('') + "</table>"
}
