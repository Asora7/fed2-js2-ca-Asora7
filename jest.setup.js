// jest.setup.js
Object.defineProperty(window, 'location', {
    value: {
      href: '',
      assign: () => {}, // Mock implementation
      replace: () => {}, // Mock implementation
    },
    writable: true,
});
