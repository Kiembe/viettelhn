import {V,F,N,MXH,VN} from '../data/db.js'
import {ST,SD,OT} from '../data/db.js'
import {MP,MPX,OUTC} from '../data/db.js'
import { handleRender } from './handle.js'

const rootCombo = document.querySelector('#rootCombo')
const rootMonth = document.querySelector('#rootMonth')
const rootCall = document.querySelector('#rootCall')
const header = `
            <tr>
                <th>Gói Cước</th>
                <th>ưu đãi</th>
                <th>cú pháp</th>
            </tr>
            `


const footer = `
        <tr class="proViewMore">
            <td colspan="3"><a class="viewMore" href="V">Xem thêm</a></td>
        </tr>
`


// COMBO
rootCombo.innerHTML = header + handleRender(V).join('') + handleRender(F).join('') + footer

// MONTH

rootMonth.innerHTML = header + handleRender(ST).join('') + handleRender(SD).join('') + footer

// CALL

rootCall.innerHTML = header + handleRender(MP).join('') + handleRender(MPX).join('') + footer


