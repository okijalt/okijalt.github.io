
// ---- Additions (Oct 2026) -------------------------------------------------
// Tabs (Trends Conference presenter information)
document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var buttons = group.querySelectorAll('[role="tab"]');
    var panels = group.querySelectorAll('.tabpanel');
    function activate(btn) {
        buttons.forEach(function (b) { b.setAttribute('aria-selected', b === btn ? 'true' : 'false'); });
        panels.forEach(function (p) { p.classList.toggle('active', p.id === btn.getAttribute('aria-controls')); });
    }
    buttons.forEach(function (b) { b.addEventListener('click', function () { activate(b); }); });
});

// Global Summit 2026 archive: expand / collapse presentation cards and abstracts
function togglePres(header) {
    var body = header.nextElementSibling;
    var btn = header.querySelector('.pres-toggle');
    if (!body) return;
    body.classList.toggle('open');
    if (btn) btn.classList.toggle('open');
}
function toggleAbstract(btn) {
    var card = btn.closest('.video-card');
    card.classList.toggle('expanded');
    btn.textContent = card.classList.contains('expanded') ? '▾ Hide abstract' : '▸ Abstract';
}
function setAllPres(open) {
    document.querySelectorAll('.archive .pres-body').forEach(function (b) { b.classList.toggle('open', open); });
    document.querySelectorAll('.archive .pres-toggle').forEach(function (b) { b.classList.toggle('open', open); });
}
// Archive search
(function () {
    var box = document.getElementById('archive-search');
    if (!box) return;
    var items = Array.prototype.slice.call(document.querySelectorAll('.archive .presentation-card, .archive .video-card'));
    var count = document.getElementById('search-count');
    box.addEventListener('input', function () {
        var q = box.value.trim().toLowerCase();
        var shown = 0;
        items.forEach(function (el) {
            var hit = !q || el.textContent.toLowerCase().indexOf(q) !== -1;
            el.classList.toggle('is-hidden', !hit);
            if (hit) shown++;
        });
        if (count) count.textContent = q ? (shown + ' of ' + items.length + ' presentations match') : '';
    });
})();
