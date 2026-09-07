document.querySelectorAll('.portal-card').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
});

document.querySelectorAll('.content-link').forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    }
});

const facilityDetailTriggers = [...document.querySelectorAll('.facility-detail-trigger')];

const setFacilityDetailOpen = (trigger, isOpen, returnFocus = false) => {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;

    if (!panel) {
        return;
    }

    trigger.setAttribute('aria-expanded', String(isOpen));
    panel.setAttribute('aria-hidden', String(!isOpen));
    panel.toggleAttribute('inert', !isOpen);
    panel.classList.toggle('gym-rules-panel-open', isOpen);

    if (returnFocus) {
        trigger.focus();
    }
};

facilityDetailTriggers.forEach((trigger) => {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;
    const closeButton = panel?.querySelector('.gym-rules-close');

    trigger.addEventListener('click', () => {
        const willOpen = trigger.getAttribute('aria-expanded') !== 'true';

        if (willOpen) {
            facilityDetailTriggers.forEach((otherTrigger) => {
                if (otherTrigger !== trigger) {
                    setFacilityDetailOpen(otherTrigger, false);
                }
            });
        }

        setFacilityDetailOpen(trigger, willOpen);
    });

    closeButton?.addEventListener('click', () => {
        setFacilityDetailOpen(trigger, false, true);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') {
        return;
    }

    const openTrigger = facilityDetailTriggers.find(
        (trigger) => trigger.getAttribute('aria-expanded') === 'true'
    );

    if (openTrigger) {
        setFacilityDetailOpen(openTrigger, false, true);
    }
});
