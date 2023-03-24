## Vue

To get DBInput work with `v-model` you have to use v-model argument syntax:

```ts
<DBInput
	label="Textlabel"
	placeholder="Start"
	v-model:value="vModelTest"
></DBInput>
```

or using on-change listener:

```ts
<DBInput label="Textlabel" placeholder="Start" :value="modelAndChange" :on-change="($event) => { modelAndChange = $event.target.value;
}"/> {{ modelAndChange }}
```
