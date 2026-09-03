import{n as e}from"./iframe-CY4Sna6Q.js";import{n as t,t as n}from"./infotext-DlSyU9m6.js";import{n as r,t as i}from"./pagination-Cw6nRE0E.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Size`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Medium pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) Medium`}),(0,o.jsx)(i,{...e})]})},u={args:{label:`Small pagination`,size:`small`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`Small`}),(0,o.jsx)(i,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Medium pagination",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    (Default) Medium
                </DBInfotext><DBPagination {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Small pagination",
    "size": "small",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Small
                </DBInfotext><DBPagination {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`DefaultMedium`,`Small`]})))()}f();export{l as DefaultMedium,u as Small,d as __namedExportsOrder,c as default};