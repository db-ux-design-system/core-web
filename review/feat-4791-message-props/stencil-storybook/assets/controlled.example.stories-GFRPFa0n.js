import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-DUBFSgxg.js";import{n as i,t as a}from"./apply-web-component-args-Dyea0pIv.js";var o=t({Default:()=>l,__namedExportsOrder:()=>u,default:()=>c}),s,c,l,u;function d(){return(d=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Controlled`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:({children:e,...t})=>n`<div data-gap="fixed-sm"><db-pagination ${i(t)}></db-pagination><div>The parent keeps the current page in its own state</div></div>`},u=[`Default`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-gap="fixed-sm"><db-pagination \${spreadArgs(args)}></db-pagination><div>The parent keeps the current page in its own state</div></div>\`
}`,...l.parameters?.docs?.source}}}})))()}export{o as n,d as r,l as t};