# shin-webdriverio

A demo for WebDriverIO

## How to use

1. Install dependencies

```
npm install
```

2. Install Selenium Standalone

```
npm run install-selenium
```

3. Start Selenium Standalone Service

```
npm run start-selenium
```

4. Run test

```
npm run test
```

5. Generate Allure report

```
npm run generate-report
```

6. Open Allure report

```
npm run open-report
```

## Edge

* Latest version fix the bug, 'JSON format error: parameters object must contain pair with name "keysToSend"'

1. Upgrade Edge to latest version (79.0.309.68)

2. Download WebDriver for Edge (https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/#downloads)

3. Replace 17134-MicrosoftEdgeDriver.exe in the path (./node_modules/selenium-standalone/.selenium/edgedriver)s