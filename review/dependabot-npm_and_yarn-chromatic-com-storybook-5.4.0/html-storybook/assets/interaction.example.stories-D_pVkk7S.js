import{n as e}from"./iframe-MG8EzUCc.js";import{i as t,n,r,t as i}from"./pagination-DXtlIy_E.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=a((()=>{t(),n(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPagination/Interaction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:s()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},l={args:{label:`Results pages`,currentPage:5,totalCount:100,pageSize:10,onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{"data-testid":`default-pagination`,children:[(0,o.jsx)(i,{...e}),`requested: 0`]})},u={args:{label:`First page`,currentPage:1,totalCount:100,pageSize:10},render:e=>(0,o.jsx)(`div`,{"data-testid":`first-pagination`,children:(0,o.jsx)(i,{...e})})},d={args:{label:`Last page`,currentPage:10,totalCount:100,pageSize:10},render:e=>(0,o.jsx)(`div`,{"data-testid":`last-pagination`,children:(0,o.jsx)(i,{...e})})},f={args:{label:`Without siblings`,currentPage:10,totalCount:200,pageSize:10,siblingCount:0,boundaryCount:0},render:e=>(0,o.jsx)(`div`,{"data-testid":`sibling-boundary-pagination`,children:(0,o.jsx)(i,{...e})})},p={args:{label:`Results pagination`,previousLabel:`Go to previous page`,nextLabel:`Go to next page`,pageLabel:`Result page {page} of {totalPages}`,size:`small`,currentPage:2,totalCount:30,pageSize:10},render:e=>(0,o.jsx)(`div`,{"data-testid":`small-pagination`,children:(0,o.jsx)(i,{...e})})},m={args:{label:`Composed`,currentPage:2,onPageChange:s(),children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r,{children:(0,o.jsx)(`a`,{href:`#page-1`,"aria-label":`Page 1`,children:`1`})}),(0,o.jsx)(r,{children:(0,o.jsx)(`a`,{href:`#page-2`,"aria-label":`Page 2`,children:`2`})}),(0,o.jsx)(r,{children:(0,o.jsx)(`a`,{href:`#page-3`,"aria-label":`Page 3`,children:`3`})})]})},render:e=>(0,o.jsxs)(`div`,{"data-testid":`composed-pagination`,children:[(0,o.jsx)(i,{...e}),`composed requested: 0`]})},h={args:{label:`With a disabled page`,currentPage:1,items:[{},{disabled:!0},{}],onPageChange:s()},render:e=>(0,o.jsxs)(`div`,{"data-testid":`items-pagination`,children:[(0,o.jsx)(i,{...e}),`items requested: 0`]})},g=[`Interaction`,`PaginationInteraction1`,`PaginationInteraction2`,`PaginationInteraction3`,`PaginationInteraction4`,`PaginationInteraction5`,`PaginationInteraction6`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Results pages",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div data-testid="default-pagination"><DBPagination {...properties} />requested: 0</div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "First page",
    "currentPage": 1,
    "totalCount": 100,
    "pageSize": 10
  },
  render: (properties: any) => <div data-testid="first-pagination"><DBPagination {...properties} /></div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Last page",
    "currentPage": 10,
    "totalCount": 100,
    "pageSize": 10
  },
  render: (properties: any) => <div data-testid="last-pagination"><DBPagination {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Without siblings",
    "currentPage": 10,
    "totalCount": 200,
    "pageSize": 10,
    "siblingCount": 0,
    "boundaryCount": 0
  },
  render: (properties: any) => <div data-testid="sibling-boundary-pagination"><DBPagination {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  render: (properties: any) => <div data-testid="small-pagination"><DBPagination {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Composed",
    "currentPage": 2,
    "onPageChange": fn(),
    "children": <><DBPaginationItem><a href="#page-1" aria-label="Page 1">
                            1
                        </a></DBPaginationItem><DBPaginationItem><a href="#page-2" aria-label="Page 2">
                            2
                        </a></DBPaginationItem><DBPaginationItem><a href="#page-3" aria-label="Page 3">
                            3
                        </a></DBPaginationItem></>
  },
  render: (properties: any) => <div data-testid="composed-pagination"><DBPagination {...properties} />composed requested: 0</div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "With a disabled page",
    "currentPage": 1,
    "items": [{}, {
      disabled: true
    }, {}],
    "onPageChange": fn()
  },
  render: (properties: any) => <div data-testid="items-pagination"><DBPagination {...properties} />items requested: 0</div>
}`,...h.parameters?.docs?.source}}}})))()}_();export{l as Interaction,u as PaginationInteraction1,d as PaginationInteraction2,f as PaginationInteraction3,p as PaginationInteraction4,m as PaginationInteraction5,h as PaginationInteraction6,g as __namedExportsOrder,c as default};