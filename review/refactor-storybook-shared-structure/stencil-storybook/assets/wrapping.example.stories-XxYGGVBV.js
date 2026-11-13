import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BAEUE7d2.js";import{n as i,t as a}from"./apply-web-component-args-D3zo3NLI.js";var o=t({EnoughRoom:()=>l,NarrowColumn:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Wrapping`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Roomy pagination`,currentPage:12,totalCount:400,pageSize:10,siblingCount:3,boundaryCount:2,onPageChange:s()},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">siblingCount 3 and boundaryCount 2 - 13 controls, one row</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},u={args:{label:`Narrow column pagination`,currentPage:12,totalCount:400,pageSize:10,siblingCount:3,boundaryCount:2,onPageChange:s()},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">The same counts in a 320px column - the row wraps and no page is dropped</db-infotext><div style="inline-size: 320px"><db-pagination ${i(t)}></db-pagination></div></div>`},d=[`EnoughRoom`,`NarrowColumn`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">The same counts in a 320px column - the row wraps and no page is dropped</db-infotext><div style="inline-size: 320px"><db-pagination \${spreadArgs(args)}></db-pagination></div></div>\`
}`,...u.parameters?.docs?.source}}}})))()}export{o as i,u as n,f as r,l as t};