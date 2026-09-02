import{n as e}from"./iframe-B-JW66Oo.js";import{n as t,t as n}from"./infotext-CTRwIFzy.js";import{n as r,t as i}from"./pagination-DlfuU1t4.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d,f,p;function m(){return(m=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Truncation`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Untruncated pagination`,currentPage:3,totalCount:50,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`Without truncation - all 5 pages fit`}),(0,o.jsx)(i,{...e})]})},u={args:{label:`Default truncation pagination`,currentPage:10,totalCount:200,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) siblingCount 1, boundaryCount 1`}),(0,o.jsx)(i,{...e})]})},d={args:{label:`Two siblings pagination`,currentPage:10,totalCount:200,pageSize:10,siblingCount:2,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`siblingCount 2 - wider window around the current page`}),(0,o.jsx)(i,{...e})]})},f={args:{label:`Two boundaries pagination`,currentPage:10,totalCount:200,pageSize:10,boundaryCount:2,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`boundaryCount 2 - two pages pinned at each end`}),(0,o.jsx)(i,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Untruncated pagination",
    "currentPage": 3,
    "totalCount": 50,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Without truncation - all 5 pages fit
                </DBInfotext><DBPagination {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Default truncation pagination",
    "currentPage": 10,
    "totalCount": 200,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    (Default) siblingCount 1, boundaryCount 1
                </DBInfotext><DBPagination {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Two siblings pagination",
    "currentPage": 10,
    "totalCount": 200,
    "pageSize": 10,
    "siblingCount": 2,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    siblingCount 2 - wider window around the current page
                </DBInfotext><DBPagination {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Two boundaries pagination",
    "currentPage": 10,
    "totalCount": 200,
    "pageSize": 10,
    "boundaryCount": 2,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    boundaryCount 2 - two pages pinned at each end
                </DBInfotext><DBPagination {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p=[`WithoutTruncation`,`DefaultSiblingAndBoundary1`,`SiblingCount2`,`BoundaryCount2`]})))()}m();export{f as BoundaryCount2,u as DefaultSiblingAndBoundary1,d as SiblingCount2,l as WithoutTruncation,p as __namedExportsOrder,c as default};