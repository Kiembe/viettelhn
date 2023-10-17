import {V,F,N,MXH,VN} from '../data/db.js'
import {ST,SD,OT} from '../data/db.js'
import {MP,MPX,OUTC} from '../data/db.js'

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
        <td></td>
        <td><a href="">xem thêm</a></td>
        <td></td>
    </tr>
`
// COMBO
const comboVRender = V.map(e => {
    if(e.detail.freeApp && e.detail.freeApp != "" 
    && e.detail.freeSms && e.detail.freeSms != ""){
        return `
                    
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="data">${e.detail.data}</li>
                                <li class="call">${e.detail.freeCall}</li>
                                <li class="sms">${e.detail.freeSms}</li>
                                <li class="app">${e.detail.freeApp}</li>
                                <li class="apply">Áp dụng : ${e.detail.applyFor}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
    }if (e.detail.freeApp && e.detail.freeApp != "") {
        return `
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="data">${e.detail.data}</li>
                                <li class="call">${e.detail.freeCall}</li>
                                <li class="app">${e.detail.freeApp}</li>
                                <li class="apply">Áp dụng : ${e.detail.applyFor}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
    }if (e.detail.freeSms && e.detail.freeSms != "") {
        return `
                    
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="data">${e.detail.data}</li>
                                <li class="call">${e.detail.freeCall}</li>
                                <li class="sms">${e.detail.freeSms}</li>
                                <li class="apply">Áp dụng : ${e.detail.applyFor}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
    }else {
        return `
                    
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="data">${e.detail.data}</li>
                                <li class="call">${e.detail.freeCall}</li>
                                <li class="apply">Áp dụng : ${e.detail.applyFor}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
    }
})
const comboFRender = F.map(e => {   
    if(e.detail.freeApp && e.detail.freeApp != "" 
    && e.detail.freeSms && e.detail.freeSms != ""){
        return `
                    
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="data">${e.detail.data}</li>
                                <li class="call">${e.detail.freeCall}</li>
                                <li class="sms">${e.detail.freeSms}</li>
                                <li class="app">${e.detail.freeApp}</li>
                                <li class="apply">Áp dụng : ${e.detail.applyFor}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
    }if (e.detail.freeApp && e.detail.freeApp != "") {
        return `
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="data">${e.detail.data}</li>
                                <li class="call">${e.detail.freeCall}</li>
                                <li class="app">${e.detail.freeApp}</li>
                                <li class="apply">Áp dụng : ${e.detail.applyFor}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
    }if (e.detail.freeSms && e.detail.freeSms != "") {
        return `
                    
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="data">${e.detail.data}</li>
                                <li class="call">${e.detail.freeCall}</li>
                                <li class="sms">${e.detail.freeSms}</li>
                                <li class="apply">Áp dụng : ${e.detail.applyFor}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
    }else {
        return `
                    
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="data">${e.detail.data}</li>
                                <li class="call">${e.detail.freeCall}</li>
                                <li class="apply">Áp dụng : ${e.detail.applyFor}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
    }
})
rootCombo.innerHTML = header + comboVRender.join('') + comboFRender.join('') + footer

// MONTH

const monthSTRender = ST.map(e => {
    if (e.detail.freeApp && e.detail.freeApp != "") {
        return `
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="data">${e.detail.data}</li>
                                <li class="app">${e.detail.freeApp}</li>
                                <li class="apply">Áp dụng : ${e.detail.applyFor}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
    }else {
        return `
                    
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="data">${e.detail.data}</li>
                                <li class="apply">Áp dụng : ${e.detail.applyFor}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
    }
})

const monthSDRender = SD.map(e => {
    if (e.detail.freeApp && e.detail.freeApp != "") {
        return `
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="data">${e.detail.data}</li>
                                <li class="app">${e.detail.freeApp}</li>
                                <li class="apply">Áp dụng : ${e.detail.applyFor}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
    }else {
        return `
                    
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="data">${e.detail.data}</li>
                                <li class="apply">Áp dụng : ${e.detail.applyFor}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
    }
})

rootMonth.innerHTML = header + monthSTRender.join('') + monthSDRender.join('') + footer

// CALL

const callMPRender = MP.map(e => {
        return `
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="call">${e.detail.freeCall}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
})

const callMPXRender = MPX.map(e => {
    return `
                    <tr class="tbContent">
                        <td class="proInf">
                            <ul>
                                <li>${e.name}</li>
                                <li>${e.price}.000đ</li>
                                <li>${e.duration} ngày</li>
                            </ul>
                        </td>
                        <td class="proDetail">
                            <ul>
                                <li class="call">${e.detail.freeCall}</li>
                            </ul>
                        </td>
                        <td class="proAct">
                            <ul>
                                <li><p>${e.syntax}<span> gửi</span> 9123</p></li>
                                <li><a href="sms:9123;?&amp;body=${e.syntax}">đăng ký</a></li>
                            </ul>
                        </td>
                    </tr>
        `
})

rootCall.innerHTML = header + callMPRender.join('') + callMPXRender.join('') + footer


