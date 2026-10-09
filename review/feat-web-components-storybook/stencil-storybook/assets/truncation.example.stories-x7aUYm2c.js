import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPagination/Truncation`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:a()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},s={args:{label:`Untruncated pagination`,currentPage:3,totalCount:50,pageSize:10,onPageChange:a()},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">Without truncation - all 5 pages fit</db-infotext><db-pagination ${r(n)}></db-pagination></div>`},c={args:{label:`Default truncation pagination`,currentPage:10,totalCount:200,pageSize:10,onPageChange:a()},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">(Default) siblingCount 1, boundaryCount 1</db-infotext><db-pagination ${r(n)}></db-pagination></div>`},l={args:{label:`Two siblings pagination`,currentPage:10,totalCount:200,pageSize:10,siblingCount:2,onPageChange:a()},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">siblingCount 2 - wider window around the current page</db-infotext><db-pagination ${r(n)}></db-pagination></div>`},u={args:{label:`Two boundaries pagination`,currentPage:10,totalCount:200,pageSize:10,boundaryCount:2,onPageChange:a()},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">boundaryCount 2 - two pages pinned at each end</db-infotext><db-pagination ${r(n)}></db-pagination></div>`},d=[`WithoutTruncation`,`DefaultSiblingAndBoundary1`,`SiblingCount2`,`BoundaryCount2`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as BoundaryCount2,c as DefaultSiblingAndBoundary1,l as SiblingCount2,s as WithoutTruncation,d as __namedExportsOrder,o as default};