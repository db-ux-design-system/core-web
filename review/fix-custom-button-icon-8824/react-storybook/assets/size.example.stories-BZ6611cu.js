import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BrqREugs.js";import{n as a,t as o}from"./pagination-B40I2VHr.js";var s=t({DefaultMedium:()=>d,Small:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBPagination/Size`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:l()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},d={args:{label:`Medium pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) Medium`}),(0,c.jsx)(o,{...e})]})},f={args:{label:`Small pagination`,size:`small`,currentPage:5,totalCount:100,pageSize:10,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Small`}),(0,c.jsx)(o,{...e})]})},p=[`DefaultMedium`,`Small`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}}})))()}export{s as i,f as n,m as r,d as t};