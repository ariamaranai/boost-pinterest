// var kkk = {};
Object.prototype.hasOwnProperty.call = (a, b) => {
  switch (b) {
    case "alt":
    case "aria-activedescendant":
    case "aria-autocomplete":
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
    case "backgroundColor":
    case "color":
    case "data-test-id":
    case "data-test-image-signature":
    case "data-test-pin-id":
    case "data-test-pin-slot-index":
    case "dataTestId":
    // case "direction":
    case "fetchPriority":
    case "fetchpriority":
    case "loop":
    case "onError":
    case "opacity":
    case "onTouchEnd":
    case "onTouchStart":
      return 0;
    default:
      // typeof b == "string" && b.length > 2 && (kkk[b] ? ++kkk[b] : kkk[b] = 1);
      return b in a;
  }
}