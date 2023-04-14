#!/usr/bin/env bash 

RED='\033[0;31m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NO_COLOR='\033[0m'

APP_ENV="develop"
APP_OS=""
ACTION="history"

optspec=":hv-:"

while getopts "$optspec" optchar; do
    case "${optchar}" in
        -)
            case "${OPTARG}" in
                action=*)
                    ACTION=${OPTARG#*=}
                    ;;
                staging)
                    APP_ENV="staging";
                    ;;
                beta)
                    APP_ENV="beta";
                    ;;
                production)
                    APP_ENV="production";
                    ;;
                android)
                    APP_OS="android";
                    ;;
                ios)
                    APP_OS="ios";
                    ;;
                *)
                    if [ "$OPTERR" = 1 ] && [ "${optspec:0:1}" != ":" ]; then
                        echo ie "${YELLOW}Unknown option3 --${OPTARG}" >&2
                    fi
                    ;;
            esac;;
        *)
            if [ "$OPTERR" != 1 ] || [ "${optspec:0:1}" = ":" ]; then
                echo -e "${YELLOW}Non-option argument: '-${OPTARG}'" >&2
            fi
            ;;
    esac
done

if [[ $APP_OS != 'android' && $APP_OS != 'ios' ]]; then
    echo -e "${RED}Please input ${CYAN}[platform] ${RED}by add ${CYAN}--android ${YELLOW}or ${CYAN}--ios"
else
    if [[ $APP_OS != "android" ]]; then
        RN_RELEASE_TYPE=.env.$APP_ENV note=${NOTE} fastlane ios codepush ${ACTION}:
    fi

    if [[ $APP_OS != "ios" ]]; then
        RN_RELEASE_TYPE=.env.$APP_ENV note=${NOTE} fastlane android codepush ${ACTION}:
    fi
fi