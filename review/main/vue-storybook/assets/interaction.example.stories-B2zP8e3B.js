import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,n,r,t as i}from"./pagination-B-8mpxU0.js";var a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{r(),i(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBPagination/Interaction`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:a()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},s={args:{label:`Results pages`,currentPage:5,totalCount:100,pageSize:10,onPageChange:a(),default:``},render:e=>({components:{DBPagination:n,DBPaginationItem:t},setup(){return{args:e}},template:`<div data-testid="default-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination>requested: 0</div>`})},c={args:{label:`First page`,currentPage:1,totalCount:100,pageSize:10,default:``},render:e=>({components:{DBPagination:n,DBPaginationItem:t},setup(){return{args:e}},template:`<div data-testid="first-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},l={args:{label:`Last page`,currentPage:10,totalCount:100,pageSize:10,default:``},render:e=>({components:{DBPagination:n,DBPaginationItem:t},setup(){return{args:e}},template:`<div data-testid="last-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},u={args:{label:`Without siblings`,currentPage:10,totalCount:200,pageSize:10,siblingCount:0,boundaryCount:0,default:``},render:e=>({components:{DBPagination:n,DBPaginationItem:t},setup(){return{args:e}},template:`<div data-testid="sibling-boundary-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},d={args:{label:`Results pagination`,previousLabel:`Go to previous page`,nextLabel:`Go to next page`,pageLabel:`Result page {page} of {totalPages}`,size:`small`,currentPage:2,totalCount:30,pageSize:10,default:``},render:e=>({components:{DBPagination:n,DBPaginationItem:t},setup(){return{args:e}},template:`<div data-testid="small-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination></div>`})},f={args:{label:`Composed`,currentPage:2,onPageChange:a(),default:`<DBPaginationItem
  ><a href="#page-1" aria-label="Page 1"> 1 </a></DBPaginationItem
><DBPaginationItem
  ><a href="#page-2" aria-label="Page 2"> 2 </a></DBPaginationItem
><DBPaginationItem
  ><a href="#page-3" aria-label="Page 3"> 3 </a></DBPaginationItem
>`},render:e=>({components:{DBPagination:n,DBPaginationItem:t},setup(){return{args:e}},template:`<div data-testid="composed-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination>composed requested: 0</div>`})},p={args:{label:`With a disabled page`,currentPage:1,items:[{},{disabled:!0},{}],onPageChange:a(),default:``},render:e=>({components:{DBPagination:n,DBPaginationItem:t},setup(){return{args:e}},template:`<div data-testid="items-pagination"   ><DBPagination v-bind="args"   >${e.default}</DBPagination>items requested: 0</div>`})},m=[`Interaction`,`PaginationInteraction1`,`PaginationInteraction2`,`PaginationInteraction3`,`PaginationInteraction4`,`PaginationInteraction5`,`PaginationInteraction6`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}}})))()}h();export{s as Interaction,c as PaginationInteraction1,l as PaginationInteraction2,u as PaginationInteraction3,d as PaginationInteraction4,f as PaginationInteraction5,p as PaginationInteraction6,m as __namedExportsOrder,o as default};