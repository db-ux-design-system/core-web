import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{i as n,n as r,r as i,t as a}from"./pagination-BGaaI5GR.js";var o=t({Interaction:()=>l,PaginationInteraction1:()=>u,PaginationInteraction2:()=>d,PaginationInteraction3:()=>f,PaginationInteraction4:()=>p,PaginationInteraction5:()=>m,PaginationInteraction6:()=>h,__namedExportsOrder:()=>g,default:()=>c}),s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{i(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Interaction`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Results pages`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s(),default:``},render:e=>({components:{DBPagination:r,DBPaginationItem:n},setup(){return{args:e}},template:`<div data-testid="default-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination>requested: 0</div>`})},u={args:{label:`First page`,currentPage:1,totalCount:100,pageSize:10,default:``},render:e=>({components:{DBPagination:r,DBPaginationItem:n},setup(){return{args:e}},template:`<div data-testid="first-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},d={args:{label:`Last page`,currentPage:10,totalCount:100,pageSize:10,default:``},render:e=>({components:{DBPagination:r,DBPaginationItem:n},setup(){return{args:e}},template:`<div data-testid="last-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},f={args:{label:`Without siblings`,currentPage:10,totalCount:200,pageSize:10,siblingCount:0,boundaryCount:0,default:``},render:e=>({components:{DBPagination:r,DBPaginationItem:n},setup(){return{args:e}},template:`<div data-testid="sibling-boundary-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},p={args:{label:`Results pagination`,previousLabel:`Go to previous page`,nextLabel:`Go to next page`,pageLabel:`Result page {page} of {totalPages}`,size:`small`,currentPage:2,totalCount:30,pageSize:10,default:``},render:e=>({components:{DBPagination:r,DBPaginationItem:n},setup(){return{args:e}},template:`<div data-testid="small-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},m={args:{label:`Composed`,currentPage:2,onPageChange:s(),default:`<DBPaginationItem
  ><a href="#page-1" aria-label="Page 1"> 1 </a></DBPaginationItem
><DBPaginationItem
  ><a href="#page-2" aria-label="Page 2"> 2 </a></DBPaginationItem
><DBPaginationItem
  ><a href="#page-3" aria-label="Page 3"> 3 </a></DBPaginationItem
>`},render:e=>({components:{DBPagination:r,DBPaginationItem:n},setup(){return{args:e}},template:`<div data-testid="composed-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination>composed requested: 0</div>`})},h={args:{label:`With a disabled page`,currentPage:1,items:[{},{disabled:!0},{}],onPageChange:s(),default:``},render:e=>({components:{DBPagination:r,DBPaginationItem:n},setup(){return{args:e}},template:`<div data-testid="items-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination>items requested: 0</div>`})},g=[`Interaction`,`PaginationInteraction1`,`PaginationInteraction2`,`PaginationInteraction3`,`PaginationInteraction4`,`PaginationInteraction5`,`PaginationInteraction6`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Results pages",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn(),
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBPagination,
      DBPaginationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="default-pagination"   ><DBPagination v-bind="args"   >\${args.default}</DBPagination>requested: 0</div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "First page",
    "currentPage": 1,
    "totalCount": 100,
    "pageSize": 10,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBPagination,
      DBPaginationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="first-pagination"   ><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Last page",
    "currentPage": 10,
    "totalCount": 100,
    "pageSize": 10,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBPagination,
      DBPaginationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="last-pagination"   ><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Without siblings",
    "currentPage": 10,
    "totalCount": 200,
    "pageSize": 10,
    "siblingCount": 0,
    "boundaryCount": 0,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBPagination,
      DBPaginationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="sibling-boundary-pagination"   ><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Results pagination",
    "previousLabel": "Go to previous page",
    "nextLabel": "Go to next page",
    "pageLabel": "Result page {page} of {totalPages}",
    "size": "small",
    "currentPage": 2,
    "totalCount": 30,
    "pageSize": 10,
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBPagination,
      DBPaginationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="small-pagination"   ><DBPagination v-bind="args"   >\${args.default}</DBPagination></div>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Composed",
    "currentPage": 2,
    "onPageChange": fn(),
    "default": \`<DBPaginationItem
  ><a href="#page-1" aria-label="Page 1"> 1 </a></DBPaginationItem
><DBPaginationItem
  ><a href="#page-2" aria-label="Page 2"> 2 </a></DBPaginationItem
><DBPaginationItem
  ><a href="#page-3" aria-label="Page 3"> 3 </a></DBPaginationItem
>\`
  },
  render: (args: any) => ({
    components: {
      DBPagination,
      DBPaginationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="composed-pagination"   ><DBPagination v-bind="args"   >\${args.default}</DBPagination>composed requested: 0</div>\`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "With a disabled page",
    "currentPage": 1,
    "items": [{}, {
      disabled: true
    }, {}],
    "onPageChange": fn(),
    "default": \`\`
  },
  render: (args: any) => ({
    components: {
      DBPagination,
      DBPaginationItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div data-testid="items-pagination"   ><DBPagination v-bind="args"   >\${args.default}</DBPagination>items requested: 0</div>\`
  })
}`,...h.parameters?.docs?.source}}}})))()}export{p as a,_ as c,f as i,o as l,u as n,m as o,d as r,h as s,l as t};