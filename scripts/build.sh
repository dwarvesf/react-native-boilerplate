#!/usr/bin/env bash 

APP_ENV="develop"
APP_OS="ios"
DEVICE_TYPE="simulator"
CONFIGURATION="Debug"
DEVICE_NAME="iPhone 13 mini"
APP_ID="com.rnboiler.dev"
SCHEME="Develop"
VARIANT="develop"

optspec=":hv-:"

while getopts "$optspec" optchar; do
    case "${optchar}" in
        -)
            case "${OPTARG}" in
                # device)
                #     DEVICE_TYPE="device";
                #     DEVICE_NAME="${!OPTIND}"; 
                #     ;;
                device=*)
                    DEVICE_TYPE="device";
                    DEVICE_NAME=${OPTARG#*=}
                    ;;
                # simulator)
                #     DEVICE_TYPE="simulator";
                #     DEVICE_NAME="${!OPTIND}"; 
                #     ;;
                simulator=*)
                    DEVICE_TYPE="simulator";
                    DEVICE_NAME=${OPTARG#*=}
                    ;;
                staging)
                    SCHEME="Staging";
                    VARIANT="staging"
                    APP_ID="com.rnboiler.staging"
                    ;;
                beta)
                    SCHEME="Beta";
                    VARIANT="beta"
                    APP_ID="com.rnboiler.beta"
                    ;;
                production)
                    SCHEME="RNBoiler";
                    VARIANT="production"
                    APP_ID="com.rnboiler"
                    ;;
                release)
                    CONFIGURATION="Release";
                    ;;
                android)
                    APP_OS="android";
                    ;;
                *)
                    if [ "$OPTERR" = 1 ] && [ "${optspec:0:1}" != ":" ]; then
                        echo "Unknown option3 --${OPTARG}" >&2
                    fi
                    ;;
            esac;;
        *)
            if [ "$OPTERR" != 1 ] || [ "${optspec:0:1}" = ":" ]; then
                echo "Non-option argument: '-${OPTARG}'" >&2
            fi
            ;;
    esac
done

if [[ $APP_OS == "ios" ]]; then
    npx react-native run-ios --scheme "$SCHEME" --"$DEVICE_TYPE"="$DEVICE_NAME" --configuration "$CONFIGURATION"
fi

if [[ $APP_OS == "android" ]]; then
    npx react-native run-android --variant="$VARIANT$CONFIGURATION" --appId="$APP_ID"
fi