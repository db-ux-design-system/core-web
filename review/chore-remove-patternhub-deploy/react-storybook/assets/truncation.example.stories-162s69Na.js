import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-DWUtRaHE.js";import{n as a,t as o}from"./pagination-Coztuwb5.js";var s=t({BoundaryCount2:()=>m,DefaultSiblingAndBoundary1:()=>f,SiblingCount2:()=>p,WithoutTruncation:()=>d,__namedExportsOrder:()=>h,default:()=>u}),c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBPagination/Truncation`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:l()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},d={args:{label:`Untruncated pagination`,currentPage:3,totalCount:50,pageSize:10,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Without truncation - all 5 pages fit`}),(0,c.jsx)(o,{...e})]})},f={args:{label:`Default truncation pagination`,currentPage:10,totalCount:200,pageSize:10,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) siblingCount 1, boundaryCount 1`}),(0,c.jsx)(o,{...e})]})},p={args:{label:`Two siblings pagination`,currentPage:10,totalCount:200,pageSize:10,siblingCount:2,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`siblingCount 2 - wider window around the current page`}),(0,c.jsx)(o,{...e})]})},m={args:{label:`Two boundaries pagination`,currentPage:10,totalCount:200,pageSize:10,boundaryCount:2,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`boundaryCount 2 - two pages pinned at each end`}),(0,c.jsx)(o,{...e})]})},h=[`WithoutTruncation`,`DefaultSiblingAndBoundary1`,`SiblingCount2`,`BoundaryCount2`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}}})))()}export{g as a,d as i,f as n,s as o,p as r,m as t};