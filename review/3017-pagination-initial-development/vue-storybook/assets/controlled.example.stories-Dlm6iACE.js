import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./pagination-DgUoimcc.js";var r,i,a,o;function s(){return(s=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBPagination/Controlled`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:r()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},a={args:{currentPage:5,totalCount:100,pageSize:10,onPageChange:r(),default:``},render:e=>({components:{DBPagination:t},setup(){return{args:e}},template:`<div class="db-stack" data-gap="fixed-sm"   ><DBPagination v-bind="args"   >${e.default}</DBPagination>The parent keeps the current page in its own state</div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn(),
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBPagination
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="db-stack" data-gap="fixed-sm"   ><DBPagination v-bind="args"   >\${args.default}</DBPagination>The parent keeps the current page in its own state</div>\`
  })
}`,...a.parameters?.docs?.source}}},o=[`Default`]})))()}s();export{a as Default,o as __namedExportsOrder,i as default};