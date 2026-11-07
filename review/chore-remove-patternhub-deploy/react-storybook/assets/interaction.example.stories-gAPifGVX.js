import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{i as r,n as i,r as a,t as o}from"./pagination-Coztuwb5.js";var s=t({Interaction:()=>d,PaginationInteraction1:()=>f,PaginationInteraction2:()=>p,PaginationInteraction3:()=>m,PaginationInteraction4:()=>h,PaginationInteraction5:()=>g,PaginationInteraction6:()=>_,__namedExportsOrder:()=>v,default:()=>u}),c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{r(),i(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBPagination/Interaction`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],args:{onPageChange:l()},argTypes:{currentPage:{control:`number`},totalCount:{control:`number`},pageSize:{control:`number`},siblingCount:{control:`number`},boundaryCount:{control:`number`},size:{control:`select`,options:[`small`,`medium`]},label:{control:`text`},previousLabel:{control:`text`},nextLabel:{control:`text`},pageLabel:{control:`text`},onPageChange:{action:`onPageChange`},id:{control:`text`}}},d={args:{label:`Results pages`,currentPage:5,totalCount:100,pageSize:10,onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{"data-testid":`default-pagination`,children:[(0,c.jsx)(o,{...e}),`requested: 0`]})},f={args:{label:`First page`,currentPage:1,totalCount:100,pageSize:10},render:e=>(0,c.jsx)(`div`,{"data-testid":`first-pagination`,children:(0,c.jsx)(o,{...e})})},p={args:{label:`Last page`,currentPage:10,totalCount:100,pageSize:10},render:e=>(0,c.jsx)(`div`,{"data-testid":`last-pagination`,children:(0,c.jsx)(o,{...e})})},m={args:{label:`Without siblings`,currentPage:10,totalCount:200,pageSize:10,siblingCount:0,boundaryCount:0},render:e=>(0,c.jsx)(`div`,{"data-testid":`sibling-boundary-pagination`,children:(0,c.jsx)(o,{...e})})},h={args:{label:`Results pagination`,previousLabel:`Go to previous page`,nextLabel:`Go to next page`,pageLabel:`Result page {page} of {totalPages}`,size:`small`,currentPage:2,totalCount:30,pageSize:10},render:e=>(0,c.jsx)(`div`,{"data-testid":`small-pagination`,children:(0,c.jsx)(o,{...e})})},g={args:{label:`Composed`,currentPage:2,onPageChange:l(),children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{children:(0,c.jsx)(`a`,{href:`#page-1`,"aria-label":`Page 1`,children:`1`})}),(0,c.jsx)(a,{children:(0,c.jsx)(`a`,{href:`#page-2`,"aria-label":`Page 2`,children:`2`})}),(0,c.jsx)(a,{children:(0,c.jsx)(`a`,{href:`#page-3`,"aria-label":`Page 3`,children:`3`})})]})},render:e=>(0,c.jsxs)(`div`,{"data-testid":`composed-pagination`,children:[(0,c.jsx)(o,{...e}),`composed requested: 0`]})},_={args:{label:`With a disabled page`,currentPage:1,items:[{},{disabled:!0},{}],onPageChange:l()},render:e=>(0,c.jsxs)(`div`,{"data-testid":`items-pagination`,children:[(0,c.jsx)(o,{...e}),`items requested: 0`]})},v=[`Interaction`,`PaginationInteraction1`,`PaginationInteraction2`,`PaginationInteraction3`,`PaginationInteraction4`,`PaginationInteraction5`,`PaginationInteraction6`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Results pages",
    "currentPage": 5,
    "totalCount": 100,
    "pageSize": 10,
    "onPageChange": fn()
  },
  render: (properties: any) => <div data-testid="default-pagination"><DBPagination {...properties} />requested: 0</div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "First page",
    "currentPage": 1,
    "totalCount": 100,
    "pageSize": 10
  },
  render: (properties: any) => <div data-testid="first-pagination"><DBPagination {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Last page",
    "currentPage": 10,
    "totalCount": 100,
    "pageSize": 10
  },
  render: (properties: any) => <div data-testid="last-pagination"><DBPagination {...properties} /></div>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "Without siblings",
    "currentPage": 10,
    "totalCount": 200,
    "pageSize": 10,
    "siblingCount": 0,
    "boundaryCount": 0
  },
  render: (properties: any) => <div data-testid="sibling-boundary-pagination"><DBPagination {...properties} /></div>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "label": "With a disabled page",
    "currentPage": 1,
    "items": [{}, {
      disabled: true
    }, {}],
    "onPageChange": fn()
  },
  render: (properties: any) => <div data-testid="items-pagination"><DBPagination {...properties} />items requested: 0</div>
}`,..._.parameters?.docs?.source}}}})))()}export{h as a,y as c,m as i,s as l,f as n,g as o,p as r,_ as s,d as t};