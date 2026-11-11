import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-Pj-9eN3S.js";import{n as i,t as a}from"./pagination-BlyCLvg2.js";var o=t({Center:()=>u,DefaultStart:()=>l,End:()=>d,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Position`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Start position pagination`,currentPage:1,totalCount:100,pageSize:10,onPageChange:s(),default:``},render:e=>({components:{DBPagination:i,DBInfotext:r},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    (Default) Start - previous is disabled
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},u={args:{label:`Center position pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s(),default:``},render:e=>({components:{DBPagination:i,DBInfotext:r},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Center - truncated on both sides
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},d={args:{label:`End position pagination`,currentPage:10,totalCount:100,pageSize:10,onPageChange:s(),default:``},render:e=>({components:{DBPagination:i,DBInfotext:r},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    End - next is disabled
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},f=[`DefaultStart`,`Center`,`End`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}}})))()}export{o as a,p as i,l as n,d as r,u as t};