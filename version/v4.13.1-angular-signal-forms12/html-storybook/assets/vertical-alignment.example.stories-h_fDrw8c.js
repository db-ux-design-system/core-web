import{i as e}from"./preload-helper-BmzR06O3.js";import{t}from"./iframe-tUhO94Tf.js";import{c as n,f as r,ft as i,g as a,gt as o,m as s,o as c,t as l,v as u}from"./src-D5ltMKUB.js";var d,f,p,m,h,g,_;e((()=>{l(),d=t(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/DBTable/Vertical Alignment`,component:c,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},m={args:{captionPlain:`Start`,divider:`both`,children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{children:(0,d.jsxs)(s,{children:[(0,d.jsx)(a,{scope:`col`,verticalAlignment:`start`,children:`Header A`}),(0,d.jsx)(a,{scope:`col`,verticalAlignment:`start`,children:`Header B`})]})}),(0,d.jsx)(r,{children:(0,d.jsxs)(s,{children:[(0,d.jsx)(a,{scope:`row`,verticalAlignment:`start`,children:`Comp 1`}),(0,d.jsx)(u,{verticalAlignment:`start`,children:(0,d.jsx)(o,{children:`Click`})})]})})]})},render:e=>(0,d.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,d.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Start`}),(0,d.jsx)(c,{...e})]})},h={args:{captionPlain:`(Default) Center`,divider:`both`,children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{children:(0,d.jsxs)(s,{children:[(0,d.jsx)(a,{scope:`col`,verticalAlignment:`center`,children:`Header A`}),(0,d.jsx)(a,{scope:`col`,verticalAlignment:`center`,children:`Header B`})]})}),(0,d.jsx)(r,{children:(0,d.jsxs)(s,{children:[(0,d.jsx)(a,{scope:`row`,verticalAlignment:`center`,children:`Comp 1`}),(0,d.jsx)(u,{verticalAlignment:`center`,children:(0,d.jsx)(o,{children:`Click`})})]})})]})},render:e=>(0,d.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,d.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Center`}),(0,d.jsx)(c,{...e})]})},g={args:{captionPlain:`End`,divider:`both`,children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{children:(0,d.jsxs)(s,{children:[(0,d.jsx)(a,{scope:`col`,verticalAlignment:`end`,children:`Header A`}),(0,d.jsx)(a,{scope:`col`,verticalAlignment:`end`,children:`Header B`})]})}),(0,d.jsx)(r,{children:(0,d.jsxs)(s,{children:[(0,d.jsx)(a,{scope:`row`,verticalAlignment:`end`,children:`Comp 1`}),(0,d.jsx)(u,{verticalAlignment:`end`,children:(0,d.jsx)(o,{children:`Click`})})]})})]})},render:e=>(0,d.jsxs)(`div`,{style:{minInlineSize:`300px`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--db-spacing-fixed-md)`},children:[(0,d.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`End`}),(0,d.jsx)(c,{...e})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Start`,`DefaultCenter`,`End`]}))();export{h as DefaultCenter,g as End,m as Start,_ as __namedExportsOrder,p as default};