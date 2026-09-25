import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-yXCyEO4m.js";import{i as r,n as i,r as a,t as o}from"./pagination-DeHmKDL1.js";var s,c,l,u;function d(){return(d=e((()=>{t(),a(),o(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Link`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Linked pagination`,currentPage:2,onPageChange:s(),default:`<DBPaginationItem><a href="#linked-page=1">1</a></DBPaginationItem
><DBPaginationItem><a href="#linked-page=2">2</a></DBPaginationItem
><DBPaginationItem><a href="#linked-page=3">3</a></DBPaginationItem>`},render:e=>({components:{DBPagination:i,DBInfotext:n,DBPaginationItem:r},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Links come from composition: pass an anchor per item and it
                    stays a working link. The pagination numbers the items and
                    reports the page.
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},u=[`LinkedPages`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}}})))()}d();export{l as LinkedPages,u as __namedExportsOrder,c as default};