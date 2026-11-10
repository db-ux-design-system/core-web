import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./infotext-B9UaxmhJ.js";import{n as i,t as a}from"./pagination-DCyy6eAe.js";var o=t({FourDigitPages:()=>l,ShortList:()=>u,__namedExportsOrder:()=>d,default:()=>c}),s,c,l,u,d;function f(){return(f=e((()=>{n(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Collapsing`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Collapsing pagination`,currentPage:5e3,totalCount:1e5,pageSize:10,onPageChange:s(),default:``},render:e=>({components:{DBPagination:i,DBInfotext:r},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Below the sm breakpoint the pages next to the current one
                    give way - resize the window to see it
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},u={args:{label:`Collapsing short list pagination`,currentPage:3,totalCount:50,pageSize:10,onPageChange:s(),default:``},render:e=>({components:{DBPagination:i,DBInfotext:r},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    A list this short is already the collapsed layout, so it
                    stays as it is
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},d=[`FourDigitPages`,`ShortList`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Collapsing pagination",
    "currentPage": 5000,
    "totalCount": 100000,
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
                    Below the sm breakpoint the pages next to the current one
                    give way - resize the window to see it
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Collapsing short list pagination",
    "currentPage": 3,
    "totalCount": 50,
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
                    A list this short is already the collapsed layout, so it
                    stays as it is
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...u.parameters?.docs?.source}}}})))()}export{c as a,f as i,u as n,o as r,l as t};