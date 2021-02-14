import React from "react";
import DefaultNavbarItem from "@theme/NavbarItem/DefaultNavbarItem";
import LocaleDropdownNavbarItem from "@theme/NavbarItem/LocaleDropdownNavbarItem";

import { PrimaryButton, DefaultButton } from "@fluentui/react";

const NavbarItemComponents = {
  // Custom components go here
  defaultButton: () => DefaultButton,
  primaryButton: () => PrimaryButton,

  // Default theme components
  default: () => DefaultNavbarItem,
  localeDropdown: () => LocaleDropdownNavbarItem,

  // Need to lazy load these items as we don't know for sure the docs plugin is loaded
  // See https://github.com/facebook/docusaurus/issues/3360
  docsVersion: () =>
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@theme-original/NavbarItem/DocsVersionNavbarItem").default,
  docsVersionDropdown: () =>
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@theme-original/NavbarItem/DocsVersionDropdownNavbarItem").default,
  doc: () =>
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@theme/NavbarItem/DocNavbarItem").default,
} as const;

const getNavbarItemComponent = (
  type: keyof typeof NavbarItemComponents = "default"
) => {
  const navbarItemComponent = NavbarItemComponents[type];
  if (!navbarItemComponent) {
    throw new Error(`No NavbarItem component found for type=${type}.`);
  }
  return navbarItemComponent();
};

export default function NavbarItem({ type, component, ...props }): JSX.Element {
  const NavbarItemComponent = getNavbarItemComponent(type || component); // Check component as fallback to type
  return <NavbarItemComponent {...props} />;
}
