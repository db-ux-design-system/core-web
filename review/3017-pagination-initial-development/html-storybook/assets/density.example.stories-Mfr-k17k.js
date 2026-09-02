import{n as e}from"./iframe-B-JW66Oo.js";import{n as t,t as n}from"./infotext-CTRwIFzy.js";import{n as r,t as i}from"./pagination-DlfuU1t4.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d,f;function p(){return(p=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Functional pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,"data-density":`functional`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`Functional`}),(0,o.jsx)(i,{...e})]})},u={args:{label:`Regular pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,"data-density":`regular`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) Regular`}),(0,o.jsx)(i,{...e})]})},d={args:{label:`Expressive pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,"data-density":`expressive`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`Expressive`}),(0,o.jsx)(i,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Functional`,`DefaultRegular`,`Expressive`]})))()}p();export{u as DefaultRegular,d as Expressive,l as Functional,f as __namedExportsOrder,c as default};