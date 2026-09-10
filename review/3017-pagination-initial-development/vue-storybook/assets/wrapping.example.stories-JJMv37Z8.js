import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-Ce9HBl2q.js";import{n as r,t as i}from"./pagination-DDo4pdc9.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPagination/Wrapping`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:a()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},s={args:{label:`Roomy pagination`,currentPage:12,totalCount:400,pageSize:10,siblingCount:3,boundaryCount:2,onPageChange:a(),default:``},render:e=>({components:{DBPagination:r,DBInfotext:n},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    siblingCount 3 and boundaryCount 2 - 13 controls, one row
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},c={args:{label:`Narrow column pagination`,currentPage:12,totalCount:400,pageSize:10,siblingCount:3,boundaryCount:2,onPageChange:a(),default:``},render:e=>({components:{DBPagination:r,DBInfotext:n},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    The same counts in a 320px column - the row wraps and no
                    page is dropped
                </DBInfotext><div  :style="{
  inlineSize: '320px'
}"  ><DBPagination v-bind="args"   >${e.default}</DBPagination></div></div>`})},l=[`EnoughRoom`,`NarrowColumn`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as EnoughRoom,c as NarrowColumn,l as __namedExportsOrder,o as default};