import {
  SideBarEntries
} from "./wisdom_modules/core/src/app/frame/side-bar/side-bar-entries";
import {AuthConfig} from "./wisdom_modules/core/src/app/auth/types/AuthConfig";

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
  authority: "https://auth.wisdom-demo.uol.de/application/o/wisdom-dashboard/.well-known/openid-configuration",
  clientId: "ac2abe613a726b289b24ac7e8f19a8cda35ac29d"
};
