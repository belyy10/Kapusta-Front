"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[45],{4548:function(n,e,t){t.d(e,{Z:function(){return Y}});var i,o,r,a,l,s,c,d,p,x=t(29439),h=t(72791),f=t(59434),g=t(75822),u=t(30168),b=t(16444),m=t(11087),Z=b.ZP.div(i||(i=(0,u.Z)(["\n  flex-direction: column;\n  justify-content: center;\n  margin: 0 auto;\n  padding-top: 104px;\n  @media (min-width: 768px) {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    position: relative;\n    width: fit-content;\n    margin: 0 auto;\n    flex-direction: row;\n    align-self: center;\n    padding-bottom: 40px;\n    padding-top: 40px;\n  }\n  @media (min-width: 1200px) {\n    margin-bottom: 48px;\n    padding-top: 40px;\n  }\n"]))),w=b.ZP.p(o||(o=(0,u.Z)(["\n  font-size: 12px;\n  line-height: 14px;\n  font-weight: 500;\n  text-align: center;\n  letter-spacing: 0.02em;\n  color: rgba(82, 85, 95, 0.7);\n  margin-right: 20px;\n  margin-bottom: 8px;\n  @media screen and (min-width: 768px) and (max-width: 1280px) {\n    margin-right: 21px;\n    margin-bottom: 0px;\n  }\n"]))),j=b.ZP.form(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),v=b.ZP.input(a||(a=(0,u.Z)(["\n  border: 2px solid #ffffff;\n  border-radius: 16px;\n  background-color: transparent;\n  font-weight: 700;\n  text-align: center;\n  color: black;\n  width: 140px;\n  height: 44px;\n  border-radius: 22px 0px 0px 22px;\n\n  @media screen and (min-width: 768px) {\n    margin-right: 15px;\n    border-radius: 16px;\n  }\n  @media (min-width: 1200px) {\n    margin-right: 0;\n    border-radius: 16px;\n    margin-right: 15px;\n    border-right: 1px solid #ffffff;\n  }\n"]))),y=b.ZP.button(l||(l=(0,u.Z)(["\n  background-color: transparent;\n  border: 2px solid #ffffff;\n  color: rgba(82, 85, 95, 0.7);\n  font-weight: 400;\n  border-radius: 0px 22px 22px 0px;\n  display: inline-block;\n  height: 50px;\n  width: 156px;\n\n  font-size: 12px;\n  line-height: 1.17;\n  letter-spacing: 0.02em;\n\n  text-transform: uppercase;\n  text-align: center;\n\n  @media screen and (min-width: 768px) {\n    border-radius: 16px;\n  }\n\n  :hover {\n    background-color: #ff751d;\n  }\n\n  ::placeholder {\n    font-weight: 700;\n    font-size: 12px;\n    line-height: 14px;\n    display: flex;\n    align-items: center;\n    letter-spacing: 0.02em;\n    text-transform: uppercase;\n    color: #000000;\n  }\n"]))),k=b.ZP.div(s||(s=(0,u.Z)(["\n  position: absolute;\n  bottom: 42px;\n  transform: translateY(calc(100% + 18px)) translateX(16%);\n  width: 292px;\n  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);\n  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);\n  padding: 30px;\n  border-radius: 30px;\n  z-index: 10;\n\n  ::before {\n    content: '';\n    position: absolute;\n    left: 16%;\n    top: -11px;\n    width: 0;\n    height: 0;\n    border-left: 11px solid transparent;\n    border-right: 11px solid transparent;\n    border-bottom: 11px solid #172d5d;\n  }\n"]))),P=b.ZP.p(c||(c=(0,u.Z)(["\n  font-size: 14px;\n  line-height: 20px;\n  color: #ffffff;\n  margin: 0px 0px 20px 0px;\n"]))),C=b.ZP.p(d||(d=(0,u.Z)(["\n  font-size: 12px;\n  line-height: 16px;\n  color: #ffffff;\n  margin: 0;\n"]))),T=((0,b.ZP)(m.rU)(p||(p=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n\n  text-decoration: none;\n  font-family: 'Roboto';\n\n  font-weight: 400;\n  font-size: 12px;\n  line-height: calc(14 / 12);\n\n  letter-spacing: 0.04;\n\n  color: rgba(82, 85, 95, 0.7);\n\n  @media screen and (min-width: 678px) {\n    position: absolute;\n    top: 57px;\n    right: 0;\n    z-index: 20;\n  }\n"]))),t(81980)),z=t(80184);function Y(){var n,e=(0,f.I0)(),t=(0,T.a)().balance,i=(0,h.useState)(null!==(n={balance:t})&&void 0!==n?n:0),o=(0,x.Z)(i,2),r=o[0],a=o[1],l=(0,h.useState)(!0),s=(0,x.Z)(l,2),c=s[0],d=s[1];(0,h.useEffect)((function(){a(t)}),[t]);return(0,z.jsxs)(Z,{children:[(0,z.jsx)(w,{children:"Balance:"}),(0,z.jsxs)(j,{autoComplete:"off",onSubmit:function(n){n.preventDefault(),e((0,g.Fg)({balance:n.target.elements.balance.value}))},children:[(0,z.jsx)(v,{type:"number",placeholder:"0.00 UAH",name:"balance",value:r,readOnly:t,pattern:"[0-9, UAH]*",disabled:t>0,onChange:function(n){n.target.value<0||a(n.target.value)}}),(0,z.jsx)(y,{type:"submit",disabled:t>0,children:"Confirm"})]}),!t>0&&(0,z.jsxs)(k,{active:c,setActive:d,children:[(0,z.jsx)(P,{children:"Hello! To get started, enter the current balance of your account!"}),(0,z.jsxs)(C,{children:["You can't spend money until you have it :"," ) "]})]})]})}},88846:function(n,e,t){t.d(e,{Z:function(){return C}});var i,o,r,a,l,s,c,d=t(39126),p=t(30168),x=t(16444),h=t(20183),f=x.ZP.li(i||(i=(0,p.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: 8px 0;\n  border-bottom: 1px solid ",";\n"])),h.Z.bgTableTitle),g=x.ZP.p(o||(o=(0,p.Z)(["\n  font-family: 'Roboto';\n  font-weight: 700;\n  font-size: 12px;\n  line-height: calc(14 / 12);\n  letter-spacing: 0.04em;\n\n  color: ",";\n"])),h.Z.textColor),u=x.ZP.div(r||(r=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n  margin-top: 4px;\n"]))),b=x.ZP.p(a||(a=(0,p.Z)(["\n  font-family: 'Roboto';\n  font-weight: 400;\n  font-size: 8px;\n  line-height: calc(9 / 8);\n  letter-spacing: 0.04em;\n\n  color: ",";\n"])),h.Z.textColor),m=x.ZP.div(l||(l=(0,p.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),Z=x.ZP.p(s||(s=(0,p.Z)(["\n  font-family: 'Roboto';\n\n  font-weight: 700;\n  font-size: 12px;\n  line-height: calc(14 / 12);\n  letter-spacing: 0.04em;\n\n  color: ",";\n"])),(function(n){return n.isExpenses?h.Z.redColor:h.Z.greenColor})),w=x.ZP.button(c||(c=(0,p.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border: none;\n  background-color: transparent;\n\n  cursor: pointer;\n"]))),j=t(59434),v=t(23553),y=t(46431),k=t.n(y),P=t(80184);function C(){var n=(0,j.v9)(v.kg);return(0,P.jsx)("ul",{children:n.map((function(n){var e=n._id,t=n.date,i=n.description,o=n.category,r=n.sum,a=n.type;return console.log("expenses"===a),(0,P.jsxs)(f,{children:[(0,P.jsxs)("div",{children:[(0,P.jsx)(g,{children:i}),(0,P.jsxs)(u,{children:[(0,P.jsx)(b,{children:(0,P.jsx)(k(),{format:"DD.MM.YYYY",children:t})}),(0,P.jsx)(b,{children:o})]})]}),(0,P.jsxs)(m,{children:[(0,P.jsx)(Z,{isExpenses:"expenses"===a,children:r}),(0,P.jsx)(w,{children:(0,P.jsx)(d.yvY,{width:15,height:18})})]})]},e)}))})}},43194:function(n,e,t){t.d(e,{Z:function(){return H}});var i,o,r,a,l,s,c=t(18231),d=t(30168),p=t(16444),x=t(20183),h=p.ZP.section(i||(i=(0,d.Z)(["\n  @media screen and (min-width: 768px) {\n    margin-top: 60px;\n    width: 704px;\n    padding: 24px 40px 42px 40px;\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    background-color: ",";\n    box-shadow: 0px 10px 60px rgba(170, 178, W197, 0.2);\n    border-top-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n    border-bottom-left-radius: 30px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: 1098px;\n    padding: 32px 32px;\n  }\n"])),x.Z.whiteColor),f=p.ZP.button(o||(o=(0,d.Z)(["\n  @media screen and (max-width: 767px) {\n    display: none;\n  }\n  @media screen and (min-width: 768px) {\n    width: 138px;\n    higth: 40px;\n    display: inline-block;\n    position: absolute;\n    top: -38px;\n    left: 0px;\n    padding: 10px 20px;\n    background-color: #fefefe;\n    color: ",";\n    font-weight: bold;\n    text-align: center;\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    border: transparent;\n    text-decoration: none;\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n    outline: none;\n  }\n"])),(function(n){return n.isActive?x.Z.activeColor:x.Z.blackColor})),g=p.ZP.button(r||(r=(0,d.Z)(["\n  @media screen and (max-width: 767px) {\n    display: none;\n  }\n  @media screen and (min-width: 768px) {\n    width: 138px;\n    higth: 40px;\n    display: inline-block;\n    position: absolute;\n    top: -38px;\n    left: 138px;\n    padding: 10px 20px;\n    background-color: #fefefe;\n    color: ",";\n    font-weight: bold;\n    text-align: center;\n    border-top-left-radius: 16px;\n    border-top-right-radius: 16px;\n    text-decoration: none;\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n    outline: none;\n    border: transparent;\n  }\n"])),(function(n){return n.isActive?x.Z.activeColor:x.Z.blackColor})),u=t(40187),b=t(39126),m=t(59434),Z=t(43255),w=p.ZP.tr(a||(a=(0,d.Z)(["\n  height: 40px;\n  border: 2px solid ",";\n"])),x.Z.bgTableTitle),j=p.ZP.td(l||(l=(0,d.Z)(["\n  height: 100%;\n  width: calc(746px / 5);\n\n  text-align: center;\n\n  font-family: 'Roboto';\n  font-weight: 400;\n  font-size: 12px;\n  line-height: calc(14 / 12);\n  letter-spacing: 0.04em;\n\n  color: ",";\n\n  :nth-child(4) {\n    font-weight: 700;\n    color: ",";\n  }\n  :nth-child(5) {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n"])),x.Z.textColor,(function(n){return n.isExpenses?x.Z.redColorExpenses:x.Z.greenColor})),v=p.ZP.button(s||(s=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 32px;\n  height: 32px;\n\n  border: none;\n  border-radius: 50%;\n\n  background-color: ",";\n  cursor: pointer;\n\n  :hover,\n  :focus {\n    background-color: ",";\n  }\n"])),x.Z.bgTableTitle,x.Z.activeColor),y=t(46431),k=t.n(y),P=t(80184);function C(n){var e=n.transaction,t=(0,m.I0)();return(0,P.jsxs)(w,{children:[(0,P.jsx)(j,{children:(0,P.jsx)(k(),{format:"DD.MM.YYYY",children:e.date})}),(0,P.jsx)(j,{children:e.description}),(0,P.jsx)(j,{children:e.category}),(0,P.jsxs)(j,{isExpenses:"expenses"===e.type.toLowerCase(),children:[e.sum," UAH."]}),(0,P.jsx)(j,{children:(0,P.jsx)(v,{onClick:function(){return t((0,Z.qL)(e._id))},children:(0,P.jsx)(b.yvY,{})})})]})}var T,z,Y,A,R,E=t(23553),D=p.ZP.div(T||(T=(0,d.Z)(["\n  overflow: hidden;\n\n  border-top-left-radius: 16px;\n  border-top-right-radius: 16px;\n\n  @media screen and (min-width: 1200px) {\n    width: 624px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: 746px;\n    height: 400px;\n  }\n"]))),I=p.ZP.table(z||(z=(0,d.Z)(["\n  width: 100%;\n\n  border: none;\n\n  border-spacing: 0;\n  border-collapse: collapse;\n\n  table-layout: fixed;\n\n  background-color: ",";\n\n  @media screen and (min-width: 1200px) {\n    width: 746px;\n    height: 400px;\n  }\n"])),x.Z.whiteColor),_=p.ZP.tr(Y||(Y=(0,d.Z)([""]))),S=p.ZP.th(A||(A=(0,d.Z)(["\n  width: calc(100% / 5);\n  height: 40px;\n\n  border-spacing: 0;\n\n  background-color: ",";\n  text-transform: uppercase;\n"])),x.Z.bgTableTitle),U=p.ZP.tbody(R||(R=(0,d.Z)(["\n  display: block;\n  overflow-y: auto;\n  width: 746px;\n  max-height: 400px;\n\n  ::-webkit-scrollbar {\n    width: 6px;\n    background-color: ",";\n  }\n\n  ::-webkit-scrollbar-thumb {\n    border-radius: 2px;\n\n    background-color: ",";\n  }\n"])),x.Z.bgTableTitle,x.Z.activeColor);function F(){var n=(0,m.v9)(E.kg);return(0,P.jsx)(D,{children:(0,P.jsxs)(I,{children:[(0,P.jsx)("thead",{children:(0,P.jsxs)(_,{children:[(0,P.jsx)(S,{children:"DATE"}),(0,P.jsx)(S,{children:"DESCRIPTION"}),(0,P.jsx)(S,{children:"category"}),(0,P.jsx)(S,{children:"sum"}),(0,P.jsx)(S,{})]})}),(0,P.jsx)(U,{children:n&&n.map((function(n){return(0,P.jsx)(C,{transaction:n},n._id)}))})]})})}var M=t(88846),O=t(17190);function H(){var n=(0,m.I0)(),e=(0,m.v9)(E.ki),t=(0,u.G)(),i=t.isTabletAndDesktop,o=t.isMobile;return(0,P.jsxs)(h,{children:[(0,P.jsx)(g,{isActive:"incomes"===e,onClick:function(){return n((0,O._R)("incomes"))},children:"Incomes"}),(0,P.jsx)(f,{isActive:"expenses"===e,onClick:function(){return n((0,O._R)("expenses"))},children:"Expenses"}),(0,P.jsx)(c.Z,{transactions:e}),i&&(0,P.jsx)(F,{}),o&&(0,P.jsx)(M.Z,{})]})}},31045:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var i,o,r=t(29439),a=t(72791),l=t(4548),s=t(43194),c=t(88846),d=t(30168),p=t(20183),x=t(16444),h=x.ZP.div(i||(i=(0,d.Z)(["\n  position: fixed;\n  bottom: 0px;\n"]))),f=x.ZP.button(o||(o=(0,d.Z)(["\n  width: calc(calc(100vw / 2) - 1px);\n  height: 53px;\n  border: none;\n\n  font-weight: 700;\n  font-size: 12px;\n  text-transform: uppercase;\n\n  color: ",";\n  background-color: ",";\n\n  transition: 0.2s ease-out;\n\n  &:first-child {\n    margin-right: 4px;\n  }\n\n  &:hover,\n  &:focus,\n  &.active {\n    color: ",";\n    background-color: ",";\n  }\n"])),p.Z.blackColor,p.Z.bgTableTitle,p.Z.whiteColor,p.Z.activeColor),g=t(80184);function u(){return(0,g.jsxs)(h,{children:[(0,g.jsx)(f,{onClick:function(){},name:"expenses",type:"submit",children:"Expenses"}),(0,g.jsx)(f,{onClick:function(){},name:"incomes",type:"submit",children:"Incomes"})]})}var b,m,Z,w,j,v,y,k=t(11087),P=t(58617),C=t(17425),T=x.ZP.div(b||(b=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 19px;\n"]))),z=x.ZP.div(m||(m=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - 96px);\n"]))),Y=(0,x.ZP)(k.rU)(Z||(Z=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 24px;\n\n  text-decoration: none;\n  font-family: 'Roboto';\n  text-transform: uppercase;\n\n  font-weight: 700;\n  font-size: 10px;\n  line-height: calc(14 / 12);\n  /* identical to box height */\n\n  letter-spacing: 0.02;\n\n  color: ",";\n"])),p.Z.blackColor),A=(0,x.ZP)(k.rU)(w||(w=(0,d.Z)(["\ndisplay: flex;\nalign-items: center;\nmargin-bottom: 35px;\nmargin-left: auto;\nmargin-right: auto;\n\ntext-decoration: none;\nfont-family: 'Roboto';\n\nfont-weight: 400;\nfont-size: 12px;\nline-height: calc(14 / 12);\n/* identical to box height */\n\nletter-spacing: 0.02;\n\ncolor: rgba(82, 85, 95, 0.7);"]))),R=(0,x.ZP)(P.siY)(j||(j=(0,d.Z)(["\n  margin-right: 6px;\n  // margin-left: 22px;\n  color: ",";\n"])),p.Z.activeColor),E=(0,x.ZP)(C.jwm)(v||(v=(0,d.Z)(["\n  margin-left: 20px;\n"]))),D=x.ZP.input(y||(y=(0,d.Z)(["\n  // margin-right: 16px;\n  height: 44px;\n  width: 119px;\n  border: 2px solid white;\n  outline: none;\n\n  background-color: ",";\n  color: #52555f;\n  text-align: center;\n"])),p.Z.whiteColor);function I(){var n=(0,a.useState)(!1),e=(0,r.Z)(n,2),t=e[0],i=e[1],o=(new Date).toISOString().slice(0,10);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(T,{children:[t?(0,g.jsx)(c.Z,{openTrForm:i}):(0,g.jsxs)(z,{children:[(0,g.jsxs)(Y,{to:"/transaction",children:[(0,g.jsx)(R,{size:18}),"TO TRANSACTION"]}),(0,g.jsxs)(A,{to:"/reports",children:["Reports",(0,g.jsx)(E,{size:14,color:" #52555F"})]}),(0,g.jsx)(l.Z,{}),(0,g.jsx)(D,{name:"date",type:"date",min:"1920-01-01",max:o})]}),(0,g.jsx)(s.Z,{})]}),(0,g.jsx)(u,{openTrForm:i})]})}}}]);
//# sourceMappingURL=45.259e9815.chunk.js.map