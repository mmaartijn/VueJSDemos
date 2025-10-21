import { mount, flushPromises } from '@vue/test-utils';
import AgeGuess from '../AgeGuess.vue';
import { describe, beforeAll, afterEach, afterAll } from 'vitest';
import { it, expect } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

const server = setupServer();

describe('AgeGuess.vue', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  describe('Tests with John Doe, 30 years old', () => {
    // Arrange
    const wrapper = mount(AgeGuess);
    const nameInput = wrapper.find('input');
    const button = wrapper.find('button');
    const expectedName = 'John';
    const expectedAge = 30;
    
    beforeAll(() => {
        server.use(
            http.get('https://api.agify.io/', ({ request }) => {
                return HttpResponse.json({ name: expectedName, age: expectedAge });
            })
        );
    });

    it('should fill in the name after search', async () => {
        // Act
        await nameInput.setValue(expectedName);
        await button.trigger('click');

        await flushPromises();

        // Assert
        expect(wrapper.text()).toContain(`Name: ${expectedName}`);
    });

    it('should fill in the age after search', async () => {
        // Act
        await nameInput.setValue(expectedName);
        await button.trigger('click');

        await flushPromises();

        // Assert
        expect(wrapper.text()).toContain(`Age: ${expectedAge}`);

    });

    })
});
