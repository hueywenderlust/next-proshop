(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[209],{2678:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/products",function(){return t(1637)}])},1116:function(e,s,t){"use strict";t.d(s,{Z:function(){return N}});var r=t(5893),n=t(3299),a=t(9008),c=t.n(a),l=t(1664),d=t.n(l),i=t(1955),o=t(7294),u=t(2920),h=t(5746);t(1399);var m=t(2331);function x(e){let{href:s,children:t,...n}=e;return(0,r.jsx)(d(),{href:s,...n,children:t})}var p=t(1163),j=t(9633),E=t(7814),f=t(9417);function N(e){let{title:s,children:t}=e,{status:a,data:l}=(0,n.useSession)(),{state:N,dispatch:b}=(0,o.useContext)(m.y),{cart:y}=N,[g,C]=(0,o.useState)(0);(0,o.useEffect)(()=>{C(y.cartItems.reduce((e,s)=>e+s.quantity,0))},[y.cartItems]);let _=()=>{i.Z.remove("cart"),b({type:"CART_RESET"}),(0,n.signOut)({callbackUrl:"/login"})},[T,S]=(0,o.useState)(""),v=(0,p.useRouter)(),w=e=>{e.preventDefault(),v.push("/search?query=".concat(T))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c(),{children:[(0,r.jsx)("title",{children:s?s+" - Proshop":"Proshop"}),(0,r.jsx)("meta",{name:"description",content:"Ecommerce Website"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(u.Ix,{position:"bottom-center",limit:1}),(0,r.jsxs)("div",{className:"flex min-h-screen flex-col justify-between ",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("nav",{className:"flex h-12 items-center px-4 justify-between shadow-md",children:[(0,r.jsx)(d(),{href:"/",className:"text-lg font-bold",children:"Proshop"}),(0,r.jsxs)("form",{onSubmit:w,className:"mx-auto  hidden  justify-center md:flex",children:[(0,r.jsx)("input",{onChange:e=>S(e.target.value),type:"text",className:"rounded-tr-none rounded-br-none p-1 text-sm   focus:ring-0",placeholder:"Search products"}),(0,r.jsx)("button",{className:"rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black",type:"submit",id:"button-addon2",children:(0,r.jsx)(j.Z,{className:"h-5 w-5"})})]}),(0,r.jsxs)("div",{className:"flex items-center z-10",children:[(0,r.jsxs)(d(),{href:"/cart",className:"p-2",children:[(0,r.jsx)(E.G,{icon:f.yYj,style:{color:"blue"}}),g>0&&(0,r.jsx)("span",{className:"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white",children:g})]}),"loading"===a?"Loading":(null==l?void 0:l.user)?(0,r.jsxs)(h.v,{as:"div",className:"relative inline-block",children:[(0,r.jsx)(h.v.Button,{className:"text-blue-600",children:l.user.name}),(0,r.jsxs)(h.v.Items,{className:"absolute right-0 w-56 origin-top-right bg-white  shadow-lg ",children:[(0,r.jsx)(h.v.Item,{children:(0,r.jsx)(x,{className:"dropdown-link",href:"/profile",children:"Profile"})}),(0,r.jsx)(h.v.Item,{children:(0,r.jsx)(x,{className:"dropdown-link",href:"/order-history",children:"Order History"})}),l.user.isAdmin&&(0,r.jsx)(h.v.Item,{children:(0,r.jsx)(x,{className:"dropdown-link",href:"/admin/dashboard",children:"Admin Dashboard"})}),(0,r.jsx)(h.v.Item,{children:(0,r.jsx)("a",{className:"dropdown-link",href:"#",onClick:_,children:"Logout"})})]})]}):(0,r.jsx)(d(),{href:"/login",className:"p-2",children:"Sign In"})]})]})}),(0,r.jsx)("main",{className:"container m-auto mt-4 px-4",children:t}),(0,r.jsx)("footer",{className:"flex h-10 justify-center items-center shadow-inner",children:(0,r.jsx)("p",{children:"Copyright \xa9 2023 Proshop"})})]})]})}},1637:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return m}});var r=t(5893),n=t(6154),a=t(1664),c=t.n(a),l=t(1163),d=t(7294),i=t(2920),o=t(1116),u=t(9998);function h(e,s){switch(s.type){case"FETCH_REQUEST":return{...e,loading:!0,error:""};case"FETCH_SUCCESS":return{...e,loading:!1,products:s.payload,error:""};case"FETCH_FAIL":return{...e,loading:!1,error:s.payload};case"CREATE_REQUEST":return{...e,loadingCreate:!0};case"CREATE_SUCCESS":case"CREATE_FAIL":return{...e,loadingCreate:!1};case"DELETE_REQUEST":return{...e,loadingDelete:!0};case"DELETE_SUCCESS":return{...e,loadingDelete:!1,successDelete:!0};case"DELETE_FAIL":return{...e,loadingDelete:!1};case"DELETE_RESET":return{...e,loadingDelete:!1,successDelete:!1}}}function m(){let e=(0,l.useRouter)(),[{loading:s,error:t,products:a,loadingCreate:m,successDelete:x,loadingDelete:p},j]=(0,d.useReducer)(h,{loading:!0,products:[],error:""}),E=async()=>{if(window.confirm("Are you sure?"))try{j({type:"CREATE_REQUEST"});let{data:s}=await n.Z.post("/api/admin/products");j({type:"CREATE_SUCCESS"}),i.Am.success("Product created successfully"),e.push("/admin/product/".concat(s.product._id))}catch(e){j({type:"CREATE_FAIL"}),i.Am.error((0,u.b)(e))}};(0,d.useEffect)(()=>{let e=async()=>{try{j({type:"FETCH_REQUEST"});let{data:e}=await n.Z.get("/api/admin/products");j({type:"FETCH_SUCCESS",payload:e})}catch(e){j({type:"FETCH_FAIL",payload:(0,u.b)(e)})}};x?j({type:"DELETE_RESET"}):e()},[x]);let f=async e=>{if(window.confirm("Are you sure?"))try{j({type:"DELETE_REQUEST"}),await n.Z.delete("/api/admin/products/".concat(e)),j({type:"DELETE_SUCCESS"}),i.Am.success("Product deleted successfully")}catch(e){j({type:"DELETE_FAIL"}),i.Am.error((0,u.b)(e))}};return(0,r.jsx)(o.Z,{title:"Admin Products",children:(0,r.jsxs)("div",{className:"grid md:grid-cols-4 md:gap-5",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/admin/dashboard",children:"Dashboard"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/admin/orders",children:"Orders"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/admin/products",className:"font-bold",children:"Products"})}),(0,r.jsx)("li",{children:(0,r.jsx)(c(),{href:"/admin/users",children:"Users"})})]})}),(0,r.jsxs)("div",{className:"overflow-x-auto md:col-span-3",children:[(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("h1",{className:"mb-4 text-xl",children:"Products"}),p&&(0,r.jsx)("div",{children:"Deleting item..."}),(0,r.jsx)("button",{disabled:m,onClick:E,className:"primary-button",children:m?"Loading":"Create"})]}),s?(0,r.jsx)("div",{children:"Loading..."}):t?(0,r.jsx)("div",{className:"alert-error",children:t}):(0,r.jsx)("div",{className:"overflow-x-auto",children:(0,r.jsxs)("table",{className:"min-w-full",children:[(0,r.jsx)("thead",{className:"border-b",children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"px-5 text-left",children:"ID"}),(0,r.jsx)("th",{className:"p-5 text-left",children:"NAME"}),(0,r.jsx)("th",{className:"p-5 text-left",children:"PRICE"}),(0,r.jsx)("th",{className:"p-5 text-left",children:"CATEGORY"}),(0,r.jsx)("th",{className:"p-5 text-left",children:"COUNT"}),(0,r.jsx)("th",{className:"p-5 text-left",children:"RATING"}),(0,r.jsx)("th",{className:"p-5 text-left",children:"ACTIONS"})]})}),(0,r.jsx)("tbody",{children:a.map(e=>(0,r.jsxs)("tr",{className:"border-b",children:[(0,r.jsx)("td",{className:" p-5 ",children:e._id.substring(20,24)}),(0,r.jsx)("td",{className:" p-5 ",children:e.name}),(0,r.jsxs)("td",{className:" p-5 ",children:["$",e.price]}),(0,r.jsx)("td",{className:" p-5 ",children:e.category}),(0,r.jsx)("td",{className:" p-5 ",children:e.countInStock}),(0,r.jsx)("td",{className:" p-5 ",children:e.rating}),(0,r.jsxs)("td",{className:" p-5 ",children:[(0,r.jsx)(c(),{href:"/admin/product/".concat(e._id),type:"button",className:"default-button",children:"Edit"}),"\xa0",(0,r.jsx)("button",{onClick:()=>f(e._id),className:"default-button",type:"button",children:"Delete"})]})]},e._id))})]})})]})]})})}m.auth={adminOnly:!0}},9998:function(e,s,t){"use strict";t.d(s,{b:function(){return r}});let r=e=>e.response&&e.response.data&&e.response.data.message?e.response.data.message:e.message}},function(e){e.O(0,[976,583,154,774,888,179],function(){return e(e.s=2678)}),_N_E=e.O()}]);