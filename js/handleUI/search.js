import { combo, month, inCall, outCall } from '../data/db.js'
import { handleRender } from '../render/handle.js'



const btnSearch = document.querySelectorAll('.navBar .search .btnSearch')
const boxSearch = document.querySelectorAll('.navBar .search .boxSearch')

const btnHome = document.querySelectorAll('.btnHome')
const boxHome = document.querySelectorAll('.boxHome')

const btnSearchMobile = document.querySelector('.mobileMenuShow .container .menu .btnSearch')
const boxSearchMobile = document.querySelector('.mobileMenuShow .container .menu .boxSearch')

const rootSearch = document.querySelector('.rootSearch')

// console.log(boxSearch);

btnSearch.forEach((e,i) => {
    e.onclick = () => {
        if(boxSearch[i].value == ""){
            boxSearch[i].classList.toggle('show')
            btnSearch[i].classList.toggle('show')
        }else{
            const searchContent = boxSearch[i].value.toUpperCase()
            localStorage.setItem('searchContent',searchContent)
            window.location = "../pages/search.html"
        }
    }
})

btnSearchMobile.onclick = () => {
        if(boxSearchMobile.value == ""){
            boxSearchMobile.classList.toggle('show')
            btnSearch.classList.toggle('show')
        }else{
            const searchContent = boxSearchMobile.value.toUpperCase()
            localStorage.setItem('searchContent',searchContent)
            window.location = "../pages/search.html"
        }
    }

btnHome.onclick = () => {
        if(boxSearchMobile.value == ""){
            boxSearchMobile.classList.toggle('show')
            boxSearchMobile.classList.toggle('show')
        }else{
            const searchContent = boxSearchMobile.value.toUpperCase()
            localStorage.setItem('searchContent',searchContent)
            window.location = "pages/search.html"
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
