import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BqvJLakp.js";import{n as i,t as a}from"./apply-web-component-args-BtUnDguQ.js";var o=t({FourDigitPages:()=>l,ShortList:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Collapsing`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Collapsing pagination`,currentPage:5e3,totalCount:1e5,pageSize:10,onPageChange:s()},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">Below the sm breakpoint the pages next to the current one give way - resize the window to see it</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},u={args:{label:`Collapsing short list pagination`,currentPage:3,totalCount:50,pageSize:10,onPageChange:s()},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">A list this short is already the collapsed layout, so it stays as it is</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},d=[`FourDigitPages`,`ShortList`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Collapsing pagination",
    "currentPage": 5000,
    "totalCount": 100000,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">Below the sm breakpoint the pages next to the current one give way - resize the window to see it</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Collapsing short list pagination",
    "currentPage": 3,
    "totalCount": 50,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">A list this short is already the collapsed layout, so it stays as it is</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...u.parameters?.docs?.source}}}})))()}export{f as i,u as n,o as r,l as t};