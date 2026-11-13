import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-nUvz-XS8.js";import{n as i,t as a}from"./pagination-BOj4UUKc.js";var o=t({DefaultRegular:()=>u,Expressive:()=>d,Functional:()=>l,__namedExportsOrder:()=>f,default:()=>c}),s,c,l,u,d,f;function p(){return(p=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Density`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Functional pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s(),default:``},render:e=>({components:{DBPagination:i,DBInfotext:r},setup(){return{args:e}},template:`<div class="fit-content-container" data-density="functional"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},u={args:{label:`Regular pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s(),default:``},render:e=>({components:{DBPagination:i,DBInfotext:r},setup(){return{args:e}},template:`<div class="fit-content-container" data-density="regular"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},d={args:{label:`Expressive pagination`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s(),default:``},render:e=>({components:{DBPagination:i,DBInfotext:r},setup(){return{args:e}},template:`<div class="fit-content-container" data-density="expressive"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},f=[`Functional`,`DefaultRegular`,`Expressive`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Functional pagination",
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
    template: \`<div class="fit-content-container" data-density="functional"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Functional
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Regular pagination",
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
    template: \`<div class="fit-content-container" data-density="regular"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    (Default) Regular
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Expressive pagination",
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
    template: \`<div class="fit-content-container" data-density="expressive"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Expressive
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...d.parameters?.docs?.source}}}})))()}export{p as a,o as i,d as n,l as r,u as t};