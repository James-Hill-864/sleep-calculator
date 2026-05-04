// SleepCycler service worker — handles scheduled bedtime reminders
// No push server needed: reminders are scheduled locally and fire
// as long as the browser is running (even with the tab closed).

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()))

// Map of reminder timeouts so we can cancel if the user clears
const reminders = new Map()

self.addEventListener('message', event => {
  const { type, id, delayMs, title, body } = event.data ?? {}

  if (type === 'SCHEDULE_REMINDER') {
    // Clear any existing reminder with the same id
    if (reminders.has(id)) {
      clearTimeout(reminders.get(id))
    }

    if (delayMs <= 0) return

    const handle = setTimeout(async () => {
      reminders.delete(id)
      await self.registration.showNotification(title ?? 'SleepCycler', {
        body: body ?? 'Time to start your bedtime routine.',
        icon: '/favicon-32.png',
        badge: '/favicon-32.png',
        tag: id,
        renotify: false,
        requireInteraction: false,
      })
    }, delayMs)

    reminders.set(id, handle)
  }

  if (type === 'CANCEL_REMINDER') {
    if (reminders.has(id)) {
      clearTimeout(reminders.get(id))
      reminders.delete(id)
    }
  }
})

// When user taps the notification, focus the app
self.addEventListener('notificationclick', event => {
  event.notification.close()
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clients => {
      for (const client of clients) {
        if ('focus' in client) return client.focus()
      }
      return self.clients.openWindow('/')
    })
  )
})
