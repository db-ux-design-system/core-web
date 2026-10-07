import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./notification-DMPj_pGb.js";var r,i,a,o;function s(){return(s=e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBNotification/Interaction`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:r()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},a={args:{"data-testid":`notification`,closeable:!0,onClose:r(),default:`Test`},render:e=>({components:{DBNotification:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  >
    <template v-if="!closed">
      <DBNotification v-bind="args"   >${e.default}</DBNotification>
    </template>
    
    <div data-sb-ignore="true"   >
    <template v-if="closed">
      <span data-testid="notification-closed"   >closed</span>
    </template>
    
    </div></div>`})},o=[`Interaction`],a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "data-testid": "notification",
    "closeable": true,
    "onClose": fn(),
    "default": \`Test\`
  },
  render: (args: any) => ({
    components: {
      DBNotification
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  >
    <template v-if="!closed">
      <DBNotification v-bind="args"   >\${args.default}</DBNotification>
    </template>
    
    <div data-sb-ignore="true"   >
    <template v-if="closed">
      <span data-testid="notification-closed"   >closed</span>
    </template>
    
    </div></div>\`
  })
}`,...a.parameters?.docs?.source}}}})))()}s();export{a as Interaction,o as __namedExportsOrder,i as default};