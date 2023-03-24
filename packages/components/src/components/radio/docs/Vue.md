## Vue

To get DBRadio work with `v-model` you have to use v-model argument syntax:

```ts
<DBRadio label="Textlabel" v-model:checked="vModelTest"></DBRadio>
```

or using on-change listener:

```ts
<DBRadio label="Textlabel" :value="modelAndChange" :on-change="($event) => { modelAndChange = $event.target.value;
}"/> {{ modelAndChange }}
```
