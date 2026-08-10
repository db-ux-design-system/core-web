import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./infotext-Dp-pa13o.js";import{n as i,t as a}from"./table-BWe9KETj.js";import{a as o,t as s}from"./data-CA6wTzZB.js";var c,l,u,d,f,p;function m(){return(m=e((()=>{n(),i(),o(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBTable/Width`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},d={args:{width:`full`,captionPlain:`(Default) Full`,data:s},render:e=>(0,c.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`},children:[(0,c.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Full`}),(0,c.jsx)(a,{...e})]})},f={args:{width:`auto`,captionPlain:`Auto`,data:s},render:e=>(0,c.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`},children:[(0,c.jsx)(r,{semantic:`informational`,size:`small`,icon:`none`,children:`Auto`}),(0,c.jsx)(a,{...e})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "captionPlain": "(Default) Full",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    (Default) Full
                </DBInfotext><DBTable {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "auto",
    "captionPlain": "Auto",
    "data": defaultTable
  },
  render: (properties: any) => <div style={{
    inlineSize: '300px',
    display: 'flex',
    flexDirection: 'column'
  }}><DBInfotext semantic="informational" size="small" icon="none">
                    Auto
                </DBInfotext><DBTable {...properties} /></div>
}`,...f.parameters?.docs?.source}}},p=[`DefaultFull`,`Auto`]})))()}m();export{f as Auto,d as DefaultFull,p as __namedExportsOrder,u as default};