const { log, error } = console
export const logger = {
  debug: (message) => log(`[DEBUG] ${message}`),
  error: (message) => error(`[ERROR] ${message}`),
}
