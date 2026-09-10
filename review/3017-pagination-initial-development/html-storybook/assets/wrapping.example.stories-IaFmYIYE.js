import{n as e}from"./iframe-DyJS_vws.js";import{n as t,t as n}from"./infotext-CS9rZLSt.js";import{n as r,t as i}from"./pagination-8ZlFJ8HI.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Wrapping`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Roomy pagination`,currentPage:12,totalCount:400,pageSize:10,siblingCount:3,boundaryCount:2,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`siblingCount 3 and boundaryCount 2 - 13 controls, one row`}),(0,o.jsx)(i,{...e})]})},u={args:{label:`Narrow column pagination`,currentPage:12,totalCount:400,pageSize:10,siblingCount:3,boundaryCount:2,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`The same counts in a 320px column - the row wraps and no page is dropped`}),(0,o.jsx)(`div`,{style:{inlineSize:`320px`},children:(0,o.jsx)(i,{...e})})]})},d=[`EnoughRoom`,`NarrowColumn`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Roomy pagination",
    "currentPage": 12,
    "totalCount": 400,
    "pageSize": 10,
    "siblingCount": 3,
    "boundaryCount": 2,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    siblingCount 3 and boundaryCount 2 - 13 controls, one row
                </DBInfotext><DBPagination {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Narrow column pagination",
    "currentPage": 12,
    "totalCount": 400,
    "pageSize": 10,
    "siblingCount": 3,
    "boundaryCount": 2,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    The same counts in a 320px column - the row wraps and no
                    page is dropped
                </DBInfotext><div style={{
      inlineSize: '320px'
    }}><DBPagination {...properties} /></div></div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as EnoughRoom,u as NarrowColumn,d as __namedExportsOrder,c as default};