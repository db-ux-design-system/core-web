import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./infotext-BrqREugs.js";import{n as a,t as o}from"./table-84tXUIo-.js";import{n as s,s as c,t as l}from"./data-IsZHFUvi.js";var u=t({Columns20:()=>m,Columns21:()=>h,__namedExportsOrder:()=>g,default:()=>p}),d,f,p,m,h,g;function _(){return(_=e((()=>{r(),a(),c(),d=n(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={title:`Components/DBTable/Column Count`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},m={args:{"data-testid":`table-20-columns`,captionPlain:`Columns 20`,data:l,showCaption:!0},render:e=>(0,d.jsxs)(`div`,{style:{inlineSize:`100%`,display:`flex`,flexDirection:`column`},children:[(0,d.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Columns 20`}),(0,d.jsx)(o,{...e})]})},h={args:{"data-testid":`table-21-columns`,captionPlain:`Columns 21`,data:s,showCaption:!0},render:e=>(0,d.jsxs)(`div`,{style:{inlineSize:`100%`,display:`flex`,flexDirection:`column`,"--db-table-columns":`21`},children:[(0,d.jsx)(i,{semantic:`informational`,size:`small`,icon:`none`,children:`Columns 21`}),(0,d.jsx)(o,{...e})]})},g=[`Columns20`,`Columns21`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}}})))()}export{_ as i,h as n,u as r,m as t};