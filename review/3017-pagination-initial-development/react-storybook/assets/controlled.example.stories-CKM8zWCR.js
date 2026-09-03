import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./pagination-gauVYO5Y.js";var i,a,o,s,c;function l(){return(l=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPagination/Controlled`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:a()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},s={args:{currentPage:5,totalCount:100,pageSize:10,onPageChange:a()},render:e=>(0,i.jsxs)(`div`,{className:`db-stack`,"data-gap":`fixed-sm`,children:[(0,i.jsx)(r,{...e}),`The parent keeps the current page in its own state`]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div className="db-stack" data-gap="fixed-sm"><DBPagination {...properties} />The parent keeps the current page in its own state</div>
}`,...s.parameters?.docs?.source}}},c=[`Default`]})))()}l();export{s as Default,c as __namedExportsOrder,o as default};