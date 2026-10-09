import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{l as t,o as n}from"./iframe-B9kWor2y.js";import{i as r,n as i,t as a}from"./apply-web-component-args-B1PNRnpa.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBPagination/Interaction`,component:`db-pagination`,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:o()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},c={args:{label:`Results pages`,currentPage:5,totalCount:100,pageSize:10,onPageChange:o()},render:({children:e,...n})=>t`<div data-testid="default-pagination"><db-pagination ${i(n)}></db-pagination>requested: 0</div>`},l={args:{label:`First page`,currentPage:1,totalCount:100,pageSize:10},render:({children:e,...n})=>t`<div data-testid="first-pagination"><db-pagination ${i(n)}></db-pagination></div>`},u={args:{label:`Last page`,currentPage:10,totalCount:100,pageSize:10},render:({children:e,...n})=>t`<div data-testid="last-pagination"><db-pagination ${i(n)}></db-pagination></div>`},d={args:{label:`Without siblings`,currentPage:10,totalCount:200,pageSize:10,siblingCount:0,boundaryCount:0},render:({children:e,...n})=>t`<div data-testid="sibling-boundary-pagination"><db-pagination ${i(n)}></db-pagination></div>`},f={args:{label:`Results pagination`,previousLabel:`Go to previous page`,nextLabel:`Go to next page`,pageLabel:`Result page {page} of {totalPages}`,size:`small`,currentPage:2,totalCount:30,pageSize:10},render:({children:e,...n})=>t`<div data-testid="small-pagination"><db-pagination ${i(n)}></db-pagination></div>`},p={args:{label:`Composed`,currentPage:2,onPageChange:o()},render:({children:e,...n})=>t`<div data-testid="composed-pagination"><db-pagination ${i(n)}>${r(`<db-pagination-item><a href="#page-1" aria-label="Page 1">1</a></db-pagination-item><db-pagination-item><a href="#page-2" aria-label="Page 2">2</a></db-pagination-item><db-pagination-item><a href="#page-3" aria-label="Page 3">3</a></db-pagination-item>`)}</db-pagination>composed requested: 0</div>`},m={args:{label:`With a disabled page`,currentPage:1,items:[{},{disabled:!0},{}],onPageChange:o()},render:({children:e,...n})=>t`<div data-testid="items-pagination"><db-pagination ${i(n)}></db-pagination>items requested: 0</div>`},h=[`Interaction`,`PaginationInteraction1`,`PaginationInteraction2`,`PaginationInteraction3`,`PaginationInteraction4`,`PaginationInteraction5`,`PaginationInteraction6`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div data-testid="default-pagination"><db-pagination \${spreadArgs(args)}></db-pagination>requested: 0</div>\`
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Composed",
    "currentPage": 2,
    "onPageChange": fn()
  },
  render: ({
    children,
    ...args
  }: any) => html\`<div data-testid="composed-pagination"><db-pagination \${spreadArgs(args)}>\${unsafeHTML(\`<db-pagination-item><a href="#page-1" aria-label="Page 1">1</a></db-pagination-item><db-pagination-item><a href="#page-2" aria-label="Page 2">2</a></db-pagination-item><db-pagination-item><a href="#page-3" aria-label="Page 3">3</a></db-pagination-item>\`)}</db-pagination>composed requested: 0</div>\`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  }: any) => html\`<div data-testid="items-pagination"><db-pagination \${spreadArgs(args)}></db-pagination>items requested: 0</div>\`
}`,...m.parameters?.docs?.source}}}})))()}g();export{c as Interaction,l as PaginationInteraction1,u as PaginationInteraction2,d as PaginationInteraction3,f as PaginationInteraction4,p as PaginationInteraction5,m as PaginationInteraction6,h as __namedExportsOrder,s as default};