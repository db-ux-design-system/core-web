import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-HiccZljf.js";import{n as a,t as o}from"./infotext-BrqREugs.js";import{c as s,d as c,f as l,i as u,l as d,m as f,n as p,p as m,r as h,s as g,t as _,u as v}from"./table-hiWHRwKC.js";var y=t({DefaultCenter:()=>w,End:()=>T,Start:()=>C,__namedExportsOrder:()=>E,default:()=>S}),b,x,S,C,w,T,E;function D(){return(D=e((()=>{r(),a(),s(),f(),u(),l(),v(),p(),b=n(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/DBTable/Vertical Alignment`,component:_,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},C={args:{captionPlain:`Start`,divider:`both`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h,{children:(0,b.jsxs)(d,{children:[(0,b.jsx)(c,{scope:`col`,verticalAlignment:`start`,children:`Header A`}),(0,b.jsx)(c,{scope:`col`,verticalAlignment:`start`,children:`Header B`})]})}),(0,b.jsx)(g,{children:(0,b.jsxs)(d,{children:[(0,b.jsx)(c,{scope:`row`,verticalAlignment:`start`,children:`Comp 1`}),(0,b.jsx)(m,{verticalAlignment:`start`,children:(0,b.jsx)(i,{children:`Click`})})]})})]})},render:e=>(0,b.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,b.jsx)(o,{semantic:`informational`,size:`small`,icon:`none`,children:`Start`}),(0,b.jsx)(_,{...e})]})},w={args:{captionPlain:`(Default) Center`,divider:`both`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h,{children:(0,b.jsxs)(d,{children:[(0,b.jsx)(c,{scope:`col`,verticalAlignment:`center`,children:`Header A`}),(0,b.jsx)(c,{scope:`col`,verticalAlignment:`center`,children:`Header B`})]})}),(0,b.jsx)(g,{children:(0,b.jsxs)(d,{children:[(0,b.jsx)(c,{scope:`row`,verticalAlignment:`center`,children:`Comp 1`}),(0,b.jsx)(m,{verticalAlignment:`center`,children:(0,b.jsx)(i,{children:`Click`})})]})})]})},render:e=>(0,b.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,b.jsx)(o,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Center`}),(0,b.jsx)(_,{...e})]})},T={args:{captionPlain:`End`,divider:`both`,children:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h,{children:(0,b.jsxs)(d,{children:[(0,b.jsx)(c,{scope:`col`,verticalAlignment:`end`,children:`Header A`}),(0,b.jsx)(c,{scope:`col`,verticalAlignment:`end`,children:`Header B`})]})}),(0,b.jsx)(g,{children:(0,b.jsxs)(d,{children:[(0,b.jsx)(c,{scope:`row`,verticalAlignment:`end`,children:`Comp 1`}),(0,b.jsx)(m,{verticalAlignment:`end`,children:(0,b.jsx)(i,{children:`Click`})})]})})]})},render:e=>(0,b.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,b.jsx)(o,{semantic:`informational`,size:`small`,icon:`none`,children:`End`}),(0,b.jsx)(_,{...e})]})},E=[`Start`,`DefaultCenter`,`End`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}}})))()}export{y as a,D as i,T as n,C as r,w as t};