import{i as e}from"./preload-helper-BGAV1obs.js";import{t}from"./iframe-CTejPvWD.js";import{ft as n,o as r,t as i}from"./src-COskv8vw.js";import{a,t as o}from"./data-BGjNdLEW.js";var s,c,l,u,d,f;e((()=>{i(),a(),s=t(),{fn:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/DBTable/Width`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},caption:{control:`text`},captionPlain:{control:`text`},data:{control:`object`},divider:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},showCaption:{control:`boolean`},size:{control:`select`,options:[`x-small`,`small`,`medium`,`large`]},variant:{control:`select`,options:[`flat`,`zebra`,`spaced`]},mobileVariant:{control:`select`,options:[`table`,`list`]},stickyHeader:{control:`select`,options:[`none`,`both`,`horizontal`,`vertical`]},columnSizes:{control:`object`}}},u={args:{width:`full`,captionPlain:`(Default) Full`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`(Default) Full`}),(0,s.jsx)(r,{...e})]})},d={args:{width:`auto`,captionPlain:`Auto`,data:o},render:e=>(0,s.jsxs)(`div`,{style:{inlineSize:`300px`,display:`flex`,flexDirection:`column`},children:[(0,s.jsx)(n,{semantic:`informational`,size:`small`,icon:`none`,children:`Auto`}),(0,s.jsx)(r,{...e})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`DefaultFull`,`Auto`]}))();export{d as Auto,u as DefaultFull,f as __namedExportsOrder,l as default};