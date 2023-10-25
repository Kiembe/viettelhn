import { combo, month, inCall, outCall } from '../../js/data/db.js'
import { posts } from '../../js/data/postsData.js'
import { handleRender } from '../../js/render/handle.js'

const rootPosts = document.querySelector('.rootPosts')


const header = `
                <tr>
                    <th>Gói Cước</th>
                    <th>ưu đãi</th>
                    <th>cú pháp</th>
                </tr>
                 `


const comboPrice = combo
    .map((combo) => combo.proV.concat(combo.proF).concat(combo.proN).concat(combo.proMXH).concat(combo.proVN))
    .flat()
    .filter((product) => product.name.toUpperCase().includes("MXH"));

    console.log(comboPrice);

const monthPrice = month
    .map((month) => month.proST.concat(month.proSD).concat(month.otherPro))
    .flat()
    .filter((product) => product.name.toUpperCase().includes("MXH"));

// const inCallPrice = inCall
//     .map((inCall) => inCall.proMP.concat(inCall.proMPX))
//     .flat()
//     .filter((product) => product.name === "MXH100");

// const outCallPrice = outCall
//     .flat()
//     .filter((product) => product.name === "MXH100");

const allPro = comboPrice.concat(monthPrice)

if (rootPosts) {
    rootPosts.innerHTML =  "<table>" + header + handleRender(allPro).join('') + "</table>"
}