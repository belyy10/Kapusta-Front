"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[98],{10098:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var o,r,i,l,c,a,s,d,p,x,u,g=t(11087),h=t(57689),f=t(30168),b=t(16444),m=b.ZP.header(o||(o=(0,f.Z)(["\n  padding: 12px 16px;\n\n  display: flex;\n  justify-content: space-between;\n"]))),Z=t(81980),j=t(29439),w=t(72791),k=t(54164),y=b.ZP.div(r||(r=(0,f.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 100;\n  transform: translate(-50%, -50%);\n  color: #52555f;\n  background-color: #fff;\n  border-radius: 30px;\n  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);\n"]))),v=b.ZP.div(i||(i=(0,f.Z)(["\n  padding: 50px 20px 60px;\n  @media screen and (min-width: 768px) {\n    padding: 50px 58px 60px;\n  }\n"]))),C=b.ZP.p(l||(l=(0,f.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.14;\n  letter-spacing: 0.02em;\n"]))),P=b.ZP.div(c||(c=(0,f.Z)(["\n  display: flex;\n  gap: 15px;\n"]))),z=b.ZP.button(a||(a=(0,f.Z)(["\n  border: none;\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: transparent;\n  cursor: pointer;\n"]))),E=b.ZP.div(s||(s=(0,f.Z)(["\n  position: absolute;\n  top: 0;\n  z-index: 100;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n"]))),F=t(23853),M=t(20183),L=b.ZP.button(d||(d=(0,f.Z)(["\n  width: 125px;\n  height: 44px;\n  background: ",";\n  border-radius: 16px;\n  font-size: 12px;\n  line-height: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  color: ",";\n  border: 2px solid #f6f7fc;\n  text-align: center;\n  transition: background 400ms ease-in-out, color 400ms ease-in-out;\n\n  &:not(:last-child) {\n    margin-right: 15px;\n  }\n\n  :hover,\n  :focus {\n    background: ",";\n    color: ",";\n  }\n"])),M.Z.whiteColor,M.Z.textColor,M.Z.activeColor,M.Z.whiteColor),_=t(80184),I=function(n){var e=n.children,t=n.dispatch,o=n.closeModal;return(0,_.jsx)(L,{onClick:function(){"Yes"===e&&(t(),o())},children:e})},S=function(n){var e=n.children,t=n.closeModal;return(0,_.jsx)(L,{onClick:t,children:e})},q=document.getElementById("modal-root"),K=document.querySelector("body"),N=function(n){var e=n.children,t=n.closeModal,o=n.dispatch;(0,w.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r),K.classList.toggle("no-scroll")}}));var r=function(n){"Escape"===n.code&&t()};return(0,k.createPortal)((0,_.jsx)(E,{className:"modal-backdrop",onClick:function(n){n.target===n.currentTarget&&t()},children:(0,_.jsxs)(y,{children:[(0,_.jsx)(z,{onClick:t,children:(0,_.jsx)(F.q5L,{size:20})}),(0,_.jsxs)(v,{children:[(0,_.jsx)(C,{children:e}),(0,_.jsxs)(P,{children:[(0,_.jsx)(I,{type:"button",dispatch:o,closeModal:t,children:"Yes"}),(0,_.jsx)(S,{type:"button",closeModal:t,children:"No"})]})]})]})}),q)},R=t(45455),Y=t(59434),A=t(75822),B=b.ZP.div(p||(p=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n"]))),D=b.ZP.p(x||(x=(0,f.Z)(["\n  padding-right: 20px;\n  padding-left: 24px;\n  font-family: 'Roboto';\n  font-weight: 400;\n  font-size: 12px;\n  line-height: calc(14 / 12);\n  letter-spacing: 0.04;\n  border-right: 1px solid ",";\n  color: ",";\n"])),M.Z.borderColor,M.Z.textColor),T=b.ZP.button(u||(u=(0,f.Z)(["\n  margin-left: 20px;\n  text-decoration: underline;\n  font-family: 'Roboto';\n  font-weight: 400;\n  font-size: 12px;\n  line-height: calc(14 / 12);\n  letter-spacing: 0.04;\n  border: none;\n  background-color: transparent;\n  color: ",";\n  cursor: pointer;\n"])),M.Z.textColor);function U(){var n=(0,Z.a)().userEmail,e=(0,w.useState)(!1),t=(0,j.Z)(e,2),o=t[0],r=t[1],i=(0,Y.I0)();return(0,_.jsxs)(B,{children:[(0,_.jsx)(R.ZP,{size:"32",color:"#F5F6FA",fgColor:"#52555F",round:!0,name:n}),(0,_.jsx)(D,{children:n}),(0,_.jsx)(T,{type:"button",onClick:function(){r(!0)},children:"Exit"}),o&&(0,_.jsx)(N,{closeModal:function(){r(!1)},dispatch:function(){i((0,A.ni)())},children:"Do you really want to leave?"})]})}function G(){var n=(0,Z.a)().isLoggedIn;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(m,{children:[(0,_.jsx)(g.rU,{to:"/main",children:(0,_.jsxs)("picture",{children:[(0,_.jsx)("source",{srcSet:"/Kapusta-Front/images/logo/logo.webp 1x",type:"image/webp"}),(0,_.jsx)("img",{src:"/Kapusta-Front/images/logo/logo.png",alt:"logo"})]})}),n&&(0,_.jsx)(U,{})]}),(0,_.jsx)(h.j3,{})]})}}}]);
//# sourceMappingURL=98.61edc184.chunk.js.map