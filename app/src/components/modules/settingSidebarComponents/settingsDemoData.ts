export type ToggleSetting = {
  id: string
  kind: "toggle"
  title: string
  description?: string
  enabled: boolean
}

export type SliderSetting = {
  id: string
  kind: "slider"
  title: string
  description: string
  value: number
  marks: number[]
}

export type DangerSetting = {
  id: string
  kind: "danger"
  title: string
  description: string
}

export type GeneralSettingItem = ToggleSetting | SliderSetting | DangerSetting

export type ChoiceSetting = {
  id: string
  kind: "choice"
  title: string
  description: string
  options: string[]
  selected: string
}

export type ColorSetting = {
  id: string
  kind: "colors"
  title: string
  description: string
  colors: { id: string; value: string }[]
  selected: string
}

export type AppearanceSettingItem = ChoiceSetting | ColorSetting | ToggleSetting

export type AboutAction = {
  id: string
  title: string
  description: string
}

export type AboutLink = {
  id: string
  title: string
}

export const generalSettings = {
  title: "General",
  description: "Configure how ClipStack works for you",
  items: [
    {
      id: "clipboard-capture",
      kind: "toggle",
      title: "Clipboard capture",
      description: "Automatically save copied content from websites and apps",
      enabled: true,
    },
    {
      id: "history-limit",
      kind: "slider",
      title: "History limit",
      description: "Maximum number of items to keep",
      value: 50,
      marks: [10, 25, 50, 100, 200],
    },
    {
      id: "preview-length",
      kind: "slider",
      title: "Item preview length",
      description: "Characters to show in list",
      value: 150,
      marks: [50, 100, 150, 300, 500],
    },
    {
      id: "type-icons",
      kind: "toggle",
      title: "Show content type icons",
      enabled: true,
    },
    {
      id: "copy-sound",
      kind: "toggle",
      title: "Play copy sound",
      enabled: true,
    },
    {
      id: "clear-history",
      kind: "danger",
      title: "Clear all history",
      description: "This will permanently delete all saved items",
    },
  ] satisfies GeneralSettingItem[],
}

export const appearanceSettings = {
  title: "Appearance",
  description: "Customize the look and feel of ClipStack",
  items: [
    {
      id: "theme",
      kind: "choice",
      title: "Theme",
      description: "Choose your preferred theme",
      options: ["Light", "Dark", "System"],
      selected: "Light",
    },
    {
      id: "accent",
      kind: "colors",
      title: "Accent color",
      description: "Change the accent color used across the app",
      colors: [
        { id: "blue", value: "#3b6cff" },
        { id: "purple", value: "#7c5cff" },
        { id: "red", value: "#f05252" },
        { id: "orange", value: "#f59a3a" },
        { id: "green", value: "#3dbe6e" },
        { id: "gray", value: "#9aa3b2" },
      ],
      selected: "blue",
    },
    {
      id: "density",
      kind: "choice",
      title: "Density",
      description: "Adjust spacing and size of elements",
      options: ["Compact", "Comfortable", "Spacious"],
      selected: "Comfortable",
    },
    {
      id: "menu-position",
      kind: "choice",
      title: "Menu position",
      description: "Choose where to open the popup",
      options: ["Center", "Side", "Cursor"],
      selected: "Center",
    },
    {
      id: "animations",
      kind: "toggle",
      title: "Show animations",
      description: "Enable smooth animations and transitions",
      enabled: true,
    },
  ] satisfies AppearanceSettingItem[],
}

export const aboutSettings = {
  title: "About",
  description: "Information about ClipStack",
  app: {
    name: "ClipStack",
    version: "Version 1.0.0",
    summary:
      "A clean, fast and powerful clipboard manager for your everyday workflow.",
  },
  actions: [
    {
      id: "updates",
      title: "Check for updates",
      description: "See if a new version is available",
    },
    {
      id: "changelog",
      title: "View changelog",
      description: "What's new in the latest version",
    },
    {
      id: "feedback",
      title: "Send feedback",
      description: "Help us improve ClipStack",
    },
    {
      id: "rate",
      title: "Rate ClipStack",
      description: "Show your support",
    },
  ] satisfies AboutAction[],
  legalTitle: "Legal",
  legal: [
    { id: "privacy", title: "Privacy Policy" },
    { id: "terms", title: "Terms of Service" },
    { id: "licenses", title: "Open source licenses" },
  ] satisfies AboutLink[],
}
