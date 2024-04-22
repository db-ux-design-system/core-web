# Screen Automated Reader (ScAR 🦁🔥💀)

Test with this:

## Windows

```shell
npm run test:screen-reader:windows-latest --workspace=react-showcase -- --ui
```

## Gotchas

-   Local: Don't switch windows while testing, it will capture only your current screen
-   We should avoid auto-generate tests, because they take a lot of time.
-   Nvda `next` is equivalent of executing Down Arrow - Won't work with radio/select as you might expect
