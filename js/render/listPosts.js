import { combo, month, inCall, outCall } from '../data/db.js'
import { posts } from '../data/postsData.js'
import { handleRender } from './handle.js'

const rootListPosts = document.querySelector('.rootListPosts')
const rootPosts = document.querySelector('.rootPosts')

const time = new Date();
let day = time.getDate();
let gmonth = time.getMonth();
let year = time.getFullYear();

const postsRender = posts.map(e => {
    return `
        <div class="post">
            <div>
                <img src="${e.img}">
                <h5>${e.title}</h5>
            </div>
            <p class="time">
            ${day - 5}/${gmonth}/${year}
            </p>
        </div>
    `
})

if(rootListPosts){
    rootListPosts.innerHTML = postsRender.join('')
}


const listPosts = document.querySelectorAll('.post')

listPosts.forEach((e, i) => {
    e.onclick = () => {
        window.location = `../cac_goi_cuoc/goi_cuoc_${posts[i].price || posts[i].namePro}.html`
    }
})

// const id = localStorage.getItem('id')

// const title = `
//     <div class="title">
//         <h5>${posts[id].title}</h5>
//         <p>${posts[id].content}</p>
//     </div>
// `

// const header = `
//             <tr>
//                 <th>Gói Cước</th>
//                 <th>ưu đãi</th>
//                 <th>cú pháp</th>
//             </tr>
//             `
// const idPosts = posts[id].namePro.toUpperCase()

// const comboPrice = combo
//     .map((combo) => combo.proV.concat(combo.proF).concat(combo.proN).concat(combo.proMXH).concat(combo.proVN))
//     .flat()
//     .filter((product) => product.price === posts[id].price);

// const monthPrice = month
//     .map((month) => month.proST.concat(month.proSD).concat(month.otherPro))
//     .flat()
//     .filter((product) => product.price === posts[id].price);

// const inCallPrice = inCall
//     .map((inCall) => inCall.proMP.concat(inCall.proMPX))
//     .flat()
//     .filter((product) => product.price === posts[id].price);

// const outCallPrice = outCall
//     .flat()
//     .filter((product) => product.price === posts[id].price);

// const allProPrice = comboPrice.concat(monthPrice).concat(inCallPrice).concat(outCallPrice)

// // 

// const comboName = combo
//     .map((combo) => combo.proV.concat(combo.proF).concat(combo.proN).concat(combo.proMXH).concat(combo.proVN))
//     .flat()
//     .filter((product) => product.name.toUpperCase().includes(idPosts));

// const monthName = month
//     .map((month) => month.proST.concat(month.proSD).concat(month.otherPro))
//     .flat()
//     .filter((product) => product.name.toUpperCase().includes(idPosts));

// const inCallName = inCall
//     .map((inCall) => inCall.proMP.concat(inCall.proMPX))
//     .flat()
//     .filter((product) => product.name.toUpperCase().includes(idPosts));

// const outCallName = outCall
//     .flat()
//     .filter((product) => product.name.toUpperCase().includes(idPosts));

// const allProName = comboName.concat(monthName).concat(inCallName).concat(outCallName)
// if (rootPosts) {
//     if(allProPrice.length > 0){
//         rootPosts.innerHTML = title + "<table>" + header + handleRender(allProPrice).join('') + "</table>"
//     }if(allProName.length > 0){
//         rootPosts.innerHTML = title + "<table>" + header + handleRender(allProName).join('') + "</table>"
//     }
// }

