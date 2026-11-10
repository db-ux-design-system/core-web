import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./infotext-DtfQZFlK.js";import{n as i,t as a}from"./table-8ouOLxBg.js";import{n as o,s,t as c}from"./data-DTwDjW8k.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),s(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/DBTable/Column Count`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},f={args:{"data-testid":`table-20-columns`,captionPlain:`Columns 20`,data:c,showCaption:!0},render:e=>(0,l.jsxs)(`div`,{style:{inlineSize:`100%`,display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Columns 20`}),(0,l.jsx)(a,{...e})]})},p={args:{"data-testid":`table-21-columns`,captionPlain:`Columns 21`,data:o,showCaption:!0},render:e=>(0,l.jsxs)(`div`,{style:{inlineSize:`100%`,display:`flex`,flexDirection:`column`,"--db-table-columns":`21`},children:[(0,l.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Columns 21`}),(0,l.jsx)(a,{...e})]})},m=[`Columns20`,`Columns21`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "table-20-columns",
    "captionPlain": "Columns 20",
    "data": columnCount20Table,
    "showCaption": true
  },
  render: (properties: any) => <div style={{
    inlineSize: '100%',
    display: 'flex',
    flexDirection: 'column'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Columns 20
                </DBInfotext><DBTable {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "table-21-columns",
    "captionPlain": "Columns 21",
    "data": columnCount21Table,
    "showCaption": true
  },
  render: (properties: any) => <div style={{
    inlineSize: '100%',
    display: 'flex',
    flexDirection: 'column',
    '--db-table-columns': '21'
  } as any}><DBInfotext semantic="informational" size="small" icon="none">
                    Columns 21
                </DBInfotext><DBTable {...properties} /></div>
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as Columns20,p as Columns21,m as __namedExportsOrder,d as default};