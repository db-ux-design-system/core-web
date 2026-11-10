import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-BEdmdqT_.js";import{n as i,t as a}from"./apply-web-component-args-CDzlxrdt.js";var o=t({BoundaryCount2:()=>f,DefaultSiblingAndBoundary1:()=>u,SiblingCount2:()=>d,WithoutTruncation:()=>l,__namedExportsOrder:()=>p,default:()=>c}),s,c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Truncation`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Untruncated pagination`,currentPage:3,totalCount:50,pageSize:10,onPageChange:s()},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">Without truncation - all 5 pages fit</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},u={args:{label:`Default truncation pagination`,currentPage:10,totalCount:200,pageSize:10,onPageChange:s()},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">(Default) siblingCount 1, boundaryCount 1</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},d={args:{label:`Two siblings pagination`,currentPage:10,totalCount:200,pageSize:10,siblingCount:2,onPageChange:s()},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">siblingCount 2 - wider window around the current page</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},f={args:{label:`Two boundaries pagination`,currentPage:10,totalCount:200,pageSize:10,boundaryCount:2,onPageChange:s()},render:({children:e,...t})=>n`<div><db-infotext icon="none" size="small" semantic="informational">boundaryCount 2 - two pages pinned at each end</db-infotext><db-pagination ${i(t)}></db-pagination></div>`},p=[`WithoutTruncation`,`DefaultSiblingAndBoundary1`,`SiblingCount2`,`BoundaryCount2`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Untruncated pagination",
    "currentPage": 3,
    "totalCount": 50,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">Without truncation - all 5 pages fit</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Default truncation pagination",
    "currentPage": 10,
    "totalCount": 200,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">(Default) siblingCount 1, boundaryCount 1</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Two siblings pagination",
    "currentPage": 10,
    "totalCount": 200,
    "pageSize": 10,
    "siblingCount": 2,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">siblingCount 2 - wider window around the current page</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Two boundaries pagination",
    "currentPage": 10,
    "totalCount": 200,
    "pageSize": 10,
    "boundaryCount": 2,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div><db-infotext icon="none" size="small" semantic="informational">boundaryCount 2 - two pages pinned at each end</db-infotext><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...f.parameters?.docs?.source}}}})))()}export{m as a,l as i,u as n,o,d as r,f as t};