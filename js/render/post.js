import {combo,month,inCall,outCall} from '../data/db.js'
import {posts} from '../data/postsData.js'
import {handleRender} from './handle.js'

const listPosts = document.querySelectorAll('.post')
const rootPosts= document.querySelector('.rootPosts')

listPosts.forEach((e,i) => {
    e.onclick = () => {
        localStorage.setItem('id',i)
        window.location="../pages/post.html"
        
    }
})

const id = localStorage.getItem('id')

const title = `
    <div class="title">
        <h5>${posts[id].title}</h5>
        <p>${posts[id].content}</p>
    </div>
`

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
  .filter((product) => product.price === posts[id].price);

  const monthPrice = month
  .map((month) => month.proST.concat(month.proSD).concat(month.otherPro)) 
  .flat() 
  .filter((product) => product.price === posts[id].price);
  
  const inCallPrice = inCall
  .map((inCall) => inCall.proMP.concat(inCall.proMPX)) 
  .flat() 
  .filter((product) => product.price === posts[id].price);
  
  const outCallPrice = outCall 
  .flat() 
  .filter((product) => product.price === posts[id].price);
  
  const allPro = comboPrice.concat(monthPrice).concat(inCallPrice).concat(outCallPrice)
  
rootPosts.innerHTML = title + "<table>" + header + handleRender(allPro).join('') + "</table>"
