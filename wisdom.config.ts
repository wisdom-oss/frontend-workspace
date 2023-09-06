import {
  SideBarEntries
} from "./wisdom_modules/core/src/app/frame/side-bar/side-bar-entries";
import { AuthConfig } from "./wisdom_modules/core/src/app/auth/types/AuthConfig";

import env from "./env";

/**
 * This constant is used to inject language content into the translator.
 *
 * The keys to use the injected will use the namespace `sidebar`.
 */
export const langs = {
  de_DE: {
    "water-usage": "Wasserverbrauch"
  },
  en_US: {
    "water-usage": "Water Usage"
  }
};

/**
 * This constant describes how the sidebar should directly look like.
 *
 * For further explanation see {@link SideBarEntries}.
 */
export const sidebar: SideBarEntries = [
  [
    "Proof of Concept", "rocket", [
      ["Example", "sparkles", "example"],
      ["No Example", null, null],
      ["Be Water Smart", "sparkles", "be-water-smart"],
      ["pump-models.label.name", "cube", "pump-models"]
    ]
  ],
  [
    "sidebar.water-usage", "bar-chart", [
      ["water-usage-forecasts.label.name", "calendar", "water-usage-forecasts"]
    ]
  ]
];

export const authConfig: AuthConfig = {
  authority: env.OIDC_AUTHORITY,
  clientId: env.OIDC_CLIENT_ID
};
