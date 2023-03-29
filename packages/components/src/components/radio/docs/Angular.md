## Angular

Third party controls require a `ControlValueAccessor` to function with Angular forms. Adding an `ngDefaultControl` attribute will allow them to use that directive.
[Further information](https://stackoverflow.com/a/46465959)

```typescript
<DBRadio ngDefaultControl [(ngModel)]="value"></DBRadio>
```
