import overlay from 'app/templates/overlay';
import simpleHash from 'app/scripts/util/simpleHash';

const createOverlay = (data) => {
  const elementId = `minr_${simpleHash(data.minerName)}`;
  const overlayElement = overlay({minerName: data.minerName});
  const createOverlayFunction = `
    var timeout;
    var shadowRoot = (document.createElement('div')).attachShadow({mode: 'open'});
    shadowRoot.host.setAttribute('id', '${elementId}');
    shadowRoot.innerHTML = '${overlayElement}';
    document.body.appendChild(shadowRoot.host);

    var animateAndCleanup = function() {
      (shadowRoot.getElementById('minr_overlay-container')).className = 'hidden';
      setTimeout(function() {
        var element  = document.getElementById('${elementId}');
        element.parentElement.removeChild(element);
      }, 510);
    };
    timeout = setTimeout(animateAndCleanup, 3000);

    shadowRoot.host.onmouseover = function() { clearTimeout(timeout) };
    shadowRoot.host.onmouseleave = function() { timeout = setTimeout(animateAndCleanup, 1200) };
  `;

  return createOverlayFunction;
};

export default createOverlay;
