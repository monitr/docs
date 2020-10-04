/**
 * Taken from
 * https://github.com/liamjohnston/react-browser-frame
 */

import React, { ReactNode, CSSProperties, FC } from "react";
import styles from "./index.module.scss";

interface Props {
  url?: string;
  padding?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  contentStyle?: CSSProperties;
  showHamburger?: boolean;
}

const BrowserFrame: FC<Props> = ({
  url,
  padding,
  children,
  style,
  className,
  contentStyle = {},
  showHamburger = false,
}: Props) => (
  <div className={`${styles.browserFrame} ${className} shadow--tl`} style={style}>
    <div className={styles.browserFrame__top}>
      <div className={styles["browserFrame__top-buttons"]}>
        <div
          className={`${styles.browserFrame__button} ${styles["browserFrame__button--red"]}`}
        />
        <div
          className={`${styles.browserFrame__button} ${styles["browserFrame__button--yellow"]}`}
        />
        <div
          className={`${styles.browserFrame__button} ${styles["browserFrame__button--green"]}`}
        />
      </div>
      {url && (
        <div className={styles.browserFrame__address} aria-hidden>
          {url}
        </div>
      )}
      {showHamburger && (
        <>
          <div className={styles.browserFrame__burger}>
            <span className={styles["browserFrame__burger-line"]} />
            <span className={styles["browserFrame__burger-line"]} />
            <span className={styles["browserFrame__burger-line"]} />
          </div>
        </>
      )}
    </div>
    <div
      className="browser-frame__body"
      style={{
        padding: padding ? padding : "initial",
        overflow: "hidden",
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        ...contentStyle,
      }}
    >
      {children}
    </div>
  </div>
);

export default BrowserFrame;
