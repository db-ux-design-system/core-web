import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-ylkutcto.js";import{n as i,t as a}from"./pagination-BIdjysh1.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o=t(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Position`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Start position pagination`,currentPage:1,totalCount:100,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(r,{icon:`none`,size:`small`,semantic:`informational`,children:`(Default) Start - previous is disabled`}),(0,o.jsx)(a,{...e})]})},u={args:{label:`Center position pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(r,{icon:`none`,size:`small`,semantic:`informational`,children:`Center - truncated on both sides`}),(0,o.jsx)(a,{...e})]})},d={args:{label:`End position pagination`,currentPage:10,totalCount:100,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(r,{icon:`none`,size:`small`,semantic:`informational`,children:`End - next is disabled`}),(0,o.jsx)(a,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`DefaultStart`,`Center`,`End`]})))()}p();export{u as Center,l as DefaultStart,d as End,f as __namedExportsOrder,c as default};