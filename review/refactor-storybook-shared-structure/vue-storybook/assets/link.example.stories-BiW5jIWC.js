import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-CdRPxh-C.js";import{i,n as a,r as o,t as s}from"./pagination-CuLz7zoI.js";var c=t({LinkedPages:()=>d,__namedExportsOrder:()=>f,default:()=>u}),l,u,d,f;function p(){return(p=e((()=>{n(),o(),s(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBPagination/Link`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:l()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},d={args:{label:`Linked pagination`,currentPage:2,onPageChange:l(),default:`<DBPaginationItem><a href="#linked-page=1">1</a></DBPaginationItem
><DBPaginationItem><a href="#linked-page=2">2</a></DBPaginationItem
><DBPaginationItem><a href="#linked-page=3">3</a></DBPaginationItem>`},render:e=>({components:{DBPagination:a,DBInfotext:r,DBPaginationItem:i},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Links come from composition: pass an anchor per item and it
                    stays a working link. The pagination numbers the items and
                    reports the page.
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},f=[`LinkedPages`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Linked pagination",
    "currentPage": 2,
    "onPageChange": fn(),
    "default": \`<DBPaginationItem><a href="#linked-page=1">1</a></DBPaginationItem
><DBPaginationItem><a href="#linked-page=2">2</a></DBPaginationItem
><DBPaginationItem><a href="#linked-page=3">3</a></DBPaginationItem>\`
  },
  render: (args: any) => ({
    components: {
      DBPagination,
      DBInfotext,
      DBPaginationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Links come from composition: pass an anchor per item and it
                    stays a working link. The pagination numbers the items and
                    reports the page.
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}export{p as n,c as r,d as t};