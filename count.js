// Counting the pages that stand in the middle of joining.
//
// No analytics SDK, no cookies, no third-party script, no identifiers. One POST to our own
// Supabase, which stores a day, a page name, an event name and a number, and nothing else. See
// supabase/migrations/20261125_page_hits.sql for exactly what the table can hold: a caller
// cannot even invent a page or event name, so there is nowhere for free text to end up.
//
// Every call is best-effort and silent. A counter that interrupts a rider mid-join to report its
// own failure would be worse than no counter.
(function () {
  var URL_ = 'https://xiysxfovdlavmvdnfikm.supabase.co/rest/v1/rpc/rs_bump_page';
  var KEY = 'sb_publishable_wBCGdhPOG4Kkc_hltsrrUg_4pGzTkQr';
  var page = document.documentElement.getAttribute('data-page');
  if (!page || !window.fetch) return;

  function bump(event) {
    try {
      fetch(URL_, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', apikey: KEY, Authorization: 'Bearer ' + KEY },
        body: JSON.stringify({ p_page: page, p_event: event }),
        // The click handlers fire as the page is being replaced by the store or the app.
        keepalive: true,
        mode: 'cors'
      })['catch'](function () {});
    } catch (e) {}
  }

  bump('view');
  document.addEventListener('click', function (e) {
    var el = e.target && e.target.closest ? e.target.closest('[data-count]') : null;
    if (el) bump(el.getAttribute('data-count'));
  }, true);

  window.rsBump = bump;   // join.html counts its automatic app-open attempt too
})();
