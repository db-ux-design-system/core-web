import{n as e}from"./iframe-MOSXutLl.js";import{n as t,t as n}from"./button-CllPzggA.js";import{n as r,t as i}from"./popover-BytRQx99.js";import{n as a}from"./rolldown-runtime-DkW27tQK.js";var o,s,c,l,u,d;function f(){return(f=a((()=>{t(),r(),o=e(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBPopover/Interaction`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{id:{control:`text`},spacing:{control:`select`,options:[`medium`,`small`,`large`,`none`]},placement:{control:`select`,options:[`top`,`bottom`,`top-start`,`top-end`,`bottom-start`,`bottom-end`,`left`,`right`,`left-start`,`left-end`,`right-start`,`right-end`]},gap:{control:`boolean`},animation:{control:`boolean`},delay:{control:`select`,options:[`none`,`slow`,`fast`]},width:{control:`select`,options:[`auto`,`fixed`]},open:{control:`boolean`},autofocus:{control:`boolean`}}},l={args:{animation:`disabled`,"data-testid":`popover`,trigger:(0,o.jsx)(n,{"data-testid":`button`,children:`Button`}),children:`Test`},render:e=>(0,o.jsx)(`div`,{className:`padding-box`,children:(0,o.jsx)(i,{...e})})},u={args:{animation:`disabled`,"data-testid":`controlled-popover`,open:!1,trigger:(0,o.jsx)(n,{"data-testid":`controlled-button`,children:`Button`}),children:`Test`},render:e=>(0,o.jsxs)(`div`,{className:`padding-box`,children:[(0,o.jsx)(n,{"data-testid":`toggle`,onClick:e=>toggle(),children:`Toggle`}),(0,o.jsx)(i,{...e})]})},d=[`Interaction`,`PopoverInteraction1`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "animation": "disabled",
    "data-testid": "popover",
    "trigger": <DBButton data-testid="button">Button</DBButton>,
    "children": "Test"
  },
  render: (properties: any) => <div className="padding-box"><DBPopover {...properties} /></div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "animation": "disabled",
    "data-testid": "controlled-popover",
    "open": false,
    "trigger": <DBButton data-testid="controlled-button">
                            Button
                        </DBButton>,
    "children": "Test"
  },
  render: (properties: any) => <div className="padding-box"><DBButton data-testid="toggle" onClick={event => toggle()}>
                    Toggle
                </DBButton><DBPopover {...properties} /></div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as Interaction,u as PopoverInteraction1,d as __namedExportsOrder,c as default};