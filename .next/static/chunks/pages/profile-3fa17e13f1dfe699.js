(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{9344:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return r(7329)}])},1116:function(e,s,r){"use strict";r.d(s,{Z:function(){return N}});var a=r(5893),n=r(3299),t=r(9008),i=r.n(t),l=r(1664),d=r.n(l),o=r(1955),c=r(7294),m=r(2920),u=r(5746);r(1399);var h=r(2331);function x(e){let{href:s,children:r,...n}=e;return(0,a.jsx)(d(),{href:s,...n,children:r})}var f=r(1163),p=r(9633),j=r(7814),w=r(9417);function N(e){let{title:s,children:r}=e,{status:t,data:l}=(0,n.useSession)(),{state:N,dispatch:b}=(0,c.useContext)(h.y),{cart:v}=N,[g,P]=(0,c.useState)(0);(0,c.useEffect)(()=>{P(v.cartItems.reduce((e,s)=>e+s.quantity,0))},[v.cartItems]);let y=()=>{o.Z.remove("cart"),b({type:"CART_RESET"}),(0,n.signOut)({callbackUrl:"/login"})},[k,_]=(0,c.useState)(""),E=(0,f.useRouter)(),I=e=>{e.preventDefault(),E.push("/search?query=".concat(k))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:s?s+" - Proshop":"Proshop"}),(0,a.jsx)("meta",{name:"description",content:"Ecommerce Website"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)(m.Ix,{position:"bottom-center",limit:1}),(0,a.jsxs)("div",{className:"flex min-h-screen flex-col justify-between ",children:[(0,a.jsx)("header",{children:(0,a.jsxs)("nav",{className:"flex h-12 items-center px-4 justify-between shadow-md",children:[(0,a.jsx)(d(),{href:"/",className:"text-lg font-bold",children:"Proshop"}),(0,a.jsxs)("form",{onSubmit:I,className:"mx-auto  hidden  justify-center md:flex",children:[(0,a.jsx)("input",{onChange:e=>_(e.target.value),type:"text",className:"rounded-tr-none rounded-br-none p-1 text-sm   focus:ring-0",placeholder:"Search products"}),(0,a.jsx)("button",{className:"rounded rounded-tl-none rounded-bl-none bg-amber-300 p-1 text-sm dark:text-black",type:"submit",id:"button-addon2",children:(0,a.jsx)(p.Z,{className:"h-5 w-5"})})]}),(0,a.jsxs)("div",{className:"flex items-center z-10",children:[(0,a.jsxs)(d(),{href:"/cart",className:"p-2",children:[(0,a.jsx)(j.G,{icon:w.yYj,style:{color:"blue"}}),g>0&&(0,a.jsx)("span",{className:"ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white",children:g})]}),"loading"===t?"Loading":(null==l?void 0:l.user)?(0,a.jsxs)(u.v,{as:"div",className:"relative inline-block",children:[(0,a.jsx)(u.v.Button,{className:"text-blue-600",children:l.user.name}),(0,a.jsxs)(u.v.Items,{className:"absolute right-0 w-56 origin-top-right bg-white  shadow-lg ",children:[(0,a.jsx)(u.v.Item,{children:(0,a.jsx)(x,{className:"dropdown-link",href:"/profile",children:"Profile"})}),(0,a.jsx)(u.v.Item,{children:(0,a.jsx)(x,{className:"dropdown-link",href:"/order-history",children:"Order History"})}),l.user.isAdmin&&(0,a.jsx)(u.v.Item,{children:(0,a.jsx)(x,{className:"dropdown-link",href:"/admin/dashboard",children:"Admin Dashboard"})}),(0,a.jsx)(u.v.Item,{children:(0,a.jsx)("a",{className:"dropdown-link",href:"#",onClick:y,children:"Logout"})})]})]}):(0,a.jsx)(d(),{href:"/login",className:"p-2",children:"Sign In"})]})]})}),(0,a.jsx)("main",{className:"container m-auto mt-4 px-4",children:r}),(0,a.jsx)("footer",{className:"flex h-10 justify-center items-center shadow-inner",children:(0,a.jsx)("p",{children:"Copyright \xa9 2023 Proshop"})})]})]})}},7329:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return m}});var a=r(5893),n=r(7294),t=r(3299),i=r(7536),l=r(2920),d=r(9998),o=r(6154),c=r(1116);function m(){let{data:e}=(0,t.useSession)(),{handleSubmit:s,register:r,getValues:m,setValue:u,formState:{errors:h}}=(0,i.cI)();(0,n.useEffect)(()=>{u("name",e.user.name),u("email",e.user.email)},[e.user,u]);let x=async e=>{let{name:s,email:r,password:a}=e;try{await o.Z.put("/api/auth/update",{name:s,email:r,password:a});let e=await (0,t.signIn)("credentials",{redirect:!1,email:r,password:a});l.Am.success("Profile updated successfully"),e.error&&l.Am.error(e.error)}catch(e){l.Am.error((0,d.b)(e))}};return(0,a.jsx)(c.Z,{title:"Profile",children:(0,a.jsxs)("form",{className:"mx-auto max-w-screen-md",onSubmit:s(x),children:[(0,a.jsx)("h1",{className:"mb-4 text-xl",children:"Update Profile"}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"name",children:"Name"}),(0,a.jsx)("input",{type:"text",className:"w-full",id:"name",autoFocus:!0,...r("name",{required:"Please enter name"})}),h.name&&(0,a.jsx)("div",{className:"text-red-500",children:h.name.message})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"email",children:"Email"}),(0,a.jsx)("input",{type:"email",className:"w-full",id:"email",...r("email",{required:"Please enter email",pattern:{value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,message:"Please enter valid email"}})}),h.email&&(0,a.jsx)("div",{className:"text-red-500",children:h.email.message})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"password",children:"New Password"}),(0,a.jsx)("input",{className:"w-full",type:"password",id:"password",...r("password",{required:"Please enter new password",minLength:{value:6,message:"password is more than 5 chars"}})}),h.password&&(0,a.jsx)("div",{className:"text-red-500 ",children:h.password.message})]}),(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm New Password"}),(0,a.jsx)("input",{className:"w-full",type:"password",id:"confirmPassword",...r("confirmPassword",{required:"Please confirm new password",validate:e=>e===m("password"),minLength:{value:6,message:"confirm password is more than 5 chars"}})}),h.confirmPassword&&(0,a.jsx)("div",{className:"text-red-500 ",children:h.confirmPassword.message}),h.confirmPassword&&"validate"===h.confirmPassword.type&&(0,a.jsx)("div",{className:"text-red-500 ",children:"Password do not match"})]}),(0,a.jsx)("div",{className:"mb-4",children:(0,a.jsx)("button",{className:"primary-button",children:"Update Profile"})})]})})}m.auth=!0},9998:function(e,s,r){"use strict";r.d(s,{b:function(){return a}});let a=e=>e.response&&e.response.data&&e.response.data.message?e.response.data.message:e.message}},function(e){e.O(0,[976,583,154,536,774,888,179],function(){return e(e.s=9344)}),_N_E=e.O()}]);