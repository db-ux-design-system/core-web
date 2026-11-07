import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BzIHEy3h.js";import{n as a,t as o}from"./pagination-B40I2VHr.js";var s=t({DefaultRegular:()=>f,Expressive:()=>p,Functional:()=>d,__namedExportsOrder:()=>m,default:()=>u}),c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBPagination/Density`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:l()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},d={args:{label:`Functional pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,"data-density":`functional`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Functional`}),(0,c.jsx)(o,{...e})]})},f={args:{label:`Regular pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,"data-density":`regular`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) Regular`}),(0,c.jsx)(o,{...e})]})},p={args:{label:`Expressive pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,"data-density":`expressive`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Expressive`}),(0,c.jsx)(o,{...e})]})},m=[`Functional`,`DefaultRegular`,`Expressive`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Functional pagination",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container" data-density="functional"><DBInfotext icon="none" size="small" semantic="informational">
                    Functional
                </DBInfotext><DBPagination {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Regular pagination",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container" data-density="regular"><DBInfotext icon="none" size="small" semantic="informational">
                    (Default) Regular
                </DBInfotext><DBPagination {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Expressive pagination",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container" data-density="expressive"><DBInfotext icon="none" size="small" semantic="informational">
                    Expressive
                </DBInfotext><DBPagination {...properties} /></div>
}`,...p.parameters?.docs?.source}}}})))()}export{h as a,s as i,p as n,d as r,f as t};