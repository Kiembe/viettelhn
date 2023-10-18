import {MP,MPX,OUTC} from '../data/db.js'
import { handleRender } from './handle.js'

const header = `
            <tr>
                <th>Gói Cước</th>
                <th>ưu đãi</th>
                <th>cú pháp</th>
            </tr>
            `

const rootMP = document.querySelector('#rootMP')
const rootMPX = document.querySelector('#rootMPX')
const rootOUTC = document.querySelector('#rootOUTC')

if(rootMP){
    rootMP.innerHTML = header + handleRender(MP).join('')
}
if(rootMPX){
    rootMPX.innerHTML = header + handleRender(MPX).join('')
}

if(rootOUTC){
    rootOUTC.innerHTML = header + handleRender(OUTC).join('')
}