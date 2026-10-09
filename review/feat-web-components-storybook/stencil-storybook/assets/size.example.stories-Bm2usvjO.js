import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c,l;function u(){return(u=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPagination/Size`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:a()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},s={args:{label:`Medium pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:a()},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Medium</db-infotext><db-pagination ${r(n)}></db-pagination></div>`},c={args:{label:`Small pagination`,size:`small`,currentPage:5,totalCount:100,pageSize:10,onPageChange:a()},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">Small</db-infotext><db-pagination ${r(n)}></db-pagination></div>`},l=[`DefaultMedium`,`Small`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Medium pagination",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Medium</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Small pagination",
    "size": "small",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">Small</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as DefaultMedium,c as Small,l as __namedExportsOrder,o as default};