const reconciler = Reconciler(hostConfig);

const RendererAPI = {
    render(jsx, container, callback = () => { }) {
        reconciler.updateContainer(jsx, container, callback);
        // Call MyRenderer.updateContainer() to schedule changes on the roots.
        // See ReactDOM, React Native, or React ART for practical examples.
    }
};

export default RendererAPI;