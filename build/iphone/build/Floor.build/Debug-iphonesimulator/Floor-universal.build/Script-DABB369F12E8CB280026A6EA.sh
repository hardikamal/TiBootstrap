#!/bin/sh
if [ "x$TITANIUM_CLI_XCODEBUILD" == "x" ]; then
    /usr/local/bin/node "/usr/bin/ti" build --platform iphone --sdk 3.2.0.GA --no-prompt --no-progress-bars --no-banner --no-colors --build-only --xcode
    exit $?
else
    echo "skipping pre-compile phase"
fi
