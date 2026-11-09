import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-WDQ2nZ8t.js";import{n as i,t as a}from"./apply-web-component-args-CAS3eq59.js";var o=t({DefaultRegular:()=>u,Expressive:()=>d,Functional:()=>l,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Density`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Functional pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:({children:e,...t})=>n`<div data-density="functional"><db-infotext icon="none" size="small" semantic="informational">Functional</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},u={args:{label:`Regular pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:({children:e,...t})=>n`<div data-density="regular"><db-infotext icon="none" size="small" semantic="informational">(Default) Regular</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},d={args:{label:`Expressive pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:({children:e,...t})=>n`<div data-density="expressive"><db-infotext icon="none" size="small" semantic="informational">Expressive</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Functional pagination",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="functional"><db-infotext icon="none" size="small" semantic="informational">Functional</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Regular pagination",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="regular"><db-infotext icon="none" size="small" semantic="informational">(Default) Regular</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Expressive pagination",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-density="expressive"><db-infotext icon="none" size="small" semantic="informational">Expressive</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,d as n,l as r,u as t};