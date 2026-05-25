/**
 * Pick `n` items from `pool` uniformly at random, returned in random order.
 *
 * Fisher-Yates on a shallow copy — the input pool is not mutated.
 */
export function selectQuestions(pool, n = 8) {
  const copy = pool.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(n, copy.length));
}
