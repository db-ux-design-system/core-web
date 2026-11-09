import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-LYtL2xrD.js";import{n as i,t as a}from"./apply-web-component-args-QiJXFgM3.js";var o=t({Center:()=>u,DefaultStart:()=>l,End:()=>d,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Position`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Start position pagination`,currentPage:1,totalCount:100,pageSize:10,onPageChange:s()},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Start - previous is disabled</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},u={args:{label:`Center position pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">Center - truncated on both sides</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},d={args:{label:`End position pagination`,currentPage:10,totalCount:100,pageSize:10,onPageChange:s()},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">End - next is disabled</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},f=[`DefaultStart`,`Center`,`End`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Start position pagination",
    "currentPage": 1,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Start - previous is disabled</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Center position pagination",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">Center - truncated on both sides</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "End position pagination",
    "currentPage": 10,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">End - next is disabled</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...d.parameters?.docs?.source}}}})))()}export{o as a,p as i,l as n,d as r,u as t};