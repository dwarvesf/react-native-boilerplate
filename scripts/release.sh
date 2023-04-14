#!/usr/bin/env bash 

RED='\033[0;31m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NO_COLOR='\033[0m'

APP_ENV="develop"
APP_OS=""
TYPE=""
NOTE=""
MANDATORY=false

optspec=":hv-:"

while getopts "$optspec" optchar; do
    case "${optchar}" in
        -)
            case "${OPTARG}" in
                note=*)
                    NOTE=${OPTARG#*=}
                    ;;
                soft)
                    TYPE="soft";
                    ;;
                hard)
                    TYPE="hard";
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
                m)
                    MANDATORY=true;
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

if [[ $TYPE != 'hard' && $TYPE != 'soft' ]]; then
    echo -e "${RED}Please input ${CYAN}[release type] ${RED}by add ${CYAN}--hard ${YELLOW}or ${CYAN}--soft"
elif [[ $NOTE == '' ]]; then
    echo -e "${RED}Please input ${CYAN}[release note] ${RED}by add ${CYAN}--note=\"something to release\""
else
    if [[ $APP_OS != "android" ]]; then
        if [[ $TYPE == 'hard' ]]; then
            RN_RELEASE_TYPE=.env.$APP_ENV note=${NOTE} fastlane ios release hard:
        else
            RN_RELEASE_TYPE=.env.$APP_ENV note=${NOTE} fastlane ios release soft: mandatory:${MANDATORY}
        fi
    fi

    if [[ $APP_OS != "ios" ]]; then
        if [[ $TYPE == 'hard' ]]; then
            RN_RELEASE_TYPE=.env.$APP_ENV note=${NOTE} fastlane android release hard:
        else
            RN_RELEASE_TYPE=.env.$APP_ENV note=${NOTE} fastlane android release soft: mandatory:${MANDATORY}
        fi
    fi
fi