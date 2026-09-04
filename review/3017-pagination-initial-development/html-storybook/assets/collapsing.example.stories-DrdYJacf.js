import{n as e}from"./iframe-fdiYlivs.js";import{n as t,t as n}from"./infotext-CYhxrd2p.js";import{n as r,t as i}from"./pagination-AIfnbfqB.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Collapsing`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Collapsing pagination`,currentPage:5e3,totalCount:1e5,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`Below the sm breakpoint the pages next to the current one give way - resize the window to see it`}),(0,o.jsx)(i,{...e})]})},u={args:{label:`Collapsing short list pagination`,currentPage:3,totalCount:50,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`A list this short is already the collapsed layout, so it stays as it is`}),(0,o.jsx)(i,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d=[`FourDigitPages`,`ShortList`]})))()}f();export{l as FourDigitPages,u as ShortList,d as __namedExportsOrder,c as default};