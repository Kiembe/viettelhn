import {V,F,N,MXH,VN} from '../data/db.js'
import { handleRender } from './handle.js'

const header = `
            <tr>
                <th>Gói Cước</th>
                <th>ưu đãi</th>
                <th>cú pháp</th>
            </tr>
            `
const rootV = document.querySelector('#rootV')
const rootF = document.querySelector('#rootF')
const rootN = document.querySelector('#rootN')
const rootMXH = document.querySelector('#rootMXH')
const rootVN = document.querySelector('#rootVN')

if(rootV){
    rootV.innerHTML = header + handleRender(V).join('')
}
if(rootF){
    rootF.innerHTML = header + handleRender(F).join('')
}
if(rootN){
    rootN.innerHTML = header + handleRender(N).join('')
}
if(rootMXH){
    rootMXH.innerHTML = header + handleRender(MXH).join('')
}
if(rootV){
    rootVN.innerHTML = header + handleRender(VN).join('')
}