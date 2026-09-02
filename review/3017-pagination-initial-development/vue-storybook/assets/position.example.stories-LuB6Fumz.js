import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-CpYdN_dC.js";import{n as r,t as i}from"./pagination-C7aWoPio.js";var a,o,s,c,l,u;function d(){return(d=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPagination/Position`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:a()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},s={args:{label:`Start position pagination`,currentPage:1,totalCount:100,pageSize:10,onPageChange:a(),default:``},render:e=>({components:{DBPagination:r,DBInfotext:n},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    (Default) Start - previous is disabled
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},c={args:{label:`Center position pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:a(),default:``},render:e=>({components:{DBPagination:r,DBInfotext:n},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Center - truncated on both sides
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},l={args:{label:`End position pagination`,currentPage:10,totalCount:100,pageSize:10,onPageChange:a(),default:``},render:e=>({components:{DBPagination:r,DBInfotext:n},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    End - next is disabled
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Start position pagination",
    "currentPage": 1,
    "totalCount": 100,
    "pageSize": 10,
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
                    (Default) Start - previous is disabled
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Center position pagination",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
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
                    Center - truncated on both sides
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "End position pagination",
    "currentPage": 10,
    "totalCount": 100,
    "pageSize": 10,
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
                    End - next is disabled
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...l.parameters?.docs?.source}}},u=[`DefaultStart`,`Center`,`End`]})))()}d();export{c as Center,s as DefaultStart,l as End,u as __namedExportsOrder,o as default};