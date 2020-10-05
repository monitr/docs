import React from "react";
import DefaultNavbarItem from "@theme-original/NavbarItem/DefaultNavbarItem";
import { PrimaryButton } from "@fluentui/react";

const NavbarItemComponents = {
  // Custom components go here
  button: () => PrimaryButton,

  // Default theme components
  default: () => DefaultNavbarItem,
  // Need to lazy load these items as we don't know for sure the docs plugin is loaded
  // See https://github.com/facebook/docusaurus/issues/3360
  docsVersion: () =>
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@theme-original/NavbarItem/DocsVersionNavbarItem").default,
  docsVersionDropdown: () =>
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("@theme-original/NavbarItem/DocsVersionDropdownNavbarItem").default,
};

const getNavbarItemComponent = (type = "default") => {
  const navbarItemComponent = NavbarItemComponents[type];
  if (!navbarItemComponent) {
    throw new Error(`No NavbarItem component found for type=${type}.`);
  }
  return navbarItemComponent();
};

export default function NavbarItem({ type, component, ...props }) {
  const NavbarItemComponent = getNavbarItemComponent(type || component); // Check component as fallback to type
  return <NavbarItemComponent {...props} />;
}
