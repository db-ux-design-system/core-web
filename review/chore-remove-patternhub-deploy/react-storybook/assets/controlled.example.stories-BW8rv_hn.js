import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./pagination-Coztuwb5.js";var a=t({Default:()=>l,__namedExportsOrder:()=>u,default:()=>c}),o,s,c,l,u;function d(){return(d=e((()=>{r(),o=n(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Controlled`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`db-stack`,"data-gap":`fixed-sm`,children:[(0,o.jsx)(i,{...e}),`The parent keeps the current page in its own state`]})},u=[`Default`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="db-stack" data-gap="fixed-sm"><DBPagination {...properties} />The parent keeps the current page in its own state</div>
}`,...l.parameters?.docs?.source}}}})))()}export{a as n,d as r,l as t};