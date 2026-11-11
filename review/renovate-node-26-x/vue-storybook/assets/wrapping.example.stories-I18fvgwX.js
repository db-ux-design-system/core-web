import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-oZ7Zd0Ru.js";import{n as i,t as a}from"./pagination-DHFnfdN8.js";var o=t({EnoughRoom:()=>l,NarrowColumn:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Wrapping`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Roomy pagination`,currentPage:12,totalCount:400,pageSize:10,siblingCount:3,boundaryCount:2,onPageChange:s(),default:``},render:e=>({components:{DBPagination:i,DBInfotext:r},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    siblingCount 3 and boundaryCount 2 - 13 controls, one row
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},u={args:{label:`Narrow column pagination`,currentPage:12,totalCount:400,pageSize:10,siblingCount:3,boundaryCount:2,onPageChange:s(),default:``},render:e=>({components:{DBPagination:i,DBInfotext:r},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    The same counts in a 320px column - the row wraps and no
                    page is dropped
                </DBInfotext><div  :style="{
  inlineSize: '320px'
}"  ><DBPagination v-bind="args"   >${e.default}</DBPagination></div></div>`})},d=[`EnoughRoom`,`NarrowColumn`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Roomy pagination",
    "currentPage": 12,
    "totalCount": 400,
    "pageSize": 10,
    "siblingCount": 3,
    "boundaryCount": 2,
    "onPageChange": fn(),
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBPagination,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    siblingCount 3 and boundaryCount 2 - 13 controls, one row
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Narrow column pagination",
    "currentPage": 12,
    "totalCount": 400,
    "pageSize": 10,
    "siblingCount": 3,
    "boundaryCount": 2,
    "onPageChange": fn(),
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBPagination,
      DBInfotext
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    The same counts in a 320px column - the row wraps and no
                    page is dropped
                </DBInfotext><div  :style="{
  inlineSize: '320px'
}"  ><DBPagination v-bind="args"   >\${args.default}</DBPagination></div></div>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}export{o as i,u as n,f as r,l as t};