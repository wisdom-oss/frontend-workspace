import {
  SideBarEntries
} from "./wisdom_modules/core/src/app/frame/side-bar/side-bar-entries";

export const langs = {
  de_DE: {
    "water-usage": "Wasserverbrauch"
  },
  en_US: {
    "water-usage": "Water Usage"
  }
}
export const sidebar: SideBarEntries = [
  [
    "Proof of Concept", "rocket", [
      ["Example", "sparkles", "example"],
      ["No Example", null, null]
    ]
  ],
  [
    "sidebar.water-usage", "bar-chart", [
      ["water-usage-forecasts.label.name", "calendar", "water-usage-forecasts"]
    ]
  ]
]
