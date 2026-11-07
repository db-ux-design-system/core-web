import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BzIHEy3h.js";import{n as a,t as o}from"./pagination-B40I2VHr.js";var s=t({FourDigitPages:()=>d,ShortList:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBPagination/Collapsing`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:l()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},d={args:{label:`Collapsing pagination`,currentPage:5e3,totalCount:1e5,pageSize:10,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`Below the sm breakpoint the pages next to the current one give way - resize the window to see it`}),(0,c.jsx)(o,{...e})]})},f={args:{label:`Collapsing short list pagination`,currentPage:3,totalCount:50,pageSize:10,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(i,{icon:`none`,size:`small`,semantic:`informational`,children:`A list this short is already the collapsed layout, so it stays as it is`}),(0,c.jsx)(o,{...e})]})},p=[`FourDigitPages`,`ShortList`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Collapsing pagination",
    "currentPage": 5000,
    "totalCount": 100000,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Below the sm breakpoint the pages next to the current one
                    give way - resize the window to see it
                </DBInfotext><DBPagination {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Collapsing short list pagination",
    "currentPage": 3,
    "totalCount": 50,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    A list this short is already the collapsed layout, so it
                    stays as it is
                </DBInfotext><DBPagination {...properties} /></div>
}`,...f.parameters?.docs?.source}}}})))()}export{m as i,f as n,s as r,d as t};