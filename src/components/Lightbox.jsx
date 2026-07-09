import { useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { LightboxContext, useLightbox } from "./lightbox-context";

// Lightweight, dependency-free fullscreen image viewer.
//
// Any page wraps its content in <LightboxProvider> (done once in Layout) and
// then opens the viewer via the openLightbox() from useLightbox(), or simply
// renders a <ZoomImage> which wires the click/keyboard handlers itself.
//
// `images` is an array of { src, alt } describing one gallery; `index` is the
// image to open first. Prev/next then step through that same array.

export function LightboxProvider({ children }) {
  const [state, setState] = useState({ open: false, images: [], index: 0 });

  const openLightbox = useCallback((images, index = 0) => {
    if (!Array.isArray(images) || images.length === 0) return;
    const safeIndex = Math.max(0, Math.min(index, images.length - 1));
    setState({ open: true, images, index: safeIndex });
  }, []);

  const close = useCallback(() => {
    setState((s) => ({ ...s, open: false }));
  }, []);

  const step = useCallback((delta) => {
    setState((s) => {
      if (s.images.length < 2) return s;
      const count = s.images.length;
      return { ...s, index: (s.index + delta + count) % count };
    });
  }, []);

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      {state.open && (
        <LightboxOverlay
          images={state.images}
          index={state.index}
          onClose={close}
          onStep={step}
        />
      )}
    </LightboxContext.Provider>
  );
}

function LightboxOverlay({ images, index, onClose, onStep }) {
  const current = images[index];
  const hasMultiple = images.length > 1;
  const closeRef = useRef(null);

  // Keyboard controls + scroll lock while the viewer is open. Restore the
  // previously focused element on close so keyboard users land back where
  // they were.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") onStep(1);
      else if (e.key === "ArrowLeft") onStep(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose, onStep]);

  if (!current) return null;

  return createPortal(
    <div
      className="ng-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={current.alt || "Image viewer"}
      onClick={onClose}
    >
      <button
        type="button"
        ref={closeRef}
        className="ng-lightbox__btn ng-lightbox__close"
        aria-label="Close"
        onClick={onClose}
      >
        &times;
      </button>

      {hasMultiple && (
        <button
          type="button"
          className="ng-lightbox__btn ng-lightbox__nav ng-lightbox__prev"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            onStep(-1);
          }}
        >
          &#8249;
        </button>
      )}

      <figure className="ng-lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img className="ng-lightbox__img" src={current.src} alt={current.alt || ""} />
        {(current.alt || hasMultiple) && (
          <figcaption className="ng-lightbox__caption">
            {current.alt && <span>{current.alt}</span>}
            {hasMultiple && (
              <span className="ng-lightbox__counter">
                {index + 1} / {images.length}
              </span>
            )}
          </figcaption>
        )}
      </figure>

      {hasMultiple && (
        <button
          type="button"
          className="ng-lightbox__btn ng-lightbox__nav ng-lightbox__next"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            onStep(1);
          }}
        >
          &#8250;
        </button>
      )}
    </div>,
    document.body,
  );
}

// Drop-in replacement for <img> that opens the fullscreen viewer on click or
// Enter/Space. Pass the whole gallery via `images` and this image's position
// via `index`; every other <img> prop (src, alt, className, loading, data-aos…)
// is forwarded unchanged so existing styling/animations keep working.
export function ZoomImage({ images, index = 0, className = "", ...imgProps }) {
  const { openLightbox } = useLightbox();
  const open = () => openLightbox(images, index);

  return (
    <img
      {...imgProps}
      className={`ng-zoomable ${className}`.trim()}
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      }}
    />
  );
}
