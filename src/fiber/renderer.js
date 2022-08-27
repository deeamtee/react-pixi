import Reconciler from 'react-reconciler';
import * as PIXI from "pixi.js";

const hostConfig = {
    now: Date.now,
    supportsMutation: true,

    shouldSetTextContent: (type, props) => { // 3, 5
        return (
            typeof props.dangerouslySetInnerHTML === 'object' &&
            props.dangerouslySetInnerHTML !== null &&
            props.dangerouslySetInnerHTML.__html !== null
        );
    },
    createInstance: (type, props) => { // 6
        let instance;

        if (type === 'container') {
            instance = new PIXI.Container();
        } else if (type === 'sprite') {
            instance = new PIXI.Sprite(props.texture);
            instance.width = props.width;
            instance.height = props.height;
        } else if (type === 'text') {
            instance = new PIXI.Text(props.text, props.style, props.canvas);
        }

        return instance;
    },
    createTextInstance(text) {
        return document.createTextNode(text);
    },
    appendInitialChild: (parent, child) => {
        parent.addChild(child);
    },
    appendChildToContainer: (container, child) => {
        container.addChild(child);
    },
    removeChild: (parentInstance, child) => {
        child.remove();
    },
    removeChildFromContainer: (container, child) => {
        child.remove();
    },
    clearContainer: (container) => {
        container.innerHTML = '';
    },
    getPublicInstance: (instance) => {
        return instance;
    },
    getRootHostContext: rootContainerInstance => {
        return null;
    }, // 1
    getChildHostContext: (parentHostContext, type, rootContainerInstance) => { }, // 2, 4
    prepareForCommit: rootContainerInstance => { },
    resetAfterCommit: rootContainerInstance => { },
    finalizeInitialChildren: () => false // 7
};

export const render = (jsx, rootNode) => {
    const reconciler = Reconciler(hostConfig);
    const container = reconciler.createContainer(rootNode);
    reconciler.updateContainer(jsx, container, null, () => { });
}