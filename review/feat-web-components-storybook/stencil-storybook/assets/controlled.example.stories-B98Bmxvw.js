import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c;function l(){return(l=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPagination/Controlled`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:a()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},s={args:{currentPage:5,totalCount:100,pageSize:10,onPageChange:a()},render:({children:e,...n})=>t`<div data-gap="fixed-sm"><db-pagination ${r(n)}></db-pagination>The parent keeps the current page in its own state</div>`},c=[`Default`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-gap="fixed-sm"><db-pagination \${spreadArgs(args)}></db-pagination>The parent keeps the current page in its own state</div>\`
}`,...s.parameters?.docs?.source}}}})))()}l();export{s as Default,c as __namedExportsOrder,o as default};