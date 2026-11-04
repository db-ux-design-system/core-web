import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./infotext-BfQz6CV5.js";import{n as i,t as a}from"./table-BQnHWMBf.js";import{c as o,n as s,r as c,t as l}from"./data-CraBHby1.js";var u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),o(),u=t(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBTable/Column Count`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},p={args:{"data-testid":`table-20-columns`,captionPlain:`Columns 20`,data:l,showCaption:!0},render:e=>(0,u.jsxs)(`div`,{style:{inlineSize:`100%`,display:`flex`,flexDirection:`column`},children:[(0,u.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Columns 20`}),(0,u.jsx)(a,{...e})]})},m={args:{"data-testid":`table-21-columns`,captionPlain:`Columns 21`,data:c,showCaption:!0},render:e=>(0,u.jsxs)(`div`,{style:s,children:[(0,u.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Columns 21`}),(0,u.jsx)(a,{...e})]})},h=[`Columns20`,`Columns21`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "table-21-columns",
    "captionPlain": "Columns 21",
    "data": columnCount21Table,
    "showCaption": true
  },
  render: (properties: any) => <div style={columnCount21Style}><DBInfotext semantic="informational" size="small" icon="none">
                    Columns 21
                </DBInfotext><DBTable {...properties} /></div>
}`,...m.parameters?.docs?.source}}}})))()}g();export{p as Columns20,m as Columns21,h as __namedExportsOrder,f as default};