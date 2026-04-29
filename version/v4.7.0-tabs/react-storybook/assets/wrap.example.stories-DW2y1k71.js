import{n as e}from"./chunk-DnJy8xQt.js";import{t}from"./jsx-runtime-BpX3lQ6F.js";import{m as n,t as r}from"./src-CXJdFFf7.js";var i,a,o,s,c,l;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBNavigationItem/Wrap`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClick:a()},argTypes:{disabled:{control:`boolean`},active:{control:`boolean`},showIcon:{control:`boolean`},width:{control:`select`,options:[`full`,`auto`]},wrap:{control:`boolean`},text:{control:`text`},subNavigationExpanded:{control:`boolean`},backButtonId:{control:`text`},backButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClick:{action:`onClick`}}},s={args:{children:(0,i.jsx)(`a`,{href:`#`,children:`No Wrap (Default)`})},render:e=>(0,i.jsx)(`ul`,{children:(0,i.jsx)(n,{...e})})},c={args:{icon:`x_placeholder`,subNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{subNavigation:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n,{children:(0,i.jsx)(`a`,{href:`#`,children:`Sub-Sub-Navi-Item 1`})}),(0,i.jsx)(n,{children:(0,i.jsx)(`a`,{href:`#`,children:`Sub-Sub-Navi-Item 2`})})]}),children:`Sub-Navi-Item 1`}),(0,i.jsx)(n,{children:(0,i.jsx)(`a`,{href:`#`,children:`Sub-Navi-Item 2`})})]}),showIcon:!0,wrap:!0,children:`This is a very long text that is broken into multiple lines.`},render:e=>(0,i.jsx)(`ul`,{style:{width:`200px`},children:(0,i.jsx)(n,{...e})})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">No Wrap (Default)</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "x_placeholder",
    "subNavigation": <>
                            <DBNavigationItem subNavigation={<>
                                        <DBNavigationItem>
                                            <a href="#">Sub-Sub-Navi-Item 1</a>
                                        </DBNavigationItem>
                                        <DBNavigationItem>
                                            <a href="#">Sub-Sub-Navi-Item 2</a>
                                        </DBNavigationItem>
                                    </>}>
                                Sub-Navi-Item 1
                            </DBNavigationItem>
                            <DBNavigationItem>
                                <a href="#">Sub-Navi-Item 2</a>
                            </DBNavigationItem>
                        </>,
    "showIcon": true,
    "wrap": true,
    "children": "This is a very long text that is broken into multiple lines."
  },
  render: (properties: any) => <ul style={{
    width: '200px'
  }}><DBNavigationItem {...properties} /></ul>
}`,...c.parameters?.docs?.source}}},l=[`DefaultFalse`,`True`]}))();export{s as DefaultFalse,c as True,l as __namedExportsOrder,o as default};