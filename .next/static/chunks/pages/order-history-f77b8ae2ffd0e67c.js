(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[744],{8714:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order-history",function(){return t(4917)}])},1116:function(e,s,t){"use strict";t.d(s,{Z:function(){return b}});var r=t(5893),n=t(3299),a=t(9008),l=t.n(a),i=t(1664),c=t.n(i),d=t(1955),o=t(7294),h=t(2920),x=t(5746);t(1399);var u=t(2331);function m(e){let{href:s,children:t,...n}=e;return(0,r.jsx)(c(),{href:s,...n,children:t})}var p=t(1163),j=t(9633),f=t(7814),N=t(9417);function b(e){let{title:s,children:t}=e,{status:a,data:i}=(0,n.useSession)(),{state:b,dispatch:g}=(0,o.useContext)(u.y),{cart:y}=b,[v,E]=(0,o.useState)(0);(0,o.useEffect)(()=>{E(y.cartItems.reduce((e,s)=>e+s.quantity,0))},[y.cartItems]);let w=()=>{d.Z.remove("cart"),g({type:"CART_RESET"}),(0,n.signOut)({callbackUrl:"/login"})},[_,C]=(0,o.useState)(""),T=(0,p.useRouter)(),I=e=>{e.preventDefault(),T.push("/search?query=".concat(_))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l(),{children:[(0,r.jsx)("title",{children:s?s+" - Proshop":"Proshop"}),(0,r.jsx)("meta",{name:"description",content:"Ecommerce Website"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(h.Ix,{position:"bottom-center",limit:1}),(0,r.jsxs)("div",{className:"flex min-h-screen flex-col justify-between ",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{className:"flex h-12 items-center px-4 justify-between shadow-md",children:[(0,r.jsx)(c(),{href:"/",className:"text-lg font-bold",children:"Proshop"}),(0,r.jsxs)("form",{onSubmit:I,className:"mx-auto  hidden  justify-center md:flex",children:[(0,r.jsx)("input",{onChange:e=>C(e.target.value),type:"text",className:"rounded-tr-none rounded-br-none p-1 text-sm   focus:ring-0",placeholder:"Search products"}),(0,r.jsx)("button",{className:"rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black",type:"submit",id:"button-addon2",children:(0,r.jsx)(j.Z,{className:"h-5 w-5"})})]}),(0,r.jsxs)("div",{className:"flex items-center z-10",children:[(0,r.jsxs)(c(),{href:"/cart",className:"p-2",children:[(0,r.jsx)(f.G,{icon:N.yYj,style:{color:"blue"}}),v>0&&(0,r.jsx)("span",{className:"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white",children:v})]}),"loading"===a?"Loading":(null==i?void 0:i.user)?(0,r.jsxs)(x.v,{as:"div",className:"relative inline-block",children:[(0,r.jsx)(x.v.Button,{className:"text-blue-600",children:i.user.name}),(0,r.jsxs)(x.v.Items,{className:"absolute right-0 w-56 origin-top-right bg-white  shadow-lg ",children:[(0,r.jsx)(x.v.Item,{children:(0,r.jsx)(m,{className:"dropdown-link",href:"/profile",children:"Profile"})}),(0,r.jsx)(x.v.Item,{children:(0,r.jsx)(m,{className:"dropdown-link",href:"/order-history",children:"Order History"})}),i.user.isAdmin&&(0,r.jsx)(x.v.Item,{children:(0,r.jsx)(m,{className:"dropdown-link",href:"/admin/dashboard",children:"Admin Dashboard"})}),(0,r.jsx)(x.v.Item,{children:(0,r.jsx)("a",{className:"dropdown-link",href:"#",onClick:w,children:"Logout"})})]})]}):(0,r.jsx)(c(),{href:"/login",className:"p-2",children:"Sign In"})]})]})}),(0,r.jsx)("main",{className:"container m-auto mt-4 px-4",children:t}),(0,r.jsx)("footer",{className:"flex h-10 justify-center items-center shadow-inner",children:(0,r.jsx)("p",{children:"Copyright \xa9 2023 Proshop"})})]})]})}},4917:function(e,s,t){"use strict";t.r(s);var r=t(5893),n=t(6154),a=t(1664),l=t.n(a),i=t(7294),c=t(1116),d=t(9998);function o(e,s){switch(s.type){case"FETCH_REQUEST":return{...e,loading:!0,error:""};case"FETCH_SUCCESS":return{...e,loading:!1,orders:s.payload,error:""};case"FETCH_FAIL":return{...e,loading:!1,error:s.payload};default:return e}}function h(){let[{loading:e,error:s,orders:t},a]=(0,i.useReducer)(o,{loading:!0,orders:[],error:""});return(0,i.useEffect)(()=>{let e=async()=>{try{a({type:"FETCH_REQUEST"});let{data:e}=await n.Z.get("/api/orders/history");a({type:"FETCH_SUCCESS",payload:e})}catch(e){a({type:"FETCH_FAIL",payload:(0,d.b)(e)})}};e()},[]),(0,r.jsxs)(c.Z,{title:"Order History",children:[(0,r.jsx)("h1",{className:"mb-4 text-xl",children:"Order History"}),e?(0,r.jsx)("div",{children:"Loading..."}):s?(0,r.jsx)("div",{className:"alert-error",children:s}):(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"min-w-full",children:[(0,r.jsx)("thead",{className:"border-b",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"px-5 text-left",children:"ID"}),(0,r.jsx)("th",{className:"p-5 text-left",children:"DATE"}),(0,r.jsx)("th",{className:"p-5 text-left",children:"TOTAL"}),(0,r.jsx)("th",{className:"p-5 text-left",children:"PAID"}),(0,r.jsx)("th",{className:"p-5 text-left",children:"DELIVERED"}),(0,r.jsx)("th",{className:"p-5 text-left",children:"ACTION"})]})}),(0,r.jsx)("tbody",{children:t.map(e=>(0,r.jsxs)("tr",{className:"border-b",children:[(0,r.jsx)("td",{className:" p-5 ",children:e._id.substring(20,24)}),(0,r.jsx)("td",{className:" p-5 ",children:e.createdAt.substring(0,10)}),(0,r.jsxs)("td",{className:" p-5 ",children:["$",e.totalPrice]}),(0,r.jsx)("td",{className:" p-5 ",children:e.isPaid?"".concat(e.paidAt.substring(0,10)):"not paid"}),(0,r.jsx)("td",{className:" p-5 ",children:e.isDelivered?"".concat(e.deliveredAt.substring(0,10)):"not delivered"}),(0,r.jsx)("td",{className:" p-5 ",children:(0,r.jsx)(l(),{href:"/order/".concat(e._id),passHref:!0,children:"Details"})})]},e._id))})]})})]})}h.auth=!0,s.default=h},9998:function(e,s,t){"use strict";t.d(s,{b:function(){return r}});let r=e=>e.response&&e.response.data&&e.response.data.message?e.response.data.message:e.message}},function(e){e.O(0,[976,583,154,774,888,179],function(){return e(e.s=8714)}),_N_E=e.O()}]);