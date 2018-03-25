import { mount } from '@vue/test-utils';
import Version from '@/components/version.vue';

describe('#Version', () => {
  it('should mounted.', () => {
    const wrapper = mount(Version);
    expect(wrapper.vm.versions).toBeTruthy();
  });
});
