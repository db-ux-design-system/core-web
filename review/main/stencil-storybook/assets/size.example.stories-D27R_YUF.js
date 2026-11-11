import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BQPE-Z7b.js";import{n as i,t as a}from"./apply-web-component-args-B09ukjNm.js";var o=t({DefaultMedium:()=>l,Small:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Size`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Medium pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Medium</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},u={args:{label:`Small pagination`,size:`small`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">Small</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},d=[`DefaultMedium`,`Small`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}})))()}export{o as i,u as n,f as r,l as t};