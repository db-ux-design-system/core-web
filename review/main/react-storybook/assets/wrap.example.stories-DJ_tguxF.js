import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./navigation-item-mMXcfrmX.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNavigationItem/Wrap`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{text:`No Wrap (Default)`},render:e=>(0,i.jsx)(`ul`,{children:(0,i.jsx)(r,{...e})})},c={args:{text:`This is a very long text that is broken into multiple lines.`,icon:`x_placeholder`,subNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{text:`Sub-Navi-Item 1`,subNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{text:`Sub-Sub-Navi-Item 1`}),(0,i.jsx)(r,{text:`Sub-Sub-Navi-Item 2`})]})}),(0,i.jsx)(r,{text:`Sub-Navi-Item 2`})]}),showIcon:!0,wrap:!0},render:e=>(0,i.jsx)(`ul`,{style:{width:`200px`},children:(0,i.jsx)(r,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "text": "No Wrap (Default)"
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "text": "This is a very long text that is broken into multiple lines.",
    "icon": "x_placeholder",
    "subNavigation": <>
                            <DBNavigationItem text="Sub-Navi-Item 1" subNavigation={<>
                                        <DBNavigationItem text="Sub-Sub-Navi-Item 1"></DBNavigationItem>
                                        <DBNavigationItem text="Sub-Sub-Navi-Item 2"></DBNavigationItem>
                                    </>}></DBNavigationItem>
                            <DBNavigationItem text="Sub-Navi-Item 2"></DBNavigationItem>
                        </>,
    "showIcon": true,
    "wrap": true
  },
  render: (properties: any) => <ul style={{
    width: '200px'
  }}><DBNavigationItem {...properties} /></ul>
}`,...c.parameters?.docs?.source}}},l=[`DefaultFalse`,`True`]})))()}u();export{s as DefaultFalse,c as True,l as __namedExportsOrder,o as default};