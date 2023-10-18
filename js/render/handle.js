
export function handleRender(item) {
    const render = item.map(e => {
        if(e.detail.data && e.detail.data != ""){
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
        }if(e.detail.freeSms && e.detail.freeSms != ""){
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
        }if(e.detail.freeApp && e.detail.freeApp != ""){
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
        }if(e.detail.freeCall && e.detail.freeCall != ""){
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
        }if(e.detail.data && e.detail.data != ""
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
        }if(e.detail.data && e.detail.data != ""
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
        }if(e.detail.data && e.detail.data != ""
        && e.detail.freeApp && e.detail.freeApp != ""){
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
        }if(e.detail.freeCall && e.detail.freeCall != ""
        && e.detail.freeApp && e.detail.freeApp != ""){
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
        }if(e.detail.freeCall && e.detail.freeCall != ""
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
        }if(e.detail.freeApp && e.detail.freeApp != ""
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
                    <li class="app">${e.detail.freeApp}</li>
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
        }if(e.detail.data && e.detail.data != ""
            && e.detail.freeCall && e.detail.freeCall != ""
            && e.detail.freeApp && e.detail.freeApp != ""
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
                    <li class="app">${e.detail.freeApp}</li>
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
        }if(e.detail.data && e.detail.data != ""
        && e.detail.freeCall && e.detail.freeCall != ""
        && e.detail.freeApp && e.detail.freeApp != ""
        && e.detail.freeSms && e.detail.freeSms != ""
        && !e.detail.applyFor && e.detail.applyFor =="" ){
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
                <li class="sms">${e.detail.freeSms}</li>
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
    }if(e.detail.freeInCall && e.detail.freeInCall != ""
        && e.detail.freeOutCall && e.detail.freeOutCall != ""
        && !e.detail.applyFor){
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
                    <li class="inCall">${e.detail.freeInCall}</li>
                    <li class="outCall">${e.detail.freeOutCall}</li>
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
        }if(e.detail.freeInCall && e.detail.freeInCall != ""
        && e.detail.freeOutCall && e.detail.freeOutCall != ""){
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
                    <li class="inCall">${e.detail.freeInCall}</li>
                    <li class="outCall">${e.detail.freeOutCall}</li>
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
        }else{
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

    return render
}