import{n as e}from"./iframe-DcvCoVHV.js";import{n as t,t as n}from"./radio-DwQa3zFp.js";import{n as r}from"./rolldown-runtime-DkW27tQK.js";var i,a,o,s,c,l,u;function d(){return(d=r((()=>{t(),i=e(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBRadio/Density`,component:n,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`ContactFunctional`,value:`email`,children:`Email`},render:e=>(0,i.jsxs)(`fieldset`,{"data-density":`functional`,children:[(0,i.jsx)(`legend`,{children:`Functional - choose a contact method`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`ContactFunctional`,value:`phone`,children:`Phone`}),(0,i.jsx)(n,{name:`ContactFunctional`,value:`post`,children:`Post`})]})},c={args:{name:`ContactRegular`,value:`email`,children:`Email`},render:e=>(0,i.jsxs)(`fieldset`,{"data-density":`regular`,children:[(0,i.jsx)(`legend`,{children:`(Default) Regular - choose a contact method`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`ContactRegular`,value:`phone`,children:`Phone`}),(0,i.jsx)(n,{name:`ContactRegular`,value:`post`,children:`Post`})]})},l={args:{name:`ContactExpressive`,value:`email`,children:`Email`},render:e=>(0,i.jsxs)(`fieldset`,{"data-density":`expressive`,children:[(0,i.jsx)(`legend`,{children:`Expressive - choose a contact method`}),(0,i.jsx)(n,{...e}),(0,i.jsx)(n,{name:`ContactExpressive`,value:`phone`,children:`Phone`}),(0,i.jsx)(n,{name:`ContactExpressive`,value:`post`,children:`Post`})]})},u=[`Functional`,`DefaultRegular`,`Expressive`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "ContactFunctional",
    "value": "email",
    "children": "Email"
  },
  render: (properties: any) => <fieldset data-density="functional"><legend>Functional - choose a contact method</legend><DBRadio {...properties} /><DBRadio name="ContactFunctional" value="phone">
                    Phone
                </DBRadio><DBRadio name="ContactFunctional" value="post">
                    Post
                </DBRadio></fieldset>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "ContactRegular",
    "value": "email",
    "children": "Email"
  },
  render: (properties: any) => <fieldset data-density="regular"><legend>(Default) Regular - choose a contact method</legend><DBRadio {...properties} /><DBRadio name="ContactRegular" value="phone">
                    Phone
                </DBRadio><DBRadio name="ContactRegular" value="post">
                    Post
                </DBRadio></fieldset>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "ContactExpressive",
    "value": "email",
    "children": "Email"
  },
  render: (properties: any) => <fieldset data-density="expressive"><legend>Expressive - choose a contact method</legend><DBRadio {...properties} /><DBRadio name="ContactExpressive" value="phone">
                    Phone
                </DBRadio><DBRadio name="ContactExpressive" value="post">
                    Post
                </DBRadio></fieldset>
}`,...l.parameters?.docs?.source}}}})))()}d();export{c as DefaultRegular,l as Expressive,s as Functional,u as __namedExportsOrder,o as default};