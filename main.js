{
  // var z = {};
  let has = (a, b) => {
    switch (b) {
      case "alt":
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
      case "backgroundColor":
      case "borderColor":
      case "borderRadius":
      case "borderRight":
      case "borderStyle":
      case "borderTop":
      case "boxShadow":
      case "color":
      case "data-test-id":
      case "data-test-image-signature":
      case "data-test-pin-id":
      case "data-test-pin-slot-index":
      case "dataTestId":
      case "disabled":
      // case "direction":
      case "fetchPriority":
      case "fetchpriority":
      case "isDragWithinBounds":
      case "loop":
      case "onAnimationIteration":
      case "onAnimationEnd":
      case "onAnimationStart":
      case "onContextMenu":
      case "onDoubleClick":
      case "onDragEnd":
      case "onDragEnter":
      case "onDragLeave":
      case "onDragOver":
      case "onDragStart":
      case "onDrop":
      case "onError":
      case "onInvalid":
      case "onTouchCancel":
      case "onTouchEnd":
      case "onTouchMove":
      case "onTouchStart":
      case "onVolumeChange":
      case "opacity":
      case "tabIndex":
      case "textDirectionality":
      case "theme":
      case "tiltX":
      case "tiltY":
      case "title":
      case "twist":
        return 0;
      default:
        // typeof b == "string" && b.length > 2 && (z[b] ? ++z[b] : z[b] = 1);
        return b in a;
    }
  }
  Object.prototype.hasOwnProperty = function (a) { return has(this, a) }
  Object.prototype.hasOwnProperty.call = has;
}