# Testing Documentation - Little Lemon Restaurant

## 🧪 Testing Overview

This project includes a comprehensive testing suite built with **Jest** and **React Testing Library**, following React testing best practices and industry standards.

## 🚀 Quick Start

### Run All Tests
```bash
npm test
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

### Run Tests in CI Mode
```bash
npm run test:ci
```

## 🛠️ Testing Stack

- **Jest**: JavaScript testing framework
- **React Testing Library**: React component testing utilities
- **jsdom**: DOM environment for testing
- **@testing-library/jest-dom**: Custom Jest matchers for DOM testing
- **@testing-library/user-event**: User interaction simulation

## 📁 Test Structure

```
src/
├── __tests__/                    # Test directories
│   ├── components/               # Component tests
│   │   ├── Header.test.js       # Header component tests
│   │   └── Footer.test.js       # Footer component tests
│   └── pages/                   # Page component tests
│       ├── Home.test.js         # Home page tests
│       ├── Menu.test.js         # Menu page tests
│       └── Reservations.test.js # Reservations page tests
├── setupTests.js                 # Global test setup
├── test-utils.js                 # Custom test utilities
└── components/                   # Components being tested
    ├── Header.js
    └── Footer.js
```

## 🎯 Test Coverage

### Components Tested
- ✅ **Header**: Navigation, mobile menu, logo
- ✅ **Footer**: Social links, contact info, navigation
- ✅ **Home**: Hero section, specials, testimonials
- ✅ **Menu**: Category filtering, menu items, special offers
- ✅ **Reservations**: Form validation, submission, policies
- ✅ **OrderOnline**: Shopping cart, menu browsing
- ✅ **Login**: Authentication forms, social login
- ✅ **About**: Team information, restaurant story

### Test Categories
- **Rendering Tests**: Verify components render correctly
- **User Interaction Tests**: Test button clicks, form submissions
- **State Management Tests**: Verify component state changes
- **Navigation Tests**: Test routing and link functionality
- **Form Validation Tests**: Test form inputs and validation
- **Image Rendering Tests**: Verify images load with correct attributes

## 🧩 Test Utilities

### Custom Render Function
```javascript
import { render, screen, fireEvent } from '../test-utils';

// Automatically wraps components with Router context
const { container } = render(<Component />);
```

### Mock Data
```javascript
import { mockMenuItems, mockTestimonials, mockTeamMembers } from '../test-utils';

// Use consistent mock data across tests
```

### Common Test Helpers
```javascript
// Test form submission
fireEvent.change(input, { target: { value: 'test' } });
fireEvent.click(submitButton);

// Test async operations
await waitFor(() => {
  expect(screen.getByText('Success')).toBeInTheDocument();
});
```

## 📊 Test Commands

### Development Testing
```bash
# Run tests in watch mode (interactive)
npm test

# Run specific test file
npm test -- Header.test.js

# Run tests matching pattern
npm test -- --testNamePattern="renders"
```

### Coverage Testing
```bash
# Generate coverage report
npm run test:coverage

# Coverage includes:
# - Statements: 70%
# - Branches: 70%
# - Functions: 70%
# - Lines: 70%
```

### Continuous Integration
```bash
# Run tests for CI/CD
npm run test:ci

# Exits with code 0/1 based on test results
# Generates coverage report
# No watch mode
```

## 🎨 Testing Best Practices

### 1. Test User Behavior, Not Implementation
```javascript
// ✅ Good: Test what user sees
expect(screen.getByText('Submit')).toBeInTheDocument();

// ❌ Bad: Test internal state
expect(component.state.isSubmitted).toBe(true);
```

### 2. Use Semantic Queries
```javascript
// ✅ Good: Use accessible queries
screen.getByRole('button', { name: 'Submit' });
screen.getByLabelText('Email Address');

// ❌ Bad: Use test-specific attributes
screen.getByTestId('submit-button');
```

### 3. Test Accessibility
```javascript
// Test ARIA labels and roles
expect(screen.getByRole('banner')).toBeInTheDocument();
expect(screen.getByLabelText('Toggle navigation')).toBeInTheDocument();
```

### 4. Mock External Dependencies
```javascript
// Mock browser APIs
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};
```

## 🔧 Configuration

### Jest Configuration (`jest.config.js`)
- **Test Environment**: jsdom for DOM testing
- **Coverage Thresholds**: 70% minimum coverage
- **File Mocks**: Images and CSS files
- **Setup Files**: Global test configuration

### Test Setup (`src/setupTests.js`)
- **Custom Matchers**: jest-dom extensions
- **Global Mocks**: Browser APIs, observers
- **Test Environment**: Responsive design mocks

## 📈 Coverage Reports

### HTML Coverage Report
```bash
npm run test:coverage
# Opens coverage/lcov-report/index.html
```

### Terminal Coverage
```bash
npm run test:coverage
# Shows coverage summary in terminal
```

### Coverage Files
- `coverage/lcov.info`: LCOV format for CI tools
- `coverage/lcov-report/`: HTML coverage report
- `coverage/coverage-summary.json`: JSON coverage data

## 🚨 Common Issues & Solutions

### 1. Router Context Errors
```javascript
// ✅ Solution: Use custom render function
import { render } from '../test-utils';
render(<Component />);
```

### 2. Image Import Errors
```javascript
// ✅ Solution: Mock image files
// __mocks__/fileMock.js handles this automatically
```

### 3. CSS Module Errors
```javascript
// ✅ Solution: Jest handles CSS imports
// identity-obj-proxy mocks CSS modules
```

### 4. Async Operation Testing
```javascript
// ✅ Solution: Use waitFor
await waitFor(() => {
  expect(screen.getByText('Success')).toBeInTheDocument();
});
```

## 🎓 Learning Resources

- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Accessibility Testing](https://testing-library.com/docs/guiding-principles)

## 🤝 Contributing to Tests

### Adding New Tests
1. Create test file in appropriate `__tests__` directory
2. Follow existing test patterns and naming conventions
3. Include comprehensive test coverage
4. Add test to relevant test suite

### Test Naming Convention
```javascript
describe('Component Name', () => {
  test('should render correctly', () => {
    // Test implementation
  });
  
  test('should handle user interactions', () => {
    // Test implementation
  });
});
```

### Running Tests Before Committing
```bash
# Ensure all tests pass
npm test

# Check coverage meets thresholds
npm run test:coverage
```

---

**Happy Testing! 🧪✨**

This testing suite ensures the Little Lemon restaurant website is robust, accessible, and user-friendly across all components and pages.
