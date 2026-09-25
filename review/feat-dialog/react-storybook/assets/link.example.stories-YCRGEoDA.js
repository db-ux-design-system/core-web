import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-CNf3jpZi.js";import{i,n as a,r as o,t as s}from"./pagination-B7gpWjYX.js";var c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),a(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBPagination/Link`,component:s,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:l()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},d={args:{label:`Linked pagination`,currentPage:2,onPageChange:l(),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{children:(0,c.jsx)(`a`,{href:`#linked-page=1`,children:`1`})}),(0,c.jsx)(o,{children:(0,c.jsx)(`a`,{href:`#linked-page=2`,children:`2`})}),(0,c.jsx)(o,{children:(0,c.jsx)(`a`,{href:`#linked-page=3`,children:`3`})})]})},render:e=>(0,c.jsxs)(`div`,{className:`fit-content-container`,children:[(0,c.jsx)(r,{icon:`none`,size:`small`,semantic:`informational`,children:`Links come from composition: pass an anchor per item and it stays a working link. The pagination numbers the items and reports the page.`}),(0,c.jsx)(s,{...e})]})},f=[`LinkedPages`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Linked pagination",
    "currentPage": 2,
    "onPageChange": fn(),
    "children": <><DBPaginationItem><a href="#linked-page=1">1</a></DBPaginationItem><DBPaginationItem><a href="#linked-page=2">2</a></DBPaginationItem><DBPaginationItem><a href="#linked-page=3">3</a></DBPaginationItem></>
  },
  render: (properties: any) => <div className="fit-content-container"><DBInfotext icon="none" size="small" semantic="informational">
                    Links come from composition: pass an anchor per item and it
                    stays a working link. The pagination numbers the items and
                    reports the page.
                </DBInfotext><DBPagination {...properties} /></div>
}`,...d.parameters?.docs?.source}}}})))()}p();export{d as LinkedPages,f as __namedExportsOrder,u as default};