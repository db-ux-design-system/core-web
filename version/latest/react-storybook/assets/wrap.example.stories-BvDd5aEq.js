import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as t}from"./navigation-item-BPXPX-HA.js";import"./index-D2E5Z_bU.js";import"./iframe-DoczXm3P.js";import"./preload-helper-Bhe8V244.js";import"./constants-C-ysBZRi.js";import"./floating-components-DAXMbqch.js";import"./button-CBczwwny.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,h={title:"Components/DBNavigationItem/Wrap",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},a={args:{children:e.jsx("a",{href:"#",children:"No Wrap (Default)"})},render:r=>e.jsx("ul",{children:e.jsx(t,{...r})})},o={args:{icon:"x_placeholder",subNavigation:e.jsxs(e.Fragment,{children:[e.jsx(t,{subNavigation:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:e.jsx("a",{href:"#",children:"Sub-Sub-Navi-Item 1"})}),e.jsx(t,{children:e.jsx("a",{href:"#",children:"Sub-Sub-Navi-Item 2"})})]}),children:"Sub-Navi-Item 1"}),e.jsx(t,{children:e.jsx("a",{href:"#",children:"Sub-Navi-Item 2"})})]}),showIcon:!0,wrap:!0,children:"This is a very long text that is broken into multiple lines."},render:r=>e.jsx("ul",{style:{width:"200px"},children:e.jsx(t,{...r})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">No Wrap (Default)</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const x=["DefaultFalse","True"];export{a as DefaultFalse,o as True,x as __namedExportsOrder,h as default};
