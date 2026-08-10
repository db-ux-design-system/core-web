import{n as e}from"./iframe-DItA1A7b.js";import{n as t,t as n}from"./button-CXUTf1VF.js";import{n as r,t as i}from"./infotext-CyX1UaO9.js";import{c as a,d as o,f as s,i as c,l,m as u,n as d,p as f,r as p,s as m,t as h,u as g}from"./table-CKjhL206.js";import{n as _}from"./rolldown-runtime-DkW27tQK.js";var v,y,b,x,S,C,w;function T(){return(T=_((()=>{t(),r(),a(),u(),c(),s(),g(),d(),v=e(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/DBTable/Vertical Alignment`,component:h,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},x={args:{captionPlain:`Start`,divider:`both`,children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p,{children:(0,v.jsxs)(l,{children:[(0,v.jsx)(o,{scope:`col`,verticalAlignment:`start`,children:`Header A`}),(0,v.jsx)(o,{scope:`col`,verticalAlignment:`start`,children:`Header B`})]})}),(0,v.jsx)(m,{children:(0,v.jsxs)(l,{children:[(0,v.jsx)(o,{scope:`row`,verticalAlignment:`start`,children:`Comp 1`}),(0,v.jsx)(f,{verticalAlignment:`start`,children:(0,v.jsx)(n,{children:`Click`})})]})})]})},render:e=>(0,v.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,v.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Start`}),(0,v.jsx)(h,{...e})]})},S={args:{captionPlain:`(Default) Center`,divider:`both`,children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p,{children:(0,v.jsxs)(l,{children:[(0,v.jsx)(o,{scope:`col`,verticalAlignment:`center`,children:`Header A`}),(0,v.jsx)(o,{scope:`col`,verticalAlignment:`center`,children:`Header B`})]})}),(0,v.jsx)(m,{children:(0,v.jsxs)(l,{children:[(0,v.jsx)(o,{scope:`row`,verticalAlignment:`center`,children:`Comp 1`}),(0,v.jsx)(f,{verticalAlignment:`center`,children:(0,v.jsx)(n,{children:`Click`})})]})})]})},render:e=>(0,v.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,v.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Center`}),(0,v.jsx)(h,{...e})]})},C={args:{captionPlain:`End`,divider:`both`,children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(p,{children:(0,v.jsxs)(l,{children:[(0,v.jsx)(o,{scope:`col`,verticalAlignment:`end`,children:`Header A`}),(0,v.jsx)(o,{scope:`col`,verticalAlignment:`end`,children:`Header B`})]})}),(0,v.jsx)(m,{children:(0,v.jsxs)(l,{children:[(0,v.jsx)(o,{scope:`row`,verticalAlignment:`end`,children:`Comp 1`}),(0,v.jsx)(f,{verticalAlignment:`end`,children:(0,v.jsx)(n,{children:`Click`})})]})})]})},render:e=>(0,v.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,v.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`End`}),(0,v.jsx)(h,{...e})]})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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