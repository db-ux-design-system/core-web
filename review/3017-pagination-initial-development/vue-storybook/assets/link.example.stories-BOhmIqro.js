import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./infotext-CCK1BEoo.js";import{n as r,t as i}from"./pagination-DxodOAxN.js";var a,o,s,c,l;function u(){return(u=e((()=>{t(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPagination/Link`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:a()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},s={args:{label:`Linked pagination`,hrefPattern:`#linked-page={page}`,currentPage:5,totalCount:100,pageSize:10,onPageChange:a(),default:``},render:e=>({components:{DBPagination:r,DBInfotext:n},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    hrefPattern turns the pages into anchors - deep linkable and
                    usable without JavaScript
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},c={args:{label:`Linked boundary pagination`,hrefPattern:`#boundary-page={page}`,currentPage:1,totalCount:100,pageSize:10,onPageChange:a(),default:``},render:e=>({components:{DBPagination:r,DBInfotext:n},setup(){return{args:e}},template:`<div class="fit-content-container"   ><DBInfotext icon="none" size="small" semantic="informational"   >
                    At the boundaries previous and next stay disabled buttons,
                    because there is no page to link to
                </DBInfotext><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Linked pagination",
    "hrefPattern": "#linked-page={page}",
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
                    hrefPattern turns the pages into anchors - deep linkable and
                    usable without JavaScript
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Linked boundary pagination",
    "hrefPattern": "#boundary-page={page}",
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
                    At the boundaries previous and next stay disabled buttons,
                    because there is no page to link to
                </DBInfotext><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...c.parameters?.docs?.source}}},l=[`LinkedPages`,`FirstPage`]})))()}u();export{c as FirstPage,s as LinkedPages,l as __namedExportsOrder,o as default};