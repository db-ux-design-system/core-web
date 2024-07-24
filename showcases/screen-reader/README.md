# Screen Automated Reader (ScAR 🦁🔥💀)

Start a test with these commands:

## MacOS

```shell
npm run test:screen-reader:macos --workspace=react-showcase -- -- --ui
```

## Windows

```shell
npm run test:screen-reader:windows --workspace=react-showcase -- -- --ui
```

## Gotchas

-   Local: Don't switch in between your windows while testing, it will capture only your current screen
-   We should avoid auto-generate tests, because they take a lot of time.
-   NVDAs `next` command is equivalent of executing Down Arrow - Won't work with radio/select as you might expect
-   One simple test takes about 1 minute in CI ⬅ so you should only provide test important things

## More information

We use this [survey](https://webaim.org/projects/screenreadersurvey10/) to reduce amount of tests (only for VoiceOver and NVDA).

> Most common screen reader and browser combinations:

| Screen Reader & Browser | # of Respondents | % of Respondents |
| ----------------------- | ---------------- | ---------------- |
| NVDA with Chrome        | 323              | 21.3%            |
| NVDA with Firefox       | 152              | 10.0%            |
| VoiceOver with Safari   | 107              | 7.0%             |
| NVDA with Edge          | 75               | 5.0%             |
| VoiceOver with Chrome   | 30               | 2.0%             |

> What operating system are you on when using your primary desktop/laptop screen reader?

| Response | # of respondents | % of respondents |
| -------- | ---------------- | ---------------- |
| Windows  | 1311             | 86.1%            |
| Mac      | 146              | 9.6%             |
| Linux    | 44               | 2.9%             |
| Other    | 21               | 1.4%             |

Conclusion: We only test Chrome for Windows and Safari for MacOS because these are the most common combinations.
