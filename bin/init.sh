#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/.."
cd "$DIR" && yarn install && rm -rf ../vf-ui-components/node_modules && npm link ../vf-ui-components