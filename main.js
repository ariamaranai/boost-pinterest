Element.prototype.addEventListener = function (a, b, c) {
  switch (a) {
    case "animationend":
    case "auxclick":
    case "compositionend":
    case "compositionstart":
    case "compositionupdate":
    case "contextmenu":
    case "cut":
    case "dblclick":
    case "drag":
    case "dragend":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "dragstart":
    case "drop":
    case "encrypted":
    case "error":
    case "gotpointercapture":
    case "invalid":
    case "lostpointercapture":
    case "pointercancel":
    case "pointerdown":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerup":
    case "securitypolicyviolation":
    case "stalled":
    case "test":
    case "touchcancel":
    case "touchend":
    case "touchmove":
    case "touchstart":
    case "volumechange":
    case "webkitAnimationEnd":
    case "webkitAnimationIteration":
    case "webkitAnimationStart":
      return 0;
    default:
      return EventTarget.prototype.addEventListener.call(this, a, b, c);
  }
}
Element.prototype.removeEventListener = function (a, b, c) {
  switch (a) {
    case "animationend":
    case "auxclick":
    case "contextmenu":
    case "cut":
    case "dblclick":
    case "drag":
    case "dragend":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "dragstart":
    case "drop":
    case "encrypted":
    case "error":
    case "gotpointercapture":
    case "invalid":
    case "lostpointercapture":
    case "pointercancel":
    case "pointerdown":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerup":
    case "securitypolicyviolation":
    case "stalled":
    case "test":
    case "touchcancel":
    case "touchend":
    case "touchmove":
    case "touchstart":
    case "volumechange":
    case "webkitAnimationEnd":
    case "webkitAnimationIteration":
    case "webkitAnimationStart":
      return 0;
    default:
      return EventTarget.prototype.removeEventListener.call(this, a, b, c);
  }
}
{
  // var z = {};
  let has = (a, b) => {
    switch (b) {
      case "WebkitAnimation":
      case "WebkitLineClamp":
      case "WebkitMaskImage":
      case "WebkitTransform":
      case "WebkitUserSelect":
      case "accessibilityID":
      case "alt":
      case "altKey":
      case "animation":
      case "animationDelay":
      case "animationName":
      case "aria-activedescendant":
      case "aria-autocomplete":
      case "aria-checked":
      case "aria-current":
      case "aria-busy":
      case "aria-controls":
      case "aria-describedby":
      case "aria-disabled":
      case "aria-expanded":
      case "aria-haspopup":
      case "aria-hidden":
      case "aria-label":
      case "aria-labelledby":
      case "aria-live":
      case "aria-multiline":
      case "aria-owns":
      case "aria-pressed":
      case "aria-required":
      case "ariaActiveDescendantID":
      case "ariaAutoComplete":
      case "ariaExpanded":
      case "ariaHasPopup":
      case "ariaLabel":
      case "ariaOwneeID":
      case "ariaProps":
      case "autoCapitalize":
      case "autoComplete":
      case "autoCorrect":
      case "backgroundColor":
      case "backgroundImage":
      case "backgroundPosition":
      case "backgroundRepeat":
      case "backgroundSize":
      case "borderColor":
      case "borderRadius":
      case "borderRight":
      case "borderStyle":
      case "borderTop":
      case "boxShadow":
      case "color":
      case "contentEditable":
      case "crossOrigin":
      // case "dangerouslySetInlineStyle":
      // case "dangerouslySetInnerHTML":
      case "data-test-image-signature":
      case "data-test-pin-id":
      case "data-test-pin-slot-index":
      case "data-test-id":
      case "data-testid":
      case "dataTestId":
      case "decoding":
      case "disabled":
      // case "direction":
      case "fetchPriority":
      case "fetchpriority":
      case "handleNewBoardAnimationCompletion":
      case "isDragWithinBounds":
      case "loading":
      case "loop":
      case "metaKey":
      case "movementX":
      case "movementY":
      case "onAnimationIteration":
      case "onAnimationEnd":
      case "onAnimationStart":
      case "onCompositionEnd":
      case "onCompositionStart":
      case "onCompositionUpdate":
      case "onContextMenu":
      case "onCopy":
      case "onCut":
      case "onDoubleClick":
      case "onDragEnd":
      case "onDragEnter":
      case "onDragLeave":
      case "onDragOver":
      case "onDragStart":
      case "onDrop":
      case "onEncrypted":
      case "onError":
      case "onInvalid":
      case "onPaste":
      case "onStalled":
      case "onTouchCancel":
      case "onTouchEnd":
      case "onTouchMove":
      case "onTouchStart":
      case "onVolumeChange":
      case "opacity":
      case "playsInline":
      case "rounding":
      case "savedGradient":
      case "touchAction":
      case "role":
      case "shiftKey":
      case "spellCheck":
      case "suppressContentEditableWarning":
      case "tabIndex":
      case "textDecoration":
      case "textDirectionality":
      case "theme":
      case "tiltX":
      case "tiltY":
      case "title":
      case "twist":
        return 0;
      default:
        // b && typeof b == "string" && b.length > 2 && (z[b] ??= 0, ++z[b]);
        return b in a;
    }
  }
  Object.prototype.hasOwnProperty = function (a) { return has(this, a) }
  Object.prototype.hasOwnProperty.call = has;
}