# Werewolf-DataVault
**Stable Script API**
- @minecraft/server - 2.0.0
- @minecraft/server-ui - 2.0.0

## Description
This behavior pack serves as the persistent data vault for the Werewolf game. It is a dedicated storage module, designed to be immutable and stable across all future versions of Minecraft Werewolf. Other addons interact with it exclusively via script events to store and retrieve shared data.

## Runtime
- Node.js

## Setup
- `npm install`

## Build
- ts compile: `tsc`
- deploy: `npm run build`
- Auto deploy: `npm run dev`