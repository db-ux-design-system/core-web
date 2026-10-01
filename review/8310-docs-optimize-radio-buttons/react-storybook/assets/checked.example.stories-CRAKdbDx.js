import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./radio-Cg7DF_U-.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/DBRadio/Checked`,component:r,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{name:{control:`text`},value:{control:`text`},disabled:{control:`boolean`},checked:{control:`boolean`},validation:{control:`select`,options:[`invalid`,`valid`,`no-validation`]},size:{control:`select`,options:[`small`,`medium`]},required:{control:`boolean`},showLabel:{control:`boolean`},showRequiredAsterisk:{control:`boolean`},label:{control:`text`},form:{control:`text`},ariaDescribedBy:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},s={args:{name:`Newsletter`,value:`daily`,children:`Daily digest`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`(Default) false, nothing checked - choose a newsletter`}),(0,i.jsx)(r,{...e}),(0,i.jsx)(r,{name:`Newsletter`,value:`weekly`,children:`Weekly summary`}),(0,i.jsx)(r,{name:`Newsletter`,value:`none`,children:`No newsletter`})]})},c={args:{name:`NewsletterChecked`,value:`daily`,children:`Daily digest`},render:e=>(0,i.jsxs)(`fieldset`,{children:[(0,i.jsx)(`legend`,{children:`True, one option checked - choose a newsletter`}),(0,i.jsx)(r,{...e}),(0,i.jsx)(r,{name:`NewsletterChecked`,value:`weekly`,checked:!0,children:`Weekly summary`}),(0,i.jsx)(r,{name:`NewsletterChecked`,value:`none`,children:`No newsletter`})]})},l=[`DefaultNothingchecked`,`Oneoptionchecked`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "Newsletter",
    "value": "daily",
    "children": "Daily digest"
  },
  render: (properties: any) => <fieldset><legend>
                    (Default) false, nothing checked - choose a newsletter
                </legend><DBRadio {...properties} /><DBRadio name="Newsletter" value="weekly">
                    Weekly summary
                </DBRadio><DBRadio name="Newsletter" value="none">
                    No newsletter
                </DBRadio></fieldset>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "name": "NewsletterChecked",
    "value": "daily",
    "children": "Daily digest"
  },
  render: (properties: any) => <fieldset><legend>True, one option checked - choose a newsletter</legend><DBRadio {...properties} /><DBRadio name="NewsletterChecked" value="weekly" checked>
                    Weekly summary
                </DBRadio><DBRadio name="NewsletterChecked" value="none">
                    No newsletter
                </DBRadio></fieldset>
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as DefaultNothingchecked,c as Oneoptionchecked,l as __namedExportsOrder,o as default};