import{n as e}from"./iframe-DKhvrPp9.js";import{n as t,t as n}from"./infotext-DmIJKHLj.js";import{n as r,t as i}from"./pagination-Dv8EzNKW.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Link`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Linked pagination`,hrefPattern:`#linked-page={page}`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`hrefPattern turns the pages into anchors - deep linkable and usable without JavaScript`}),(0,o.jsx)(i,{...e})]})},u={args:{label:`Linked boundary pagination`,hrefPattern:`#boundary-page={page}`,currentPage:1,totalCount:100,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{className:`fit-content-container`,children:[(0,o.jsx)(n,{icon:`none`,size:`small`,semantic:`informational`,children:`At the boundaries previous and next stay disabled buttons, because there is no page to link to`}),(0,o.jsx)(i,{...e})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Linked pagination",
    "hrefPattern": "#linked-page={page}",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    hrefPattern turns the pages into anchors - deep linkable and
                    usable without JavaScript
                </DBInfotext><DBPagination {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Linked boundary pagination",
    "hrefPattern": "#boundary-page={page}",
    "currentPage": 1,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    At the boundaries previous and next stay disabled buttons,
                    because there is no page to link to
                </DBInfotext><DBPagination {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d=[`LinkedPages`,`FirstPage`]})))()}f();export{u as FirstPage,l as LinkedPages,d as __namedExportsOrder,c as default};