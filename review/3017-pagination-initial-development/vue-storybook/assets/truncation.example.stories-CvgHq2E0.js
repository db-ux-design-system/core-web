import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-DcEk8k9Q.js";import{n as r,t as i}from"./pagination-BxCMyVpj.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPagination/Truncation`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:a()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},s={args:{label:`Untruncated pagination`,currentPage:3,totalCount:50,pageSize:10,onPageChange:a(),default:``},render:e=>({components:{DBPagination:r,DBInfotext:n},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    Without truncation - all 5 pages fit
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},c={args:{label:`Default truncation pagination`,currentPage:10,totalCount:200,pageSize:10,onPageChange:a(),default:``},render:e=>({components:{DBPagination:r,DBInfotext:n},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    (Default) siblingCount 1, boundaryCount 1
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},l={args:{label:`Two siblings pagination`,currentPage:10,totalCount:200,pageSize:10,siblingCount:2,onPageChange:a(),default:``},render:e=>({components:{DBPagination:r,DBInfotext:n},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    siblingCount 2 - wider window around the current page
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},u={args:{label:`Two boundaries pagination`,currentPage:10,totalCount:200,pageSize:10,boundaryCount:2,onPageChange:a(),default:``},render:e=>({components:{DBPagination:r,DBInfotext:n},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    boundaryCount 2 - two pages pinned at each end
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Untruncated pagination",
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
                    Without truncation - all 5 pages fit
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Default truncation pagination",
    "currentPage": 10,
    "totalCount": 200,
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
                    (Default) siblingCount 1, boundaryCount 1
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Two siblings pagination",
    "currentPage": 10,
    "totalCount": 200,
    "pageSize": 10,
    "siblingCount": 2,
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
                    siblingCount 2 - wider window around the current page
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Two boundaries pagination",
    "currentPage": 10,
    "totalCount": 200,
    "pageSize": 10,
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
                    boundaryCount 2 - two pages pinned at each end
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...u.parameters?.docs?.source}}},d=[`WithoutTruncation`,`DefaultSiblingAndBoundary1`,`SiblingCount2`,`BoundaryCount2`]})))()}f();export{u as BoundaryCount2,c as DefaultSiblingAndBoundary1,l as SiblingCount2,s as WithoutTruncation,d as __namedExportsOrder,o as default};