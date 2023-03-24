## Angular

Third party controls require a ControlValueAccessor to function with angular forms. Adding an `ngDefaultControl` attribute will allow them to use that directive.
[Further information](https://stackoverflow.com/a/46465959)

```ts
<DBInput ngDefaultControl [(ngModel)]="value"></DBInput>
```
