// Shared helper for the site's "fake submit" buttons (no backend wired up yet —
// this preserves the original static site's placeholder behavior).
export function flashSubmit(
  btn,
  { sentText = "Sent! We'll contact you soon.", idleText = 'Send Message', delay = 4000 } = {}
) {
  if (!btn) return;
  const originalHTML = btn.innerHTML;
  const originalBg = btn.style.background;
  const originalBorder = btn.style.borderColor;
  btn.innerHTML = `<i class="fas fa-check-circle"></i> ${sentText}`;
  btn.style.background = '#2e7d32';
  btn.style.borderColor = '#2e7d32';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = originalHTML || `<i class="fas fa-paper-plane"></i> ${idleText}`;
    btn.style.background = originalBg;
    btn.style.borderColor = originalBorder;
    btn.disabled = false;
  }, delay);
}
