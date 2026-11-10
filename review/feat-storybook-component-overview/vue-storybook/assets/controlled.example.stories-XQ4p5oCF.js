import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./pagination-Dy-L209r.js";var i=t({Default:()=>s,__namedExportsOrder:()=>c,default:()=>o}),a,o,s,c;function l(){return(l=e((()=>{r(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPagination/Controlled`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:a()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},s={args:{currentPage:5,totalCount:100,pageSize:10,onPageChange:a(),default:``},render:e=>({components:{DBPagination:n},setup(){return{args:e}},template:`<div class="db-stack" data-gap="fixed-sm"   ><DBPagination v-bind="args"   >${e.default}</DBPagination>The parent keeps the current page in its own state</div>`})},c=[`Default`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}}})))()}export{i as n,l as r,s as t};