import {V,F,N,MXH,VN} from '../data/db.js'

const comboVRender = V.map(e => {
    if(e.detail.freeApp && e.detail.freeApp != "" 
    && e.detail.freeSms && e.detail.freeSms != ""
    && e.detail.freeCall && e.detail.freeCall != ""){
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
    }if (e.detail.freeCall && e.detail.freeCall != ""
        && e.detail.freeApp && e.detail.freeApp != "") {
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
    }if (e.detail.freeCall && e.detail.freeCall != ""
    && e.detail.freeSms && e.detail.freeSms != "") {
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
    && e.detail.freeSms && e.detail.freeSms != ""
    && e.detail.freeCall && e.detail.freeCall != ""){
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
    }if (e.detail.freeCall && e.detail.freeCall != ""
        && e.detail.freeApp && e.detail.freeApp != "") {
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
    }if (e.detail.freeCall && e.detail.freeCall != ""
    && e.detail.freeSms && e.detail.freeSms != "") {
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
const comboNRender = N.map(e => {
    if(e.detail.freeApp && e.detail.freeApp != "" 
    && e.detail.freeSms && e.detail.freeSms != ""
    && e.detail.freeCall && e.detail.freeCall != ""){
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
    }if (e.detail.freeCall && e.detail.freeCall != ""
        && e.detail.freeApp && e.detail.freeApp != "") {
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
    }if (e.detail.freeCall && e.detail.freeCall != ""
    && e.detail.freeSms && e.detail.freeSms != "") {
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
const comboMXHRender = MXH.map(e => {
    if(e.detail.freeApp && e.detail.freeApp != "" 
    && e.detail.freeSms && e.detail.freeSms != ""
    && e.detail.freeCall && e.detail.freeCall != ""){
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
    }if (e.detail.freeCall && e.detail.freeCall != ""
        && e.detail.freeApp && e.detail.freeApp != "") {
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
    }if (e.detail.freeCall && e.detail.freeCall != ""
    && e.detail.freeSms && e.detail.freeSms != "") {
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
const comboVNRender = VN.map(e => {
    if(e.detail.freeApp && e.detail.freeApp != "" 
    && e.detail.freeSms && e.detail.freeSms != ""
    && e.detail.freeCall && e.detail.freeCall != ""){
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
    }if (e.detail.freeCall && e.detail.freeCall != ""
        && e.detail.freeApp && e.detail.freeApp != "") {
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
    }if (e.detail.freeCall && e.detail.freeCall != ""
    && e.detail.freeSms && e.detail.freeSms != "") {
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

rootV.innerHTML = header + comboVRender.join('')
rootF.innerHTML = header + comboFRender.join('')
rootN.innerHTML = header + comboNRender.join('')
rootMXH.innerHTML = header + comboMXHRender.join('')
rootVN.innerHTML = header + comboVNRender.join('')