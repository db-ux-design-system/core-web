import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{l as n,o as r}from"./iframe-CSduPcDp.js";import{i,n as a,t as o}from"./apply-web-component-args-D-8sNeLN.js";var s=t({Interaction:()=>u,PaginationInteraction1:()=>d,PaginationInteraction2:()=>f,PaginationInteraction3:()=>p,PaginationInteraction4:()=>m,PaginationInteraction5:()=>h,PaginationInteraction6:()=>g,__namedExportsOrder:()=>_,default:()=>l}),c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),o(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBPagination/Interaction`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:c()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},u={args:{label:`Results pages`,currentPage:5,totalCount:100,pageSize:10,onPageChange:c()},render:({children:e,...t})=>n`<div data-testid="default-pagination"><db-pagination ${a(t)}></db-pagination><div>requested: 0</div></div>`},d={args:{label:`First page`,currentPage:1,totalCount:100,pageSize:10},render:({children:e,...t})=>n`<div data-testid="first-pagination"><db-pagination ${a(t)}></db-pagination></div>`},f={args:{label:`Last page`,currentPage:10,totalCount:100,pageSize:10},render:({children:e,...t})=>n`<div data-testid="last-pagination"><db-pagination ${a(t)}></db-pagination></div>`},p={args:{label:`Without siblings`,currentPage:10,totalCount:200,pageSize:10,siblingCount:0,boundaryCount:0},render:({children:e,...t})=>n`<div data-testid="sibling-boundary-pagination"><db-pagination ${a(t)}></db-pagination></div>`},m={args:{label:`Results pagination`,previousLabel:`Go to previous page`,nextLabel:`Go to next page`,pageLabel:`Result page {page} of {totalPages}`,size:`small`,currentPage:2,totalCount:30,pageSize:10},render:({children:e,...t})=>n`<div data-testid="small-pagination"><db-pagination ${a(t)}></db-pagination></div>`},h={args:{label:`Composed`,currentPage:2,onPageChange:c()},render:({children:e,...t})=>n`<div data-testid="composed-pagination"><db-pagination ${a(t)}>${i(`<db-pagination-item><a href="#page-1" aria-label="Page 1">1</a></db-pagination-item><db-pagination-item><a href="#page-2" aria-label="Page 2">2</a></db-pagination-item><db-pagination-item><a href="#page-3" aria-label="Page 3">3</a></db-pagination-item>`)}</db-pagination><div>composed requested: 0</div></div>`},g={args:{label:`With a disabled page`,currentPage:1,items:[{},{disabled:!0},{}],onPageChange:c()},render:({children:e,...t})=>n`<div data-testid="items-pagination"><db-pagination ${a(t)}></db-pagination><div>items requested: 0</div></div>`},_=[`Interaction`,`PaginationInteraction1`,`PaginationInteraction2`,`PaginationInteraction3`,`PaginationInteraction4`,`PaginationInteraction5`,`PaginationInteraction6`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Results pages",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="default-pagination"><db-pagination \${spreadArgs(args)}></db-pagination><div>requested: 0</div></div>\`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "First page",
    "currentPage": 1,
    "totalCount": 100,
    "pageSize": 10
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="first-pagination"><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Last page",
    "currentPage": 10,
    "totalCount": 100,
    "pageSize": 10
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="last-pagination"><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Without siblings",
    "currentPage": 10,
    "totalCount": 200,
    "pageSize": 10,
    "siblingCount": 0,
    "boundaryCount": 0
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="sibling-boundary-pagination"><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Results pagination",
    "previousLabel": "Go to previous page",
    "nextLabel": "Go to next page",
    "pageLabel": "Result page {page} of {totalPages}",
    "size": "small",
    "currentPage": 2,
    "totalCount": 30,
    "pageSize": 10
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="small-pagination"><db-pagination \${spreadArgs(args)}></db-pagination></div>\`
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Composed",
    "currentPage": 2,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="composed-pagination"><db-pagination \${spreadArgs(args)}>\${unsafeHTML(\`<db-pagination-item><a href="#page-1" aria-label="Page 1">1</a></db-pagination-item><db-pagination-item><a href="#page-2" aria-label="Page 2">2</a></db-pagination-item><db-pagination-item><a href="#page-3" aria-label="Page 3">3</a></db-pagination-item>\`)}</db-pagination><div>composed requested: 0</div></div>\`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "With a disabled page",
    "currentPage": 1,
    "items": [{}, {
      disabled: true
    }, {}],
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="items-pagination"><db-pagination \${spreadArgs(args)}></db-pagination><div>items requested: 0</div></div>\`
}`,...g.parameters?.docs?.source}}}})))()}export{m as a,v as c,p as i,s as l,d as n,h as o,f as r,g as s,u as t};