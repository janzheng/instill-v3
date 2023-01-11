
## Instill Readme

- This Instill App is made up of a few core routes:
  - /api/
  - /profiles/
  - /join/
  - /spaces/

- Any other "full-fledged" app can selectively implement these routes. The API relies on reading the correct config data.
  - Config data comes from local `$instill/instill-config` path for `baseConfig`, which is used by both back-end and front-end