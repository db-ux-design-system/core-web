import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{n as r,t as i}from"./button-KkPyUB9O.js";import{n as a,t as o}from"./popover-N5RKurzK.js";var s=t({Interaction:()=>d,PopoverInteraction1:()=>f,__namedExportsOrder:()=>p,default:()=>u}),c,l,u,d,f,p;function m(){return(m=e((()=>{r(),a(),c=n(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/DBPopover/Interaction`,component:o,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},d={args:{animation:`disabled`,"data-testid":`popover`,trigger:(0,c.jsx)(i,{"data-testid":`button`,children:`Button`}),children:`Test`},render:e=>(0,c.jsx)(`div`,{children:(0,c.jsx)(o,{...e})})},f={args:{animation:`disabled`,"data-testid":`controlled-popover`,open:!1,trigger:(0,c.jsx)(i,{"data-testid":`controlled-button`,children:`Button`}),children:`Test`},render:e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(i,{"data-testid":`toggle`,onClick:e=>toggle(),children:`Toggle`}),(0,c.jsx)(o,{...e})]})},p=[`Interaction`,`PopoverInteraction1`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "animation": "disabled",
    "data-testid": "popover",
    "trigger": <DBButton data-testid="button">Button</DBButton>,
    "children": "Test"
  },
  render: (properties: any) => <div><DBPopover {...properties} /></div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "animation": "disabled",
    "data-testid": "controlled-popover",
    "open": false,
    "trigger": <DBButton data-testid="controlled-button">
                            Button
                        </DBButton>,
    "children": "Test"
  },
  render: (properties: any) => <div><DBButton data-testid="toggle" onClick={event => toggle()}>
                    Toggle
                </DBButton><DBPopover {...properties} /></div>
}`,...f.parameters?.docs?.source}}}})))()}export{s as i,f as n,m as r,d as t};