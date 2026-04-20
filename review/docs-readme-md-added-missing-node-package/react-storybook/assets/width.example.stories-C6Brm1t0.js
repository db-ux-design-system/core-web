import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-DnaggZxp.js";import{m as n,t as r}from"./src-DK5dTc4z.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNavigationItem/Width`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{children:(0,i.jsx)(`a`,{href:`#`,children:`(Default) Auto`})},render:e=>(0,i.jsx)(`ul`,{style:{width:`400px`},children:(0,i.jsx)(n,{...e})})},c={args:{width:`full`,children:(0,i.jsx)(`a`,{href:`#`,children:`Full`})},render:e=>(0,i.jsx)(`ul`,{style:{width:`400px`},children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">(Default) Auto</a>
  },
  render: (properties: any) => <ul style={{
    width: '400px'
  }}><DBNavigationItem {...properties} /></ul>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "children": <a href="#">Full</a>
  },
  render: (properties: any) => <ul style={{
    width: '400px'
  }}><DBNavigationItem {...properties} /></ul>
}`,...c.parameters?.docs?.source}}},l=[`DefaultAuto`,`Full`]}))();export{s as DefaultAuto,c as Full,l as __namedExportsOrder,o as default};