import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./navigation-item-iks_Llii.js";import"./index-D2E5Z_bU.js";import"./iframe-DOGZb9UQ.js";import"./preload-helper-6AdaFMoN.js";import"./constants-C-ysBZRi.js";import"./floating-components-DAXMbqch.js";import"./button-BtsyxPWT.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBNavigationItem/Expanded",component:a,parameters:{layout:"centered"},tags:["autodocs"],args:{onClick:r()},argTypes:{disabled:{control:"boolean"},active:{control:"boolean"},showIcon:{control:"boolean"},width:{control:"select",options:["full","auto"]},wrap:{control:"boolean"},text:{control:"text"},subNavigationExpanded:{control:"boolean"},backButtonId:{control:"text"},backButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClick:{action:"onClick"}}},t={args:{children:e.jsx("a",{href:"#",children:"(Default) False"})},render:n=>e.jsx("ul",{children:e.jsx(a,{...n})})},o={args:{subNavigation:e.jsxs(e.Fragment,{children:[e.jsx(a,{subNavigation:e.jsx(e.Fragment,{children:e.jsx(a,{children:e.jsx("a",{href:"#",children:"Navigation-Item 2"})})}),children:"Also a navigation item with longer label"}),e.jsx(a,{children:e.jsx("a",{href:"#",children:"Navigation-Item 1"})})]}),children:"True"},render:n=>e.jsx("ul",{children:e.jsx(a,{...n})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "children": <a href="#">(Default) False</a>
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "subNavigation": <>
                            <DBNavigationItem subNavigation={<>
                                        <DBNavigationItem>
                                            <a href="#">Navigation-Item 2</a>
                                        </DBNavigationItem>
                                    </>}>
                                Also a navigation item with longer label
                            </DBNavigationItem>
                            <DBNavigationItem>
                                <a href="#">Navigation-Item 1</a>
                            </DBNavigationItem>
                        </>,
    "children": "True"
  },
  render: (properties: any) => <ul><DBNavigationItem {...properties} /></ul>
}`,...o.parameters?.docs?.source}}};const h=["DefaultFalse","True"];export{t as DefaultFalse,o as True,h as __namedExportsOrder,g as default};
