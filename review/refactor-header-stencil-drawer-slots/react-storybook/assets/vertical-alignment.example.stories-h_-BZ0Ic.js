import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./button-DQGlyU_P.js";import{n as i,t as a}from"./infotext-B7dHyT9f.js";import{c as o,d as s,f as c,i as l,l as u,m as d,n as f,p,r as m,s as h,t as g,u as _}from"./table-tB7gmeLB.js";var v,y,b,x,S,C,w;function T(){return(T=e((()=>{n(),i(),o(),d(),l(),c(),_(),f(),v=t(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/DBTable/Vertical Alignment`,component:g,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},x={args:{captionPlain:`Start`,divider:`both`,children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{children:(0,v.jsxs)(u,{children:[(0,v.jsx)(s,{scope:`col`,verticalAlignment:`start`,children:`Header A`}),(0,v.jsx)(s,{scope:`col`,verticalAlignment:`start`,children:`Header B`})]})}),(0,v.jsx)(h,{children:(0,v.jsxs)(u,{children:[(0,v.jsx)(s,{scope:`row`,verticalAlignment:`start`,children:`Comp 1`}),(0,v.jsx)(p,{verticalAlignment:`start`,children:(0,v.jsx)(r,{children:`Click`})})]})})]})},render:e=>(0,v.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,v.jsx)(a,{semantic:`informational`,size:`small`,icon:`none`,children:`Start`}),(0,v.jsx)(g,{...e})]})},S={args:{captionPlain:`(Default) Center`,divider:`both`,children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{children:(0,v.jsxs)(u,{children:[(0,v.jsx)(s,{scope:`col`,verticalAlignment:`center`,children:`Header A`}),(0,v.jsx)(s,{scope:`col`,verticalAlignment:`center`,children:`Header B`})]})}),(0,v.jsx)(h,{children:(0,v.jsxs)(u,{children:[(0,v.jsx)(s,{scope:`row`,verticalAlignment:`center`,children:`Comp 1`}),(0,v.jsx)(p,{verticalAlignment:`center`,children:(0,v.jsx)(r,{children:`Click`})})]})})]})},render:e=>(0,v.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,v.jsx)(a,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Center`}),(0,v.jsx)(g,{...e})]})},C={args:{captionPlain:`End`,divider:`both`,children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(m,{children:(0,v.jsxs)(u,{children:[(0,v.jsx)(s,{scope:`col`,verticalAlignment:`end`,children:`Header A`}),(0,v.jsx)(s,{scope:`col`,verticalAlignment:`end`,children:`Header B`})]})}),(0,v.jsx)(h,{children:(0,v.jsxs)(u,{children:[(0,v.jsx)(s,{scope:`row`,verticalAlignment:`end`,children:`Comp 1`}),(0,v.jsx)(p,{verticalAlignment:`end`,children:(0,v.jsx)(r,{children:`Click`})})]})})]})},render:e=>(0,v.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,v.jsx)(a,{semantic:`informational`,size:`small`,icon:`none`,children:`End`}),(0,v.jsx)(g,{...e})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "Start",
    "divider": "both",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col" verticalAlignment="start">
                                Header A
                            </DBTableHeaderCell><DBTableHeaderCell scope="col" verticalAlignment="start">
                                Header B
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow><DBTableHeaderCell scope="row" verticalAlignment="start">
                                Comp 1
                            </DBTableHeaderCell><DBTableDataCell verticalAlignment="start"><DBButton>Click</DBButton></DBTableDataCell></DBTableRow></DBTableBody></>
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Start
                </DBInfotext><DBTable {...properties} /></div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "(Default) Center",
    "divider": "both",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col" verticalAlignment="center">
                                Header A
                            </DBTableHeaderCell><DBTableHeaderCell scope="col" verticalAlignment="center">
                                Header B
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow><DBTableHeaderCell scope="row" verticalAlignment="center">
                                Comp 1
                            </DBTableHeaderCell><DBTableDataCell verticalAlignment="center"><DBButton>Click</DBButton></DBTableDataCell></DBTableRow></DBTableBody></>
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Center
                </DBInfotext><DBTable {...properties} /></div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "captionPlain": "End",
    "divider": "both",
    "children": <><DBTableHead><DBTableRow><DBTableHeaderCell scope="col" verticalAlignment="end">
                                Header A
                            </DBTableHeaderCell><DBTableHeaderCell scope="col" verticalAlignment="end">
                                Header B
                            </DBTableHeaderCell></DBTableRow></DBTableHead><DBTableBody><DBTableRow><DBTableHeaderCell scope="row" verticalAlignment="end">
                                Comp 1
                            </DBTableHeaderCell><DBTableDataCell verticalAlignment="end"><DBButton>Click</DBButton></DBTableDataCell></DBTableRow></DBTableBody></>
  },
  render: (properties: any) => <div style={{
    minInlineSize: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--db-spacing-fixed-md)'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    End
                </DBInfotext><DBTable {...properties} /></div>
}`,...C.parameters?.docs?.source}}},w=[`Start`,`DefaultCenter`,`End`]})))()}T();export{S as DefaultCenter,C as End,x as Start,w as __namedExportsOrder,b as default};