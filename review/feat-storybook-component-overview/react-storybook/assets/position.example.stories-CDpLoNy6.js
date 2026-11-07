import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BzIHEy3h.js";import{n as a,t as o}from"./pagination-B40I2VHr.js";var s=t({Center:()=>f,DefaultStart:()=>d,End:()=>p,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBPagination/Position`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:l()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},d={args:{label:`Start position pagination`,currentPage:1,totalCount:100,pageSize:10,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) Start - previous is disabled`}),(0,c.jsx)(o,{...e})]})},f={args:{label:`Center position pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Center - truncated on both sides`}),(0,c.jsx)(o,{...e})]})},p={args:{label:`End position pagination`,currentPage:10,totalCount:100,pageSize:10,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`End - next is disabled`}),(0,c.jsx)(o,{...e})]})},m=[`DefaultStart`,`Center`,`End`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Start position pagination",
    "currentPage": 1,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    (Default) Start - previous is disabled
                </DBInfotext><DBPagination {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Center position pagination",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Center - truncated on both sides
                </DBInfotext><DBPagination {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "End position pagination",
    "currentPage": 10,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    End - next is disabled
                </DBInfotext><DBPagination {...properties} /></div>
}`,...p.parameters?.docs?.source}}}})))()}export{s as a,h as i,d as n,p as r,f as t};