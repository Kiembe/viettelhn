import {ST,SD,OT} from '../data/db.js'
import { handleRender } from './handle.js'


const header = `
            <tr>
                <th>Gói Cước</th>
                <th>ưu đãi</th>
                <th>cú pháp</th>
            </tr>
            `

const rootST = document.querySelector('#rootST')
const rootSD = document.querySelector('#rootSD')
const rootOT = document.querySelector('#rootOT')

rootST.innerHTML = header + handleRender(ST).join('')
rootSD.innerHTML = header + handleRender(SD).join('')
rootOT.innerHTML = header + handleRender(OT).join('')