/** This file is used to define the sidebar on the left side of the screen. */

import {
  SideBarEntries
} from "./wisdom_modules/core/src/app/frame/side-bar/side-bar-entries";

/**
 * This constant is used to inject language content into the translator.
 *
 * The keys to use the injected will use the namespace "sidebar".
 */
export const langs = {
  de_DE: {
    "water-usage": "Wasserverbrauch"
  },
  en_US: {
    "water-usage": "Water Usage"
  }
}

/**
 * This constant describes how the sidebar should directly look like.
 *
 * For further explanation check {@link SideBarEntries}.
 */
export const sidebar: SideBarEntries = [
  [
    "Proof of Concept", "rocket", [
      ["Example", "sparkles", "example"],
      ["No Example", null, null],
      ["Pump Models", null, "pump-models"]
    ]
  ],
  [
    "sidebar.water-usage", "bar-chart", [
      ["water-usage-forecasts.label.name", "calendar", "water-usage-forecasts"]
    ]
  ]
]
