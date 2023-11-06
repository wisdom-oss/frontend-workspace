import {
  SideBarEntries
} from "./wisdom_modules/core/src/app/frame/side-bar/side-bar-entries";
import { AuthConfig } from "./wisdom_modules/core/src/app/auth/types/AuthConfig";

import env from "./env";

export const name = "WISdoM-OSS";

/**
 * new sidebar with the water cycle headings. 
 *First iteration, WIP
 * This constant describes how the sidebar should directly look like.
 *
 * For further explanation see {@link SideBarEntries}.
 */
export const sidebar: SideBarEntries = [
  [
    "sidebar.precipitation", "rainy", [
      ["weather.label.name", "partly-sunny", "weather-data"],
    ]
  ],
  [
    "sidebar.groundwater", "earth", [
      ["Wasserrechte", "file-tray-full", ""]
    ]
  ],
  [
    "sidebar.waterworks", "water", [
      ["pump-models.label.name", "business", "pump-models"],
      ["water-usage-forecasts.label.name", "bar-chart", "water-usage-forecasts"],
      ["Predictive Maintenance", "stats-chart", ""]
    ]
  ],
  [
    "sidebar.water-usage", "trending-up", [
      ["B-Water-Smart", "radio", "be-water-smart"]
    ]
  ],
  [
    "Proof of Concept", "sparkles", [
      ["example.label.name", "reload-circle", "example"]
    ]
  ],
];

/**
 * This constant is used to inject language content into the translator.
 *
 * The keys to use the injected will use the namespace `sidebar`.
 */
export const langs = {
  de_DE: {
    "water-usage": "Wasserverbauch",
    "precipitation": "Niederschlag",
    "groundwater": "Grundwasser",
    "waterworks": "Wasserwerke"
  },
  en_US: {
    "water-usage": "Water Usage",
    "precipitation": "Precipitation",
    "groundwater": "Groundwater",
    "waterworks": "Waterworks"
  }
};

/**
 * constant used to authenticate the credentials provided by the environment variable .env
 */
export const authConfig: AuthConfig = {
  authority: env.OIDC_AUTHORITY,
  clientId: env.OIDC_CLIENT_ID
};
