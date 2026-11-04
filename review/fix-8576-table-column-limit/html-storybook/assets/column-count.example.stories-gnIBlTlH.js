import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-DxEab4p_.js";import{n,t as r}from"./infotext-DisceqBQ.js";import{n as i,t as a}from"./table-BgRCZuWg.js";import{n as o,s,t as c}from"./data-Dm4OdV1Q.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{n(),i(),s(),l=t(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/DBTable/Column Count`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},f={args:{"data-testid":`table-21-columns`,captionPlain:`21 Columns`,data:c},render:e=>(0,l.jsxs)(`div`,{style:{inlineSize:`100%`,display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`21 Columns`}),(0,l.jsx)(a,{...e})]})},p={args:{"data-testid":`table-50-columns`,captionPlain:`50 Columns`,data:o},render:e=>(0,l.jsxs)(`div`,{style:{inlineSize:`100%`,display:`flex`,flexDirection:`column`},children:[(0,l.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`50 Columns`}),(0,l.jsx)(a,{...e})]})},m=[`Columns21`,`Columns50`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "table-21-columns",
    "captionPlain": "21 Columns",
    "data": columnCount21Table
  },
  render: (properties: any) => <div style={{
    inlineSize: '100%',
    display: 'flex',
    flexDirection: 'column'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    21 Columns
                </DBInfotext><DBTable {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "table-50-columns",
    "captionPlain": "50 Columns",
    "data": columnCount50Table
  },
  render: (properties: any) => <div style={{
    inlineSize: '100%',
    display: 'flex',
    flexDirection: 'column'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    50 Columns
                </DBInfotext><DBTable {...properties} /></div>
}`,...p.parameters?.docs?.source}}}})))()}h();export{f as Columns21,p as Columns50,m as __namedExportsOrder,d as default};