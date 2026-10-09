import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{n as r,t as i}from"./apply-web-component-args-B1PNRnpa.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{n(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPagination/Position`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:a()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},s={args:{label:`Start position pagination`,currentPage:1,totalCount:100,pageSize:10,onPageChange:a()},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">(Default) Start - previous is disabled</db-infotext><db-pagination ${r(n)}></db-pagination></div>`},c={args:{label:`Center position pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:a()},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">Center - truncated on both sides</db-infotext><db-pagination ${r(n)}></db-pagination></div>`},l={args:{label:`End position pagination`,currentPage:10,totalCount:100,pageSize:10,onPageChange:a()},render:({children:e,...n})=>t`<div><db-infotext icon="none" size="small" semantic="informational">End - next is disabled</db-infotext><db-pagination ${r(n)}></db-pagination></div>`},u=[`DefaultStart`,`Center`,`End`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as Center,s as DefaultStart,l as End,u as __namedExportsOrder,o as default};