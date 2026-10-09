import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c,l;function u(){return(u=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPagination/Wrapping`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:a()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},s={args:{label:`Roomy pagination`,currentPage:12,totalCount:400,pageSize:10,siblingCount:3,boundaryCount:2,onPageChange:a()},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">siblingCount 3 and boundaryCount 2 - 13 controls, one row</db-infotext><db-pagination ${r(n)}></db-pagination></div>`},c={args:{label:`Narrow column pagination`,currentPage:12,totalCount:400,pageSize:10,siblingCount:3,boundaryCount:2,onPageChange:a()},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">The same counts in a 320px column - the row wraps and no page is dropped</db-infotext><div><db-pagination ${r(n)}></db-pagination></div></div>`},l=[`EnoughRoom`,`NarrowColumn`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Roomy pagination",
    "currentPage": 12,
    "totalCount": 400,
    "pageSize": 10,
    "siblingCount": 3,
    "boundaryCount": 2,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">siblingCount 3 and boundaryCount 2 - 13 controls, one row</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Narrow column pagination",
    "currentPage": 12,
    "totalCount": 400,
    "pageSize": 10,
    "siblingCount": 3,
    "boundaryCount": 2,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">The same counts in a 320px column - the row wraps and no page is dropped</db-infotext><div><db-pagination \${spreadArgs(args)}></db-pagination></div></div>\`
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as EnoughRoom,c as NarrowColumn,l as __namedExportsOrder,o as default};